/**
 * Created by rroman681 on 6/22/17.
 * Board: contains grid of cards on the left side and counts on the right side.
 * Todo: make Card, CardList, Counts
 * Todo styling: responsive component
 */

// React
import React, {Component} from "react";
import FaAsterisk from "react-icons/lib/fa/asterisk";

// CSS
import "../stylesheets/Board.css";

// Redux
import {fetchCharactersAction} from "../store/actions";
import {connect} from "react-redux";
import CardList from "./CardList";

// Pure React
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardItems: [],
            loading: "Loading..."
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
                this.setState({boardItems, loading: null});
            });
    }

    makeStars() {
        return (
            <ul className="rating">
                {new Array(this.props.stars).fill(undefined).map((_, index) => <FaAsterisk key={index}/>)}
            </ul>
        )
    }

    render() {
        const {difficulty} = this.props;
        return (
            <article className="Board">
                <div>{this.state.loading ? this.state.loading : null}</div>
                <header id="difficulty">
                    <h1>{difficulty}</h1>
                    {this.makeStars()}
                </header>
                <section id="main">
                    <div className="grid">
                        <CardList boardItems={this.state.boardItems}/>
                    </div>
                    <div className="score"></div>
                </section>
            </article>
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
