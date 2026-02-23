import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-normal italic text-sage tracking-wide font-display">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-normal tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed mx-auto font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
