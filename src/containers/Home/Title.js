/**
 * Created by rroman681 on 7/10/17.
 * Gokioku title
 */

import React from "react";
import {Link} from "react-router-dom";

// Themes
import styled from "styled-components";
import {colors} from "../../global-styles";

const Title = ({className}) => (
  <Link className={className} to="/">
    <h1 className="title">Gokioku</h1>
  </Link>
);

const StyledTitle = styled(Title)`
  color: whitesmoke;
  text-transform: uppercase;
  text-decoration: none;
  width: auto;
  transition: 0.2s cubic;
  
  &:hover {
    color: ${colors.lightAccent};
    transition: 0.2s cubic;
  }
`;

export default StyledTitle;