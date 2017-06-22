import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {fetchCharactersAction} from "./store/actions";
import {Switch, Route} from "react-router";
import Home from "./components/Home";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/:difficulty"
                       render={({match}) => {
                           const settings = ["easy", "hard"]; // may add more later
                           // Todo: add return
                       }}
                />
                {/*Todo: add catch-all route*/}
            </Switch>
        )
    }
}

export default App;
