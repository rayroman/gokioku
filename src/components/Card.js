/**
 * Created by rroman681 on 6/22/17.
 * Card with character
 */
// React stuff
import React, {Component} from "react";


/*
Card: contains the character in the char field. Must have
 */
class Card extends Component {
    render() {
        return (
            <div className="cardbox">
                <span className="char">{this.props.char}</span>
            </div>
        )
    }
}

export default Card;