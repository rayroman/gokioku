/**
 * Created by rroman681 on 7/10/17.
 * Footer containing the about and Github links
 */

import React from "react";
import FaGithub from "react-icons/lib/fa/github";
import {Link} from "react-router-dom";

import styled from "styled-components";
import {colors} from "../../global-styles";

const Footer = ({className}) => (
  <footer className={className}>
    <div>
      <Link to="/about">About</Link>
    </div>
    <div className="git">
      <a href="https://github.com/rayroman"
         rel="noopener noreferrer"
         target="_blank"
         title="GitHub"><FaGithub/></a>
    </div>
  </footer>
);

const StyledFooter = styled(Footer)`
  text-align: center;
  
  div {
    display: inline-block;
    padding: 0 1em;
  }
  
  .git {
    text-align: center;
    font-size: 1.5em;
  }
  
  a {
    color: ${colors.darkAccent1};
    
    &:hover {
      color: ${colors.mainLight};
    }
    
    &:active :active {
      color: ${colors.lightAccent};
    }
  }
`;

export default StyledFooter;
