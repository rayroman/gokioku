/**
 * Created by rroman681 on 7/10/17.
 * Card styled component
 */

import styled from "styled-components";
import {colors, media} from "../../global-styles";

/**
 * Use trick for responsive squares rather than flex
 */
const Flashcard = styled.div`
  flex: 1 0 auto;
  position: relative;
  cursor: pointer;
  background-color: ${
    props => props.active === true ?
      colors.mainLight :
      colors.darkAccent
  };
  overflow: hidden;
  border-radius: 5px;
  
  ${media.small`margin: 3px;`}
  ${media.medium`margin: 4px;`}
  ${media.large`margin: 5px;`}
  ${media.huge`margin: 6px;`}
  
  &:after {
    content: "";
    float: left;
    display: block;
    padding-top: 100%;
  }
`;

export default Flashcard;
