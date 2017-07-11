/**
 * Created by rroman681 on 7/10/17.
 * Logo
 */

import React from "react";
import {Link} from "react-router-dom";

import Image from "../../components/Image/index";
import logo from "../../icons/logo.png";
import styled from "styled-components";

const Logo = ({className, width}) => (
  <Link className={className} to="/">
    <Image alt="Gokioku logo"
           width={width}
           src={logo}/>
  </Link>
);

const StyledLogo = styled(Logo)`
  clear: both;
  
  img {
    width: 40%;
    height: auto;
  }
`;

export default StyledLogo;