/**
 * Created by rroman681 on 7/10/17.
 * Wrapper for pages
 */

import styled from "styled-components";
import {media} from "../../global-styles";

const Wrapper = styled.article`
  ${media.small`
    width: 90%;
    margin: 100px auto 0;
    padding: 0 5%;    
  `}
  
  ${media.medium`
    width: 70%;
    margin: 125px auto 0;
    padding: 0 5%;    
  `}
  
  ${media.large`
    width: 50%;
    margin: 150px auto 0;    
  `}
  
  ${media.huge`
    width: 30%;
    margin: 175px auto 0;
  `}
  
  img {
    width: 40%;
  }
`;

export default Wrapper;