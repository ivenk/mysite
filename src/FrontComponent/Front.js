import React from 'react';
import './Front.css'
import Typewriter from "./Typewriter";
import NavBar from "../NavigationBarComponent/NavBar";
import FeedbackButton from '../FeedbackComponent/FeedbackButton'

function Front(props) {
    return (
        <div className="front">
            <FeedbackButton />
            <NavBar />
            <Typewriter text="IVEN KÖTHKE" speed="150" static="I AM " typingDelay="2000"/>
            {/*<h1 className="front-header-background">blue</h1> */}
            <i className="material-icons md-96 absolute_center_bottom">expand_more</i>
        </div>
    );
}

export default Front;