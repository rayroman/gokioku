import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {fetchCharactersAction} from "./store/actions";

class App extends Component {
    // function to get the data
    getData(diff) {
        this.props.fetchCharacters(diff)
            .then(() => {
                console.log(this.props.characters);
            });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2 onClick={e => {e.preventDefault(); this.getData("EASY")}}>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    difficulty: state.difficulty,
    characters: state.characters
});

const mapDispatchToProps = dispatch => ({
    fetchCharacters(diff) {
        return dispatch(fetchCharactersAction(diff))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
