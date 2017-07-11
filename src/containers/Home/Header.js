/**
 * Created by rroman681 on 7/10/17.
 * Header: logo + title
 */

import React from "react";
import Logo from "./Logo";
import Title from "./Title";

import styled from "styled-components";

const Header = ({className}) => (
  <header className={className}>
    <Logo/>
    <Title/>
  </header>
);

const StyledHeader = styled(Header)`
  text-align: center;
  width: 100%;
  
  a {
    display: inline-block;
    clear: both;
    margin: 0 auto 10px;
  }
`;

export default StyledHeader;
