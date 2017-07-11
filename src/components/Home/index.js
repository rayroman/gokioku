/**
 * Created by rroman681 on 7/10/17.
 * Styled container for Home
 */
import styled from "styled-components";
import {media} from "../../global-styles";

const StyledHome = styled.article`
  ${media.small`
    width: 100%;
    margin: 100px auto 0;    
  `}
  
  ${media.medium`
    width: 60%;
    margin: 150px auto 0;
  `}
  
  ${media.large`
    width: 30%;
    margin: 150px auto 0;
  `}
  
  ${media.huge`
    width: 20%;
    margin: 200px auto 0;
  `}
  
  @media all and (max-height: 800px) {
    margin-top: 75px;
  }
`;

export default StyledHome;
