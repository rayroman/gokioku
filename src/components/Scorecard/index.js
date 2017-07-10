/**
 * Created by rroman681 on 7/10/17.
 * Scorecard styles
 */

import styled from "styled-components";
import {colors, media} from "../../global-styles";

const Scorecard = styled.article`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  ${media.handheld`
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;    
  `}
  
  ${media.desktop`
    padding: 20px;
    width: 50%;
  `}
`;

export default Scorecard;
