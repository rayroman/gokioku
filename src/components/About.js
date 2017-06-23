/**
 * Created by rroman681 on 6/23/17.
 * About page
 */
// React
import React, {Component} from "react";

// CSS
import "../stylesheets/Pages.css";

class About extends Component {
    render() {
        return (
            <article className="About">
                <h1>About</h1>
                <p><strong>Gokioku</strong> is a memory matching flashcard game that uses Chinese characters.
                    Yours truly, <a href="https://github.com/rayroman"
                                    target="_blank"
                                    title="Ray Roman on GitHub"
                                    rel="noopener noreferrer">Ray Roman</a>, made this little game.
                    Its namesake <em>go-kioku</em> is the honorific form of the words &ldquo;memory&rdquo; or &ldquo;to remember&rdquo; in Japanese.</p>
                <p>There are four degrees of difficulty.
                    The first two deal with fairly simple characters, while the latter two have much more complicated characters.</p>

                <h2>Credits</h2>
                <p>Huge credit &amp; inspiration goes to the makers of the <a
                    title="LiquidPro Sketch UI on Behance"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.behance.net/gallery/53249885/LiquidPro-Sketch-UI-Kit-Free-Download">LiquidPro&nbsp;Sketch&nbsp;UI&nbsp;Kit</a> found on Behance for lots of the styling.
                    Logo credit goes to <it>Cards by <a href="https://thenounproject.com/holamarie"
                                                        rel="noopener noreferrer"
                                                        target="_blank"
                                                        title="María Villamil from the Noun Project">María Villamil</a> from the Noun Project</it>.
                </p>
            </article>
        )
    }
}

export default About;