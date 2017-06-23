/**
 * Created by rroman681 on 6/23/17.
 * Scoreboard!
 */

// React
import React, {Component} from "react";

// CSS
import "../stylesheets/Score.css";
// Redux
import {connect} from "react-redux";

class Score extends Component {
    render() {
        const {count} = this.props;
        return (
            <article className="Score">
                <div className="correct">
                    <small>CORRECT</small>
                    <p className="num">{count.correct}</p>
                </div>
                <hr/>
                <div className="total">
                    <small>TOTAL</small>
                    <p className="num">{count.total}</p>
                </div>
            </article>
        )
    }
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(Score);