/**
 * Created by rroman681 on 6/23/17.
 * Logo for non-home pages
 */
// React
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";

// CSS
import "../stylesheets/Logo.css";

// Redux for resetting the state whenever a user is on the game board and goes back
import {connect} from "react-redux";
import {deactivateAction, emptyGuessAction, resetAllAction, resetRetireAction} from "../store/actions";

class Logo extends Component {
    render() {
        return (
            <div>
                <nav className="Logo">
                    <Link to="/"
                          onClick={() => {
                              this.props.reset();
                          }}
                    ><FaArrowLeft style={{verticalAlign: "-2px", paddingRight: "10px"}}/> gokioku</Link>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    reset() {
        dispatch(emptyGuessAction()); // Empty the guesses
        dispatch(resetAllAction()); // Reset all the counts
        dispatch(deactivateAction()); // Reset all of the cards
        dispatch(resetRetireAction()); // Reset the retired cards
    }
});

export default connect(null, mapDispatchToProps)(Logo);
