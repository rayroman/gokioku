/**
 * Created by rroman681 on 7/10/17.
 * When user finishes the game
 */

import styled from "styled-components";
import {colors, media} from "../../global-styles";

const GoodJob = styled.p`
  display: block;
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.lightAccent};
  margin-bottom: 0.5rem;
  
  ${media.handheld`
    flex-grow: 2;
    order: 1;
  `}
  
  ${media.large`font-size: 1.5rem;`}
`;

export default GoodJob;
