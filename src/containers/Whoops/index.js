/**
 * Created by rroman681 on 6/22/17.
 * When path isn't found
 */

// React
import React, {Component} from "react";

// Styles
import P from "../../components/P";
import Wrapper from "../../components/PageWrapper";
import Image from "../../components/Image";

// Images
import whoops from "../../icons/whoops.png";

const Whoops = ({match}) => (
  <Wrapper>
    <Image src={whoops} alt="Whoops"/>
    <h1>Whoops&hellip;</h1>
    <P>We&#8217;re not sure what&#8217;s on the other side of <code>{match.url}</code>, but this isn&#8217;t it&hellip;</P>
  </Wrapper>
);

export default Whoops;