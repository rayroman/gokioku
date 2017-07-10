/**
 * Created by rroman681 on 6/22/17.
 * Card with character
 */
// React stuff
import React, {Component} from "react";

// Redux stuff
import {connect} from "react-redux";
import {selectionAction} from "../../store/actions";

// CSS
import "../../stylesheets/Card.css";
/*
 Card: contains the character in the char field. Must have
 */
class Card extends Component {
  render() {
    return (
      <div className="Card"
           onClick={() => {
             if (!this.props.isUpdatingStyle) {
               let {char, index} = this.props;
               this.props.pickCard({char, index});
             } else {
               console.log("slow down there!");
             }
           }}
      >
                <span className={`char ${
                  this.props.active === true ?
                    "active" :
                    this.props.active === 1 ?
                      "retired-" + this.props.difficulty.toLowerCase() :
                      ""
                  }`}>{this.props.char}</span>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  difficulty: state.difficulty,
  active: state.active[props.index],
  isUpdatingStyle: state.isUpdatingStyle
});

const mapDispatchToProps = dispatch => ({
  pickCard(card) {
    dispatch(selectionAction(card))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);