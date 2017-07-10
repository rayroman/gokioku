/**
 * Created by rroman681 on 7/10/17.
 * Back button for navigation
 */

import styled from "styled-components";
import {colors, media} from "../../global-styles";

const BackButton = styled.nav`
  position: static;
  top: 0;
  padding: 10px;
  background-color: ${colors.mainLight};
  display: inline-block;
  
  a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
      color: whitesmoke;
    }
  }
  
  ${media.small`margin-left: 5%`}
  ${media.medium`margin-left: 15%`}
  ${media.large`margin-left: 25%`}
`;

export default BackButton;