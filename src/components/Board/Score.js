/**
 * Created by rroman681 on 7/10/17.
 * Score part
 */

import styled from "styled-components";
import {media} from "../../global-styles";

const Score = styled.div`
  float: left;
  
  ${media.handheld`
    width: 100%;
    order: 1;
  `}
  
  ${media.desktop`
    order: 2;
  `}
  
  ${media.large`
    width: 40%;
  `}
  
  ${media.huge`
    width: 45%;
  `}
`;

export default Score;
