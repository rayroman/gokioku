/**
 * Created by rroman681 on 6/22/17.
 * List of cards implemented as an unordered list
 */

// React
import React, {Component} from "react";
import Card from "./Card";

// CSS
import "../stylesheets/CardList.css";

// Redux stuff
import {connect} from "react-redux";

// Responsive grid: separate into x rows containing x cells; x comes from number of elements
class CardList extends Component {
    render() {
        const rows = Math.sqrt(this.props.boardItems.length);
        const rowArray = new Array(rows).fill(null);
        return (
            <div className="CardList">
                {
                    rowArray.map((_, rowIndex) => {
                        return (<div key={rowIndex} className="row">
                            {rowArray.map((_, colIndex) => {
                                let absIndex = rowIndex * rows + colIndex;
                                return <Card index={absIndex}
                                             key={absIndex}
                                             char={this.props.boardItems[absIndex]}/>
                            })}
                        </div>)
                    })
                }
            </div>
        )
        // return (
        //     <ul className="CardList">
        //         {this.props.boardItems.map((item, index) => {
        //             return (
        //                 <li key={index}>
        //                     <Card char={item} index={index}/>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        // )
    }
}

export default CardList;
