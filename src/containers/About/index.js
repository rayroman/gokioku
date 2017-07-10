/**
 * Created by rroman681 on 6/23/17.
 * About page
 */
// React
import React, {Component} from "react";

// CSS
// import "../../stylesheets/Pages.css";
import A from "../../components/A";
import P from "../../components/P";

const About = () => (
  <article className="About">
    <h1>About</h1>
    <P><strong>Gokioku</strong> is a memory matching flashcard game that uses Chinese characters.
      Yours truly, <A href="https://github.com/rayroman"
                      target="_blank"
                      title="Ray Roman on GitHub"
                      rel="noopener noreferrer">Ray&nbsp;Roman</A>, made this little game.
      Its namesake <em>go-kioku</em> is the honorific form of the words &ldquo;memory&rdquo; or &ldquo;remember&rdquo; in Japanese.</P>
    <P>There are four degrees of difficulty.
      The first two deal with fairly simple characters, while the latter two have much more complicated characters, but without the ability to see any correctly chosen characters.</P>

    <h1>Credits</h1>
    <P>Huge credit &amp; inspiration goes to the makers of the <A
      title="LiquidPro Sketch UI on Behance"
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.behance.net/gallery/53249885/LiquidPro-Sketch-UI-Kit-Free-Download">LiquidPro&nbsp;Sketch&nbsp;UI&nbsp;Kit</A> found on Behance (licensed under <A rel="noopener noreferrer"
                                                                                                                                                                           target="_blank"
                                                                                                                                                                           title="Creative Commons License"
                                                                                                                                                                           href="https://creativecommons.org/licenses/by-nc/4.0/deed.en_US">CC&nbsp;BY-NC 4.0</A>) for lots of the styling.
      Icon credits go to <it>Cards &amp; Magnifying Glass by <A href="https://thenounproject.com/holamarie"
                                                                rel="noopener noreferrer"
                                                                target="_blank"
                                                                title="María Villamil from the Noun Project">María&nbsp;Villamil</A> from the Noun Project</it> (licensed under <A rel="noopener noreferrer"
                                                                                                                                                                                   target="_blank"
                                                                                                                                                                                   title="Creative Commons License"
                                                                                                                                                                                   href="https://creativecommons.org/licenses/by/3.0/us/">CC&nbsp;BY&nbsp;3.0</A>, both colored from original).
    </P>
  </article>
);

export default About;