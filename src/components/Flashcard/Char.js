/**
 * Created by rroman681 on 7/10/17.
 * Character in span
 */

import styled from "styled-components";
import {colors, media} from "../../global-styles";

const Char = styled.span`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: ${
    props =>
      props.active ||
      (props.retired && (props.difficulty !== "HARD" || props.difficulty !== "HELL")) ?
        "visible" :
        "hidden"
  };
`;

export default Char;
