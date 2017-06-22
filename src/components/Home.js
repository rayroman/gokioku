/**
 * Created by rroman681 on 6/20/17.
 * Homepage: has the logo and difficulty settings.
 */
import React, {Component} from "react";
import {Route, Switch} from "react-router";
import FaGithub from "react-icons/lib/fa/github";
import {Link} from "react-router-dom";

// CSS stuff
import "../stylesheets/Home.css";

// Todo: Make logo

class Home extends Component {
    render() {
        return (
            <article className="Home">
                <div>Logo goes here.</div>
                <ul>
                    <li><Link to="/easy">Easy</Link></li>
                    <li><Link to="/hard">Hard</Link></li>
                </ul>
                <div className="git">
                    <a href="https://github.com/rayroman"
                       rel="noopener noreferrer"
                       target="_blank"
                       alt="GitHub"><FaGithub/></a>
                </div>
            </article>
        )
    }
}

export default Home;