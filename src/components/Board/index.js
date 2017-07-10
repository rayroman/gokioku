/**
 * Created by rroman681 on 7/10/17.
 * Main playing board
 */

import React from "react";
import styled from "styled-components";
import {colors, media} from "../../global-styles";

const Board = ({className, children}) => (
  <section className={className}>
    {children}
  </section>
);

const StyledBoard = styled(Board)`
  ${media.small`
    margin: 100px auto 0;
    width: 90%;
  `}  
  
  ${media.medium`
    margin: 50px auto 0;
    width: 70%;
  `}
  
  ${media.handheld`
    padding: 0 5%;
  `}
  
  ${media.large`
    width: 75%;
    margin: 100px auto 0;
  `}
  
  ${media.huge`
    width: 65%;
    margin: 50px auto 0;
  `}
`;

export default StyledBoard;