import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const tokens = require("./design-tokens.json");

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        "primary-hover": tokens.colors.primaryHover,
        "primary-active": tokens.colors.primaryActive,
        background: tokens.colors.background,
        surface: tokens.colors.surface,
        "surface-hover": tokens.colors.surfaceHover,
        foreground: tokens.colors.foreground,
        "foreground-muted": tokens.colors.foregroundMuted,
        border: tokens.colors.border,
        "border-hover": tokens.colors.borderHover,
        "border-focus": tokens.colors.borderFocus,
        gray: tokens.colors.gray,
        success: tokens.colors.semantic.success,
        warning: tokens.colors.semantic.warning,
        error: tokens.colors.semantic.error,
        info: tokens.colors.semantic.info,
      },
      fontFamily: {
        display: tokens.typography.fontFamily.display,
        sans: tokens.typography.fontFamily.sans,
        serif: tokens.typography.fontFamily.serif,
        mono: tokens.typography.fontFamily.mono,
      },
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      letterSpacing: tokens.typography.letterSpacing,
      spacing: tokens.spacing,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
      transitionDuration: {
        fast: tokens.transitions.fast.duration,
        normal: tokens.transitions.normal.duration,
        slow: tokens.transitions.slow.duration,
      },
      transitionTimingFunction: {
        fast: tokens.transitions.fast.easing,
        smooth: tokens.transitions.normal.easing,
      },
      scale: {
        "102": "1.02",
        "96": "0.96",
      },
    },
  },
  plugins: [],
};

export default config;

// Export theme for use in other projects
export const hauseTheme = config.theme.extend;
