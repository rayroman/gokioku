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
                           const settings = ["easy", "hard"]; // may add more later
                           return (settings.includes(match.params.difficulty)) ?
                               <Board difficulty={match.params.difficulty} /> :
                               <Whoops match={match}/>
                       }}
                />
                <Route component={Whoops}/>
            </Switch>
        )
    }
}

export default App;
