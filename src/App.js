import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {fetchCharactersAction} from "./store/actions";
import {Switch, Route} from "react-router";
import Home from "./components/Home";
import Whoops from "./components/Whoops";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/:difficulty"
                       render={({match}) => {
                           const settings = ["easy", "hard"]; // may add more later
                           return (settings.includes(match.params.difficulty)) ?
                               <div>{match.params.difficulty}</div> :
                               <Whoops match={match}/>
                       }}
                />
                <Route component={Whoops}/>
            </Switch>
        )
    }
}

export default App;
