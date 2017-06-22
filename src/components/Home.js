/**
 * Created by rroman681 on 6/20/17.
 * Homepage: has the logo and difficulty settings.
 */
import React, {Component} from "react";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";

// Todo: Make logo

class Home extends Component {
    render() {
        return (
            <article>
                <div>Logo goes here.</div>
                <ul>
                    <li><Link to="/easy">Easy</Link></li>
                    <li><Link to="/hard">Hard</Link></li>
                </ul>
            </article>
        )
    }
}

export default Home;