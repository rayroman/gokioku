import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router";
import Home from "./components/Home";
import Whoops from "./components/Whoops";
import Board from "./components/Board";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/:difficulty"
                       render={({match}) => {
                           const settings = ["easy", "medium", "hard"]; // may add more later
                           const {difficulty} = match.params;
                           return (settings.includes(difficulty)) ?
                               <Board difficulty={difficulty} stars={settings.indexOf(difficulty) + 1}/> :
                               <Whoops match={match}/>
                       }}
                />
                <Route component={Whoops}/>
            </Switch>
        )
    }
}

export default App;
