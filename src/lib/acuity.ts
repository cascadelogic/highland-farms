const ACUITY_USER_ID = process.env.ACUITY_USER_ID!;
const ACUITY_API_KEY = process.env.ACUITY_API_KEY!;
const BASE_URL = "https://acuityscheduling.com/api/v1";

const headers = {
  Authorization: `Basic ${Buffer.from(`${ACUITY_USER_ID}:${ACUITY_API_KEY}`).toString("base64")}`,
};

export interface AcuityAppointment {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  datetime: string;
  datetimeCreated: string;
  price: string;
  priceSold: string;
  amountPaid: string;
  paid: string;
  type: string;
  appointmentTypeID: number;
  category: string;
  duration: string;
  calendar: string;
  calendarID: number;
  canceled: boolean;
  forms: { id: number; name: string; values: { value: string; name: string }[] }[];
}

export interface AcuityOrder {
  id: number;
  total: number;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  status: string;
  title: string;
  products: { id: number; name: string; quantity: number; total: number }[];
}

async function fetchJSON<T>(path: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${BASE_URL}${path}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url.toString(), { headers });
  if (!res.ok) throw new Error(`Acuity API ${res.status}: ${await res.text()}`);
  return res.json();
}

export async function getAppointments(minDate: string, maxDate: string, canceled = false) {
  return fetchJSON<AcuityAppointment[]>("/appointments", {
    minDate,
    maxDate,
    max: "500",
    direction: "ASC",
    ...(canceled ? { canceled: "true" } : {}),
  });
}

export async function getOrders() {
  return fetchJSON<AcuityOrder[]>("/orders", { max: "100" });
}
