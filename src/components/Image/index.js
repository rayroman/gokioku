/**
 * Created by rroman681 on 7/10/17.
 * Image component
 */

import React from "react";
import styled from "styled-components";

const Image = ({className, src, alt, width = "100%"}) => (
  <img className={className}
       width={width}
       src={src}
       alt={alt}/>
);

const StyledImage = styled(Image)`
  display: block;
  margin: 0 auto 3rem;  
`;

export default StyledImage;