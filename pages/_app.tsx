import { Fragment } from "react";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 100%;
    line-height: 100%;
    /* font-family: "Eina"; */
    font-family: "Konkret";
    color: var(--color-gray-900);
    scroll-behavior: smooth;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -o-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    a {
      text-decoration: none;
      color: var(--color-gray-900);
    }

    @keyframes bg-hue-animation {
      0% {
          filter: hue-rotate(0deg);
      }
      50% {
          filter: hue-rotate(45deg)
      }
      100% {
          filter: hue-rotate(0deg)
      }
    }
  }
  /* Fonts */
  // Eina
  @font-face {
    font-family: "Eina";
    src: url("/fonts/Eina/Eina01-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Eina";
    src: url("/fonts/Eina/Eina02-SemiBold.ttf");
    font-style: normal;
    font-weight: 600;
    font-display: swap;
  }
  @font-face {
    font-family: "Eina";
    src: url("/fonts/Eina/Eina02-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  // Konkret
  @font-face {
    font-family: "Konkret";
    src: url("/fonts/Konkret/Konkret-Thin.woff") format("woff");
    font-style: normal;
    font-weight: 200;
    font-display: swap;
  }
  @font-face {
    font-family: "Konkret";
    src: url("/fonts/Konkret/Konkret-Light.woff") format("woff");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "Konkret";
    src: url("/fonts/Konkret/Konkret-Regular.woff") format("woff");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Konkret";
    src: url("/fonts/Konkret/Konkret-Medium.woff") format("woff");
    font-style: normal;
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "Konkret";
    src: url("/fonts/Konkret/Konkret-Bold.woff") format("woff");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
  @font-face {
    font-family: "Konkret";
    src: url("/fonts/Konkret/Konkret-ExtraBold.woff") format("woff");
    font-style: normal;
    font-weight: 800;
    font-display: swap;
  }
  @font-face {
    font-family: "Konkret";
    src: url("/fonts/Konkret/Konkret-Black.woff") format("woff");
    font-style: normal;
    font-weight: 900;
    font-display: swap;
  }
  /* CSS Variables */
  :root {
    /* Breakpoints */
    --breakpoint-xs: 30rem; // 480px
    --breakpoint-sm: 40rem; // 640px
    --breakpoint-md: 48rem; // 768px
    --breakpoint-lg: 64rem; // 1024px
    --breakpoint-xl: 80rem; // 1280px
    --breakpoint-xxl: 96rem; // 1536px

    /* Colors */
    --color-gray-50: #F9FAFB;
    --color-gray-100: #F3F4F6;
    --color-gray-200: #E5E7EB;
    --color-gray-300: #D1D5DB;
    --color-gray-400: #9CA3AF;
    --color-gray-500: #6B7280;
    --color-gray-600: #4B5563;
    --color-gray-700: #374151;
    --color-gray-800: #1F2937;
    --color-gray-900: #111827;
  }
`;

import React from "react";

export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}
