/**
 * Created by rroman681 on 6/22/17.
 * When path isn't found
 */

// React
import React, {Component} from "react";
import "../stylesheets/Pages.css";

// Images
import whoops from "../icons/whoops.png";

class Whoops extends Component {
    render() {
        return (
            <article className="Whoops">
                <img src={whoops} alt="Whoops"/>
                <h1>Whoops&hellip;</h1>
                <p>We&#8217;re not sure what&#8217;s on the other side of <code>{this.props.match.url}</code>, but this isn&#8217;t it&hellip;</p>
            </article>
        )
    }
}

export default Whoops;