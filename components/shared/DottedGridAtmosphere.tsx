type DottedGridAtmosphereProps = {
  /** Dot opacity. Default 0.18 matches MCBIZ's #0f1f2e ~18% alpha dot. */
  opacity?: number;
  /** CSS color for the dot. Defaults to MCBIZ's navy ink. */
  color?: string;
  /** Position scope. "fixed" covers the viewport, "absolute" scopes to parent */
  scope?: "fixed" | "absolute";
  /** Grid spacing in px. MCBIZ uses ~24px. */
  spacing?: number;
  /** When true, layers MCBIZ's mesh-blob gradient over the dot grid. */
  mesh?: boolean;
  className?: string;
};

/**
 * MCBIZ atmosphere — replicates the subtle navy dot grid that appears
 * site-wide on mcbiz.astanabiz.com, with an optional cyan/green mesh
 * blob overlay for hero/section accents.
 */
export function DottedGridAtmosphere({
  opacity = 0.18,
  color = "#0f1f2e",
  scope = "fixed",
  spacing = 24,
  mesh = false,
  className,
}: DottedGridAtmosphereProps) {
  const positionClass =
    scope === "fixed" ? "fixed inset-0 -z-10" : "absolute inset-0 -z-10";

  // Use alpha-encoded color so opacity is intrinsic to the dot ink
  // (matches MCBIZ's `radial-gradient(#0f1f2e2e 1px, transparent 1px)`).
  const a = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, "0");
  const dotColor = color.startsWith("#") && color.length === 7 ? `${color}${a}` : color;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none ${positionClass} ${className ?? ""}`}
      style={{
        backgroundImage: mesh
          ? [
              "radial-gradient(120% 80% at 0% 0%, #5fc8e838, transparent 55%)",
              "radial-gradient(120% 80% at 100% 0%, #37b34a2e, transparent 55%)",
              `radial-gradient(${dotColor} 1px, transparent 1px)`,
            ].join(", ")
          : `radial-gradient(${dotColor} 1px, transparent 1px)`,
        backgroundSize: mesh
          ? `auto, auto, ${spacing}px ${spacing}px`
          : `${spacing}px ${spacing}px`,
      }}
    />
  );
}
