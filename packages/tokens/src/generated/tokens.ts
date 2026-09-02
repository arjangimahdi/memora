export const color = {
  "transparent": "transparent",
  "current": "currentColor",
  "white": "#ffffff",
  "black": "#000000",
  "primary": {
    "50": "#eef4ff",
    "100": "#d9e5ff",
    "200": "#bcd1ff",
    "300": "#8eb3ff",
    "400": "#598aff",
    "500": "#3563e9",
    "600": "#2447c4",
    "700": "#1d399e",
    "800": "#1c3480",
    "900": "#1b2f6a"
  },
  "neutral": {
    "50": "#f8fafc",
    "100": "#f1f5f9",
    "200": "#e2e8f0",
    "300": "#cbd5e1",
    "400": "#94a3b8",
    "500": "#64748b",
    "600": "#475569",
    "700": "#334155",
    "800": "#1e293b",
    "900": "#0f172a"
  },
  "danger": {
    "100": "#fee2e2",
    "500": "#dc2626",
    "700": "#b91c1c"
  },
  "success": {
    "100": "#dcfce7",
    "500": "#16a34a",
    "700": "#15803d"
  },
  "surface": "#f8fafc",
  "surface-raised": "#ffffff",
  "foreground": "#0f172a",
  "muted": "#64748b",
  "border": "#e2e8f0"
} as const;

export const radius = {
  "none": "0rem",
  "sm": "0.25rem",
  "md": "0.5rem",
  "lg": "0.75rem",
  "xl": "1rem",
  "full": "9999px"
} as const;

export const spacing = {
  "0": "0rem",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem"
} as const;

export const font = {
  "family": {
    "sans": "Inter, ui-sans-serif, system-ui, sans-serif",
    "mono": "ui-monospace, SFMono-Regular, Menlo, monospace"
  },
  "size": {
    "xs": "0.75rem",
    "sm": "0.875rem",
    "md": "1rem",
    "lg": "1.125rem",
    "xl": "1.5rem",
    "2xl": "2rem"
  },
  "weight": {
    "regular": "400",
    "medium": "500",
    "semibold": "600",
    "bold": "700"
  },
  "leading": {
    "tight": "1.25",
    "normal": "1.5",
    "relaxed": "1.75"
  }
} as const;
