/**
 * Created by rroman681 on 6/20/17.
 * Homepage: has the logo and difficulty settings.
 */
import React, {Component} from "react";

// Styles
import HomeWrapper from "../../components/Home";

import Header from "./Header";
import Difficulty from "./Difficulty";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <Header/>
        <Difficulty/>
        <Footer/>
      </HomeWrapper>
    )
  }
}

export default Home;