/**
 * Created by rroman681 on 6/22/17.
 * List of cards implemented as an unordered list
 */

// React
import React, {Component} from "react";
import Card from "../Card/index";

// Styles
import CardWrapper from "./Wrapper";
import Row from "./Row";

// Responsive grid: separate into x rows containing x cells; x comes from number of elements
class CardList extends Component {
  render() {
    const rows = Math.sqrt(this.props.boardItems.length);
    const rowArray = new Array(rows).fill(null);
    return (
      <CardWrapper loading={this.props.boardItems.length === 0}>
        {
          (this.props.boardItems.length === 0) ?
            <div className="loading">Loading...</div> :
            rowArray.map((_, rowIndex) => {
              return (<Row key={rowIndex}>
                {rowArray.map((_, colIndex) => {
                  let absIndex = rowIndex * rows + colIndex;
                  return <Card index={absIndex}
                               key={absIndex}
                               char={this.props.boardItems[absIndex]}/>
                })}
              </Row>)
            })
        }
      </CardWrapper>
    )
  }
}

export default CardList;
