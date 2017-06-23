import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from "react-router";
import Home from "./components/Home";
import Whoops from "./components/Whoops";
import Board from "./components/Board";
import About from "./components/About";
import Logo from "./components/Logo";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/:p" children={({match}) => {
                    const settings = ["easy", "medium", "hard", "hell"];
                    let {p} = match.params;
                    let compToRender;
                    if (p === "about") {
                        compToRender = <About/>;
                    } else if (settings.includes(p)) {
                        compToRender = <Board difficulty={p} stars={settings.indexOf(p) + 1}/>;
                    } else {
                        compToRender = <Whoops match={match}/>
                    }
                    return (
                        <Logo>
                            {compToRender}
                        </Logo>
                    )
                }}/>
            </Switch>
        )
    }
}

export default App;
