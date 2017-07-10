/**
 * Created by rroman681 on 7/10/17.
 * Create global color strings that can be used
 */

import {css} from "styled-components";

export const colors = {
  /**
   * Main Dark: #1d2636
   * Dark Accent: #3b4c68
   * Dark Accent 2: #a6b0d4
   * Main Light: #ffa83c
   * Light Accent: #fa6327
   */
  mainDark: "#1d2636",
  darkAccent: "#3b4c68",
  darkAccent2: "#a6b0d4",
  mainLight: "#ffa83c",
  lightAccent: "#fa6327"
};

/**
 * Create media queries for the 500, 900, 1200 sizes
 */
const sizes = [
  {type: "small", size: 500},
  {type: "medium", size: 900},
  {type: "large", size: 1200},
];

export const media = sizes.reduce((acc, item, i) => {
  acc[item.type] = (...args) => {
    let query = "@media all, ";
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