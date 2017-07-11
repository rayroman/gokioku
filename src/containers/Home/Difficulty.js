/**
 * Created by rroman681 on 7/10/17.
 * Difficulty settings
 */

import React from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";
import {colors} from "../../global-styles";

const settings = [
  "Easy",
  "Medium",
  "Hard",
  "Hell"
];

const Difficulty = ({className}) => (
  <ul className={className}>
    {settings.map((s, index) => (
      <li key={index}>
        <Link to={s.toLowerCase()}>{s}</Link>
      </li>
    ))}
  </ul>
);

const StyledDifficulty = styled(Difficulty)`
  list-style-type: none;
  margin: 4% 0;
  padding: 0;
  
  li {
    border-bottom: solid 1px ${colors.darkAccent1};
    padding-left: 1rem;
    font-size: 1.2rem;
    position: relative;
    color: lightgray;
    
    &:before {
      color: inherit;
      content: "\\279C";
      display: block;
      padding: 0.5em 20px;
      position: absolute;
      z-index: -1;
      right: 0;      
    }
    
    &:first-child {
      border-top: solid 1px ${colors.darkAccent1};
    }
    
    &:hover {
      color: ${colors.mainLight}
    }
    
    &:active {
      color: ${colors.lightAccent}
    }
    
    a {
      color: inherit;
      display: inline-block;
      width: 100%;
      padding: 0.5em 0;
      text-decoration: none;      
    }
  }
`;

export default StyledDifficulty;