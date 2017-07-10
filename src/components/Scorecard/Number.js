/**
 * Created by rroman681 on 7/10/17.
 * Number for scorecard
 */

import styled from "styled-components";
import {media} from "../../global-styles";

const Number = styled.p`
  padding: 0;
  margin: 0;
  display: block;
  line-height: 100%;
  
  ${media.handheld`font-size: 2.5rem;`}
  ${media.desktop`font-size: 3rem;`}
`;

export default Number;
