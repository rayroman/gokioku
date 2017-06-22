/**
 * Created by rroman681 on 6/22/17.
 * Board: contains grid of cards on the left side and counts on the right side.
 * Todo: make Card, CardList, Counts
 * Todo styling: responsive component
 */

// React
import React, {Component} from "react";

// Redux
import {fetchCharactersAction} from "../store/actions";
import {connect} from "react-redux";

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
                console.log(boardItems);
                this.setState({boardItems});
            });
    }

    render() {
        return (
            <article className="Board">
                <section>

                </section>
                <section>

                </section>
            </article>
        )
    }
}

// Redux stuff
const mapStateToProps = state => ({
    characters: state.characters
});

const mapDispatchToProps = dispatch => ({
    loadData(diff) {
        return dispatch(fetchCharactersAction(diff));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
