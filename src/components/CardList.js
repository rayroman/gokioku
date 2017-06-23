/**
 * Created by rroman681 on 6/22/17.
 * List of cards implemented as an unordered list
 */

// React
import React, {Component} from "react";
import Card from "./Card";

// CSS
import "../stylesheets/CardList.css";

class CardList extends Component {
    render() {
        return (
            <ul className="CardList">
                {this.props.boardItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Card char={item} index={index}/>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default CardList;
