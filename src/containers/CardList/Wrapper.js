/**
 * Created by rroman681 on 7/10/17.
 * Wrapper for CardList
 */
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: ${
    props => props.loading ?
      "100%" :
      "auto"
  };
  ${props => props.loading ?
    `display: flex;
     align-items: center;
     justify-content: center;
    ` :
    ""
  }
`;

export default Wrapper;
