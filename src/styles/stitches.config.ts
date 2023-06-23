import { rem } from "polished";
import { createStitches } from "@stitches/react";

import { fadeIn, fadeInUp, fadeInUpCentered } from "./animations/fade-animation";

export const { styled, css, theme, createTheme, globalCss, config, keyframes } = createStitches({
  theme: {
    colors: {
      /**
       * white
       */
      white: "#FFFFFF",

      whiteA100: "#FFFFFFFF",
      whiteA050: "#FFFFFF80",
      whiteA000: "#FFFFFF00",

      /**
       * gray
       */
      gray900: "#464d52",
      gray800: "#5a5a5a",
      gray700: "#868686",
      gray600: "#999999",
      gray500: "#C3C3C3",
      gray400: "#D8D8D8",
      gray300: "#ECECEC",
      gray200: "#F2F4F6",
      gray100: "#F5F5F5",

      grayA100: "#D8D8D8FF",
      grayA050: "#D8D8D850",
      grayA000: "#D8D8D800",

      gray900rgb: "70, 77, 82",

      /**
       * primary
       */
      primary: "#0A192B",

      /**
       * font
       */
      placeholder: "#8B94A3",

      /* */

      background: "#FFFFFF",

      sectionBorder: "#DEDEDE",
      subSectionBorder: "#E5E5E5",

      switchBackground: "rgba($gray900rgb,0.1)",
      switchThumbBackground: "white",
    },
    shadows: {
      elevation1: `rgb(0 0 0 / 4%) 0rem ${rem(2)} ${rem(10)} 0rem`,
      elevation2: `rgb(0 0 0 / 3%) ${rem(-1)} ${rem(1)} ${rem(6)}  0rem`,

      subSectionBoxShadow: `rgb(0 0 0 / 8.5%) ${rem(-1)} ${rem(1)} ${rem(16)}`,
    },
  },
  media: {
    _: `(min-width: ${rem(0)})`,
    md: `(min-width: ${rem(480)})`,
    lg: `(min-width: ${rem(960)})`,
  },
  utils: {
    /**
     * size
     */

    w: (value: number | string) => ({
      width: typeof value === "string" ? value : rem(value),
      minWidth: typeof value === "string" ? value : rem(value),
      maxWidth: typeof value === "string" ? value : rem(value),
    }),
    h: (value: number | string) => ({
      height: typeof value === "string" ? value : rem(value),
      minHeight: typeof value === "string" ? value : rem(value),
      maxHeight: typeof value === "string" ? value : rem(value),
    }),
    size: (value: number | string) => ({
      w: value,
      h: value,
    }),
    gap: (value: number | string) => ({
      gap: typeof value === "string" ? value : rem(value),
    }),
    fontSize: (value: number | string) => ({
      fontSize: typeof value === "string" ? value : rem(value),
    }),
    borderRadius: (value: number | string) => ({
      borderRadius: typeof value === "string" ? value : rem(value),
    }),

    /**
     * padding
     */
    paddingX: (value: number | string) => ({
      paddingLeft: typeof value === "string" ? value : rem(value),
      paddingRight: typeof value === "string" ? value : rem(value),
    }),
    paddingY: (value: number | string) => ({
      paddingTop: typeof value === "string" ? value : rem(value),
      paddingBottom: typeof value === "string" ? value : rem(value),
    }),

    /**
     * margin
     */
    marginX: (value: number | string) => ({
      marginLeft: typeof value === "string" ? value : rem(value),
      marginRight: typeof value === "string" ? value : rem(value),
    }),
    marginY: (value: number | string) => ({
      marginTop: typeof value === "string" ? value : rem(value),
      marginBottom: typeof value === "string" ? value : rem(value),
    }),

    /**
     * flex
     */
    row: () => ({
      display: "flex",
      flexDirection: "row",
    }),
    column: () => ({
      display: "flex",
      flexDirection: "column",
    }),
    centered: () => ({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }),
    rowCentered: () => ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }),
    rowBetween: () => ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }),
    rowCenteredX: () => ({
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }),
    rowCenteredY: () => ({
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    }),
    columnCentered: () => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }),
    columnCenteredX: () => ({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }),
    columnCenteredY: () => ({
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }),

    /**
     * input
     */
    form: () => ({
      paddingX: rem(25),
      color: "$black",
      fontSize: rem(15),
      fontWeight: 500,
      border: "1px solid #E2E6ED",
      borderRadius: rem(5),
      transition: "all 0.2s ease-in-out",
      backgroundColor: "$white",
      "&:hover": {
        borderColor: "#E2E6ED",
      },
      "&:focus": {
        borderColor: "#E2E6ED",
      },
      "&:placeholder": {
        color: "$placeholder",
      },
    }),

    formSubmit: () => ({
      width: rem(467),
      height: rem(64),
      color: "$white",
      fontSize: rem(16),
      fontWeight: 600,
      opacity: 1,
      borderRadius: rem(5),
      backgroundColor: "$primary",
      "&[aria-invalid='true']": {
        opacity: 0.6,
      },
      "&[aria-invalid='false']": {
        opacity: 1,
      },
    }),

    /**
     * animation
     */
    fadeIn: (ms?: number) => ({
      animation: `${fadeIn} ${ms ?? 400}ms`,
    }),

    fadeInUp: (ms?: number) => ({
      animation: `${fadeInUp} ${ms ?? 400}ms`,
    }),

    fadeInUpCentered: (ms?: number) => ({
      animation: `${fadeInUpCentered} ${ms ?? 400}ms`,
    }),

    /**
     * typography
     */
    heading1: () => ({
      fontSize: rem(28),
      fontWeight: 700,
    }),
    heading2: () => ({
      fontSize: rem(20),
      fontWeight: 700,
    }),
    heading3: () => ({
      fontSize: rem(18),
      fontWeight: 700,
    }),
    subtitle1: () => ({
      fontSize: rem(15),
      fontWeight: 700,
    }),
    subtitle2: () => ({
      fontSize: rem(14),
      fontWeight: 700,
    }),
    subtitle3: () => ({
      fontSize: rem(13),
      fontWeight: 700,
    }),
    body1: () => ({
      fontSize: rem(14),
    }),
    body2: () => ({
      fontSize: rem(13),
    }),
    body3: () => ({
      fontSize: rem(12),
    }),
    caption1: () => ({
      fontSize: rem(11),
    }),
    caption2: () => ({
      fontSize: rem(10),
    }),
  },
});
