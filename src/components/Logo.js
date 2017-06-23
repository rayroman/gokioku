/**
 * Created by rroman681 on 6/23/17.
 * Logo for non-home pages
 */
// React
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import FaArrowLeft from "react-icons/lib/fa/arrow-left";

// CSS
import "../stylesheets/Logo.css";

class Logo extends Component {
    render() {
        return (
            <div>
                <nav className="Logo">
                    <Link to="/"><FaArrowLeft style={{verticalAlign: "-2px", marginRight: "10px"}}/> gokioku</Link>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

export default Logo;
