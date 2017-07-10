/**
 * Created by rroman681 on 7/10/17.
 * Main part of the game board: the cards and the score
 */

import React from "react";
import styled from "styled-components";
import {media} from "../../global-styles";

const Main = ({className, children}) => (
  <section className={className}>
    {children}
  </section>
);

const StyledMain = styled(Main)`
  display: flex;
  
  ${media.handheld`
    flex-direction: column;
  `}
  
  ${media.desktop`
    flex-direction: row;
  `}
`;

export default StyledMain;
