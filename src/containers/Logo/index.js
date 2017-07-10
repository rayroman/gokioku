/**
 * Created by rroman681 on 6/23/17.
 * Logo for non-home pages
 */
// React
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";

// Redux for resetting the state whenever a user is on the game board and goes back
import {connect} from "react-redux";
import {deactivateAction, emptyGuessAction, resetAllAction, resetGameAction, resetRetireAction} from "../../store/actions";
import BackButton from "../../components/BackButton/index";

class Logo extends Component {
  render() {
    return (
      <div>
        <BackButton>
          <Link to="/"
                onClick={() => {
                  this.props.reset();
                }}>
            <FaArrowLeft style={{verticalAlign: "-2px", paddingRight: "10px"}}/> gokioku
          </Link>
        </BackButton>
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
    dispatch(resetGameAction()); // Reset the whole game
  }
});

export default connect(null, mapDispatchToProps)(Logo);
