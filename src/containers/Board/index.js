/**
 * Created by rroman681 on 6/22/17.
 * Board: contains grid of cards on the left side and counts on the right side.
 */

// React
import React, {Component} from "react";
import FaAsterisk from "react-icons/lib/fa/asterisk";

// Styles
import BoardWrapper from "../../components/Board";
import Difficulty from "../../components/Board/Difficulty";
import Main from "../../components/Board/Main";
import GridWrapper from "../../components/Board/Grid";
import ScoreWrapper from "../../components/Board/Score";

// Redux
import {fetchCharactersAction} from "../../store/actions";
import {connect} from "react-redux";
import CardList from "../CardList";
import Score from "../Score";

// Pure React
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boardItems: []
    }
  }

  componentDidMount() {
    const {loadData, difficulty} = this.props;

    loadData(difficulty.toUpperCase())
      .then(() => {
        const {characters: chars} = this.props;

        // Duplicate and then Fisher-Yates shuffle
        let boardItems = [...chars, ...chars];
        for (let i = boardItems.length - 1; i > 0; i--) {
          // Swap random with i
          let rand = Math.random() * i | 0;
          [boardItems[rand], boardItems[i]] = [boardItems[i], boardItems[rand]];
        }

        // Then set the state
        this.setState({boardItems});
      });
  }

  render() {
    const {difficulty, stars} = this.props;
    return (
      <BoardWrapper>
        <Difficulty stars={stars}
                    difficulty={difficulty}/>
        <Main>
          <GridWrapper>
            <CardList boardItems={this.state.boardItems}/>
          </GridWrapper>
          <ScoreWrapper>
            <Score/>
          </ScoreWrapper>
        </Main>
      </BoardWrapper>
    )
  }
}

// Redux stuff
const mapStateToProps = state => ({
  characters: state.characters,
  retire: state.retire
});

const mapDispatchToProps = dispatch => ({
  loadData(diff) {
    return dispatch(fetchCharactersAction(diff));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
