/**
 * Created by rroman681 on 7/10/17.
 * Show the difficulty and stars
 */

// React
import React from "react";
import FaAsterisk from "react-icons/lib/fa/asterisk";

// Styles
import styled from "styled-components";
import {colors} from "../../global-styles";

const Difficulty = ({className, difficulty, stars}) => {
  /**
   * Make a visual representation of the difficulty using stars icon
   */
  const makeStars = () => {
    return (
      <aside className="stars">
        {new Array(stars).fill(undefined).map((_, index) => <FaAsterisk key={index}/>)}
      </aside>
    )
  };

  return (
    <header className={className}>
      <h1 className="title">{difficulty}</h1>
      {makeStars()}
    </header>
  );
};

const StyledDifficulty = styled(Difficulty)`
  width: auto;
  display: flex;
  align-items: center;
  
  .title {
    flex-shrink: 2;    
  }
  
  .stars {
    flex-grow: 2;
    margin-left: 0.5rem;
    color: ${colors.lightAccent}
  }
`;

export default StyledDifficulty;


