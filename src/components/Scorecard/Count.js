/**
 * Created by rroman681 on 7/10/17.
 * Creating a component for the count, either correct or total
 */

import React from "react";
import styled from "styled-components";
import {media} from "../../global-styles";

import Title from "./ScoreTitle";
import Number from "./Number";

const Count = ({className, title, count}) => {
  return (
    <div className={className}>
      <Title>{title.toUpperCase()}</Title>
      <Number>{count}</Number>
    </div>
  )
};

const StyledCount = styled(Count)`
  margin-left: 0.3rem;
  ${media.handheld`
    flex-basis: 15%;
    padding: 0 10px;
    order: 2;
    text-align: center;
  `}
`;

export default StyledCount;
