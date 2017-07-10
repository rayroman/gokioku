/**
 * Created by rroman681 on 6/20/17.
 * Homepage: has the logo and difficulty settings.
 */
import React, {Component} from "react";
import FaGithub from "react-icons/lib/fa/github";
import {Link} from "react-router-dom";

// CSS stuff
import "../../stylesheets/Home.css";

// Todo: Make logo
import logo from "../../icons/logo.png";

class Home extends Component {
  render() {
    return (
      <article className="Home">
        <header>
          <a href="/">
            <img src={logo} height="100vw" alt="Gokioku logo"/>
          </a>
          <a id="title" href="/">
            <h1>Gokioku</h1>
          </a>
        </header>
        <ul>
          <li><Link to="/easy">Easy</Link></li>
          <li><Link to="/medium">Medium</Link></li>
          <li><Link to="/hard">Hard</Link></li>
          <li><Link to="/hell">Hell</Link></li>
        </ul>
        <footer>
          <div className="about">
            <Link to="/about">About</Link>
          </div>
          <div className="git">
            <a href="https://github.com/rayroman"
               rel="noopener noreferrer"
               target="_blank"
               title="GitHub"><FaGithub/></a>
          </div>
        </footer>
      </article>
    )
  }
}

export default Home;