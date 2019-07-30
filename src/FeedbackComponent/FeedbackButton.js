import React from 'react'
import './FeedbackButton.css'

export default class FeedbackButton extends React.Component {
    render() {
        return (
                <button className="feedback-button absolute_left_top">
                    <i className="material-icons md-24 inline-img">feedback</i>
                    Feedback
                </button>
        );
    }
}