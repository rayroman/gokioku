/**
 * Created by rroman681 on 6/22/17.
 * Card with character
 */
// React stuff
import React, {Component} from "react";


// Redux stuff
import {connect} from "react-redux";
import {selectionAction} from "../../store/actions";
import Flashcard from "../../components/Flashcard/index";
import Char from "../../components/Flashcard/Char";

// CSS
// import "../../stylesheets/Card.css";
/*
 Card: contains the character in the char field. Must have
 */
class Card extends Component {
  render() {
    let {difficulty, active, char} = this.props;
    return (
      <Flashcard active={active}
                 onClick={() => {
                    if (!this.props.isUpdatingStyle) {
                      let {char, index} = this.props;
                      this.props.pickCard({char, index});
                    } else {
                      console.log("slow down there!");
                    }
                  }}>
        <Char active={active}
              difficulty={difficulty}>
          {char}
        </Char>
      </Flashcard>
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