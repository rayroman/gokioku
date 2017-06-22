/**
 * Created by rroman681 on 6/22/17.
 * When path isn't found
 */

import React, {Component} from "react";
import "../stylesheets/Whoops.css";

class Whoops extends Component {
    render() {
        return (
            <article className="Whoops">
                <div>Add cute icon here.</div>
                <h1>Whoops&hellip;</h1>
                <p>We&#8217;re not sure what&#8217;s on the other side of <code>{this.props.match.url}</code>, but this isn&#8217;t it&hellip;</p>
            </article>
        )
    }
}

export default Whoops;