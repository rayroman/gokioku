/**
 * Created by rroman681 on 7/10/17.
 * Regular anchor tags with style
 */

import {colors} from "../../global-styles";
import {Link} from "react-router";
import styled from "styled-components";

const A = styled.a`
  color: ${colors.mainLight};
  
  &:hover {
    color: ${colors.lightAccent};
  }
`;

export default A;
