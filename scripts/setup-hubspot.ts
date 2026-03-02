/**
 * Highland Farms — One-time HubSpot setup script
 *
 * Provisions:
 *   1. Contact property group: highland_farms_inquiry
 *   2. Custom contact properties (hf_event_type, hf_guest_count, hf_preferred_date, hf_referral_source)
 *   3. Deal pipeline: Highland Farms Bookings (6 stages)
 *
 * Run from project root:
 *   npx tsx --env-file .env.local scripts/setup-hubspot.ts
 *
 * After running, copy the pipeline ID from the output and add to .env.local:
 *   HUBSPOT_PIPELINE_ID=<pipeline-id>
 * Then add to Vercel:
 *   vercel env add HUBSPOT_PIPELINE_ID production
 */

import * as fs from "fs";
import * as path from "path";

// Load .env.local manually (no dotenv dependency needed)
try {
  const envPath = path.join(process.cwd(), ".env.local");
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (key && !(key in process.env)) {
      process.env[key] = value;
    }
  }
} catch {
  // .env.local not found — user may have exported env vars directly
}

const API = "https://api.hubapi.com";

const token = process.env.HUBSPOT_ACCESS_TOKEN;
if (!token) {
  console.error("❌ HUBSPOT_ACCESS_TOKEN not set.");
  console.error("   Run: npx tsx --env-file .env.local scripts/setup-hubspot.ts");
  process.exit(1);
}

const authHeaders = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
};

async function apiPost(
  endpoint: string,
  body: unknown
): Promise<{ ok: boolean; status: number; data: unknown }> {
  const res = await fetch(`${API}${endpoint}`, {
    method: "POST",
    headers: authHeaders,
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

// ─── Step 1: Create contact property group ────────────────────────────────────
async function createPropertyGroup() {
  console.log("\n📋 Creating contact property group: highland_farms_inquiry");
  const { ok, status, data } = await apiPost("/crm/v3/properties/contacts/groups", {
    name: "highland_farms_inquiry",
    label: "Highland Farms Inquiry",
  });

  if (ok) {
    console.log("  ✅ Property group created");
  } else if (status === 409) {
    console.log("  ℹ️  Property group already exists (skipping)");
  } else {
    console.error("  ❌ Failed:", JSON.stringify(data, null, 2));
  }
}

// ─── Step 2: Create custom contact properties ─────────────────────────────────
const CONTACT_PROPERTIES = [
  {
    name: "hf_event_type",
    label: "Event Type",
    description: "Type of event: Wedding, Elopement, Farm Stay, etc.",
  },
  {
    name: "hf_guest_count",
    label: "Guest Count",
    description: "Number of guests, e.g. 25-50",
  },
  {
    name: "hf_preferred_date",
    label: "Preferred Date",
    description: "Preferred event date (ISO date string)",
  },
  {
    name: "hf_referral_source",
    label: "Referral Source",
    description: "How they heard about us: Google, Instagram, etc.",
  },
];

async function createContactProperties() {
  console.log("\n🏷️  Creating custom contact properties");
  for (const prop of CONTACT_PROPERTIES) {
    const { ok, status, data } = await apiPost("/crm/v3/properties/contacts", {
      name: prop.name,
      label: prop.label,
      description: prop.description,
      groupName: "highland_farms_inquiry",
      type: "string",
      fieldType: "text",
    });

    if (ok) {
      console.log(`  ✅ Created: ${prop.name}`);
    } else if (status === 409) {
      console.log(`  ℹ️  Already exists: ${prop.name} (skipping)`);
    } else {
      console.error(`  ❌ Failed: ${prop.name}`, JSON.stringify(data, null, 2));
    }
  }
}

// ─── Step 3: Create deal pipeline ─────────────────────────────────────────────
async function createDealPipeline(): Promise<string | undefined> {
  console.log("\n🔄 Creating deal pipeline: Highland Farms Bookings");
  const { ok, status, data } = await apiPost("/crm/v3/pipelines/deals", {
    label: "Highland Farms Bookings",
    displayOrder: 0,
    stages: [
      { label: "New Lead",       displayOrder: 0, metadata: { probability: "0.10" } },
      { label: "Contacted",      displayOrder: 1, metadata: { probability: "0.20" } },
      { label: "Tour Scheduled", displayOrder: 2, metadata: { probability: "0.40" } },
      { label: "Proposal Sent",  displayOrder: 3, metadata: { probability: "0.60" } },
      { label: "Booked ✓",       displayOrder: 4, metadata: { probability: "1.00", isClosed: "true" } },
      { label: "Lost",           displayOrder: 5, metadata: { probability: "0.00", isClosed: "true" } },
    ],
  });

  if (ok) {
    const pipeline = data as { id: string; stages?: { id: string; label: string }[] };
    console.log(`  ✅ Pipeline created — ID: ${pipeline.id}`);
    if (pipeline.stages) {
      console.log("  Stages:");
      pipeline.stages.forEach((s) => console.log(`    [${s.id}] ${s.label}`));
    }
    return pipeline.id;
  } else if (status === 409) {
    console.log("  ℹ️  Pipeline may already exist");
    return undefined;
  } else {
    console.error("  ❌ Failed to create pipeline:", JSON.stringify(data, null, 2));
    return undefined;
  }
}

// ─── Main ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log("🚀 Highland Farms — HubSpot Setup");
  console.log("====================================");

  await createPropertyGroup();
  await createContactProperties();
  const pipelineId = await createDealPipeline();

  console.log("\n====================================");
  if (pipelineId) {
    console.log("✅ Done! Add this to .env.local and Vercel:\n");
    console.log(`   HUBSPOT_PIPELINE_ID=${pipelineId}\n`);
    console.log("   vercel env add HUBSPOT_PIPELINE_ID production");
  } else {
    console.log("⚠️  No new pipeline ID returned.");
    console.log("   Check HubSpot → Settings → CRM → Pipelines to get the ID manually.");
  }
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
