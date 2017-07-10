/**
 * Created by rroman681 on 6/23/17.
 * Scoreboard!
 */

// React
import React, {Component} from "react";
import FaThumbsUp from "react-icons/lib/fa/thumbs-up"

// CSS
import "../../stylesheets/Score.css";

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
        <div className="youDidIt">
          {
            this.props.finished ?
              <p><FaThumbsUp style={{verticalAlign: "-3px"}}/> Great!</p> :
              <p>&nbsp;</p>
          }
        </div>
      </article>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count,
  finished: state.finished
});

export default connect(mapStateToProps)(Score);