import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", ".theme-dark"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          a: "var(--color-primary-a)",
          b: "var(--color-primary-b)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          2: "var(--color-accent-2)",
        },
        core: {
          "content-teritary": "#808080",
          "content-primary": "#000",
        },
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(90deg, #C800D9 0%, #4948FD 100%)",
        "gradient-2": "linear-gradient(90deg, #FE3C41 0%, #A36EFF 100%)",
        "gradient-3": "linear-gradient(90deg, #FF7B78 0%, #FFC677 100%)",
      },
    },
    fontFamily: {
      display: ["Host Grotesk", "sans-serif"], // For Display styles
      heading: ["Host Grotesk", "sans-serif"], // For Headings
      labels: ["Host Grotesk", "sans-serif"], // For Labels
      paragraph: ["Host Grotesk", "sans-serif"], // For Paragraphs
      links: ["Host Grotesk", "sans-serif"], // For Paragraphs
    },
    fontSize: {
      // Display
      "display-large": ["60px", { lineHeight: "70px", fontWeight: "800" }], // ExtraBold
      "display-medium": ["80px", { lineHeight: "auto", fontWeight: "700" }], // Bold Italic
      "display-medium-bold": [
        "60px",
        { lineHeight: "70px", fontWeight: "700" },
      ], // Bold

      // Heading
      "heading-large": ["56px", { lineHeight: "68px", fontWeight: "800" }], // ExtraBold
      "heading-medium": ["40px", { lineHeight: "48px", fontWeight: "800" }], // ExtraBold
      "heading-small": ["36px", { lineHeight: "42px", fontWeight: "600" }], // SemiBold
      "heading-xsmall": ["24px", { lineHeight: "28px", fontWeight: "800" }], // ExtraBold
      "heading-xxsmall": ["18px", { lineHeight: "22px", fontWeight: "400" }], // Regular
      "heading-xxxsmall": ["12px", { lineHeight: "14px", fontWeight: "500" }], // Medium

      // Labels
      "label-large": ["22px", { lineHeight: "26px", fontWeight: "800" }], // ExtraBold
      "label-medium": ["20px", { lineHeight: "24px", fontWeight: "600" }], // SemiBold
      "label-small": ["20px", { lineHeight: "26px", fontWeight: "400" }], // Regular

      // Paragraph
      "paragraph-large": ["24px", { lineHeight: "32px", fontWeight: "400" }], // Regular
      "paragraph-medium": ["22px", { lineHeight: "26px", fontWeight: "500" }], // Medium
      "paragraph-small": ["18px", { lineHeight: "24px", fontWeight: "700" }], // Bold
      "paragraph-xsmall": ["16px", { lineHeight: "24px", fontWeight: "400" }], // Regular
      "paragraph-xxsmall": ["12px", { lineHeight: "16px", fontWeight: "400" }], // Regular

      // links
      "links-large": ["20px", { lineHeight: "26px", letterSpacing: "0px" }],
      "links-medium": ["18px", { lineHeight: "24px", letterSpacing: "0px" }],
    },
  },
  plugins: [],
} satisfies Config;
