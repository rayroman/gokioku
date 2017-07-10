/**
 * Created by rroman681 on 6/23/17.
 * Scoreboard!
 */

// React
import React, {Component} from "react";
import FaThumbsUp from "react-icons/lib/fa/thumbs-up"
import Scorecard from "../../components/Scorecard/index";
import Count from "../../components/Scorecard/Count";
import Rule from "../../components/Scorecard/Rule";
import GoodJob from "../../components/Scorecard/GoodJob";

// Redux
import {connect} from "react-redux";

class Score extends Component {
  render() {
    const {count, finished} = this.props;
    return (
      <Scorecard>
        <Count title="Correct" count={count.correct}/>
        <Rule/>
        <Count title="Total" count={count.total}/>
        {
          finished ?
            <GoodJob>
              <FaThumbsUp style={{verticalAlign: "-3px"}}/> Great!
            </GoodJob> :
            <GoodJob>&nbsp;</GoodJob>
        }
      </Scorecard>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count,
  finished: state.finished
});

export default connect(mapStateToProps)(Score);