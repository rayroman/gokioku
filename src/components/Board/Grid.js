/**
 * Created by rroman681 on 7/10/17.
 * Grid part
 */

import styled from "styled-components";
import {media} from "../../global-styles";

const Grid = styled.div`
  float: left;
  
  ${media.handheld`
    width: 100%;
    order: 2;
  `}
  
  ${media.desktop`
    order: 1;
  `}
  
  ${media.large`
    width: 60%;
  `}
  
  ${media.huge`
    width: 55%;
  `}
`;

export default Grid;
