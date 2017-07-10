/**
 * Created by rroman681 on 7/10/17.
 * Create global color strings that can be used
 */

import {css, injectGlobal} from "styled-components";

export const colors = {
  /**
   * Main Dark: #1d2636
   * Dark Accent: #3b4c68
   * Dark Accent 2: #a6b0d4
   * Main Light: #ffa83c
   * Light Accent: #fa6327
   */
  mainDark: "#1d2636",
  darkAccent: "#293246",
  darkAccent1: "#3b4c68",
  darkAccent2: "#a6b0d4",
  mainLight: "#ffa83c",
  lightAccent: "#fa6327"
};

/**
 * Create media queries for the 500, 900, 1200 sizes with appropriate bins
 */
const sizes = [
  {type: "small", size: 500},
  {type: "medium", size: 900},
  {type: "large", size: 1200},
  {type: "huge"},
];

export const media = sizes.reduce((acc, item, i) => {
  acc[item.type] = (...args) => {
    let query = "@media all and ";
    // build query by parts
    if (i !== 0) {
      query += `(min-width: ${sizes[i - 1].size + 1}px)`;
      if (i !== sizes.length - 1) {
        query += " and ";
      }
    }

    if (i !== sizes.length - 1) {
      query += `(max-width: ${item.size}px)`;
    }

    return css`
      ${query}{
        ${css(...args)}
      }
    `;
  };

  return acc;
}, {});

media.nonSmall = (...args) => css`
  @media all and (min-width: 501px) {
    ${css(...args)}
  }
`;

media.handheld = (...args) => css`
  @media all and (max-width: 900px) {
    ${css(...args)}
  }
`;

media.desktop = (...args) => css`
  @media all and (min-width: 901px) {
    ${css(...args)}
  }
`;

console.log(media.small`hello`);
console.log(media.medium`hello`);
console.log(media.large`hello`);
console.log(media.huge`hello`);

/**
 * Inject global styles.
 */
injectGlobal`
  html {
    ${media.small`font-size: 16px;`}
    ${media.nonSmall`font-size: 20px;`}
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: "Noto Sans", sans-serif;
    background-color: ${colors.mainDark};
    color: whitesmoke;
    text-rendering: optimizeLegibility;
    font-kerning: auto;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
  }
  
  code {
    font-family: "Inconsolata", monospace;
    font-size: 1.1rem;
    color: ${colors.mainLight}
  }
`;