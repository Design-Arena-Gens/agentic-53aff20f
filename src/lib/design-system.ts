export const colors = {
  brand: {
    electric: "#0F62FE",
    sky: "#4F8CFE",
    mint: "#80FFD3",
  },
  neutral: {
    900: "#0C1A2C",
    700: "#304153",
    500: "#5C7089",
    200: "#D9E2F1",
    100: "#EDF3FB",
  },
  surface: "#F7FBFF",
};

export const typography = {
  kicker: "0.82rem / 1.4 Plus Jakarta Sans",
  sm: "clamp(0.95rem, 0.9vw, 1rem) / 1.6 Plus Jakarta Sans",
  base: "clamp(1.025rem, 0.95vw, 1.05rem) / 1.65 Plus Jakarta Sans",
  lg: "clamp(1.225rem, 1.3vw, 1.35rem) / 1.5 Plus Jakarta Sans",
  xl: "clamp(1.45rem, 1.75vw, 1.7rem) / 1.4 Plus Jakarta Sans",
  "2xl": "clamp(1.75rem, 2.4vw, 2.1rem) / 1.25 Plus Jakarta Sans",
  "3xl": "clamp(2.2rem, 3.1vw, 2.65rem) / 1.1 Plus Jakarta Sans",
  display: "clamp(3rem, 6vw, 3.9rem) / 1.05 Plus Jakarta Sans",
};

export const spacingScale = {
  "3xs": 4,
  "2xs": 8,
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 40,
  "2xl": 48,
  "3xl": 64,
};

export const radii = {
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
};

export const shadows = {
  focus: "0 0 0 4px color-mix(in srgb, #0F62FE 25%, transparent)",
  card: "0 24px 45px -18px rgba(12, 44, 84, 0.22)",
  cardHover: "0 36px 70px -24px rgba(12, 44, 84, 0.32)",
};

export const components = {
  button: {
    primary: {
      bg: colors.brand.electric,
      text: "#FFFFFF",
      border: "transparent",
      focus: shadows.focus,
    },
    secondary: {
      bg: "#FFFFFF",
      text: colors.brand.electric,
      border: colors.neutral[200],
    },
  },
  card: {
    background: "#FFFFFFD9",
    border: colors.neutral[200],
    radius: radii.md,
    shadow: shadows.card,
  },
  field: {
    controlBg: "#FFFFFF",
    controlBorder: colors.neutral[200],
    controlRadius: 14,
    shadow: "0 16px 35px rgba(12, 44, 84, 0.12)",
  },
};
