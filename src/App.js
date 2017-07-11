import React, { Component } from 'react';
import {Switch, Route} from "react-router";
import Home from "./containers/Home/";
import Whoops from "./containers/Whoops/";
import Board from "./containers/Board/";
import About from "./containers/About/";
import Logo from "./containers/Logo/";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:p" children={({match}) => {
          const settings = ["easy", "medium", "hard", "hell"];
          let {p} = match.params;
          let compToRender, pageType;
          if (p === "about") {
            pageType = "pages";
            compToRender = <About/>;
          } else if (settings.includes(p)) {
            pageType = "board";
            compToRender = <Board difficulty={p} stars={settings.indexOf(p) + 1}/>;
          } else {
            pageType = "pages";
            compToRender = <Whoops match={match}/>
          }
          return (
            <Logo pageType={pageType}>
              {compToRender}
            </Logo>
          )
        }}/>
      </Switch>
    )
  }
}

export default App;
