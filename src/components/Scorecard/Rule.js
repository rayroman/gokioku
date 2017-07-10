/**
 * Created by rroman681 on 7/10/17.
 * Horizontal rule for scorecard
 */

import styled from "styled-components";
import {colors, media} from "../../global-styles";

const Rule = styled.hr`
  margin: 1rem 0;
  background-color: ${colors.darkAccent1};
  height: 1px;
  border: 0;
  
  ${media.handheld`display: none;`}
`;

export default Rule;
