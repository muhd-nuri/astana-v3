type DottedGridAtmosphereProps = {
  /** Dot opacity, defaults to 0.05 over light surfaces */
  opacity?: number;
  /** CSS color for the dot. Defaults to `var(--color-ink)` */
  color?: string;
  /** Position scope. "fixed" covers the viewport (global), "absolute" scopes to parent */
  scope?: "fixed" | "absolute";
  /** Allows tone-specific spacing override */
  spacing?: number;
  className?: string;
};

export function DottedGridAtmosphere({
  opacity = 0.05,
  color = "var(--color-ink)",
  scope = "fixed",
  spacing = 24,
  className,
}: DottedGridAtmosphereProps) {
  const positionClass = scope === "fixed" ? "fixed inset-0 -z-10" : "absolute inset-0";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${positionClass} ${className ?? ""}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
        backgroundSize: `${spacing}px ${spacing}px`,
        opacity,
      }}
    />
  );
}
