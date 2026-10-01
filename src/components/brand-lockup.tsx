import { cn } from "@/lib/utils";

type BrandLockupProps = {
  className?: string;
  lineClassName?: string;
  size?: "nav" | "hero" | "footer";
};

const sizeStyles = {
  nav: "text-sm leading-[1.05] sm:text-base md:text-lg",
  hero: "text-4xl leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl",
  footer: "text-xl leading-[1.05] sm:text-2xl",
} as const;

export function BrandLockup({
  className,
  lineClassName,
  size = "nav",
}: BrandLockupProps) {
  return (
    <span
      className={cn(
        "font-display inline-flex flex-col font-bold tracking-tight",
        sizeStyles[size],
        className
      )}
    >
      <span className={lineClassName}>Red Sky</span>
      <span
        className={cn(
          "tracking-[0.06em]",
          size === "hero" && "tracking-[0.08em]",
          lineClassName
        )}
      >
        Pet Care
      </span>
    </span>
  );
}
