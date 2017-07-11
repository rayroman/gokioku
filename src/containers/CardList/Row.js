/**
 * Created by rroman681 on 7/10/17.
 * Row wrapper
 */

import React from "react";
import styled from "styled-components";

const Row = ({children, className}) => (
  <div className={className}>
    {children}
  </div>
);

const StyledRow = styled(Row)`
  display: flex;
`;

export default StyledRow;
