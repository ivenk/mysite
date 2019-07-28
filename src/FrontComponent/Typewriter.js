import React from 'react'
import './Typewriter.css'

/* Types the specified code out on the webpage */
export default class Typewriter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.text,
            speed: props.speed,
            displayText: "",
            static: props.static,
            typingDelay: props.typingDelay,
        };
    }

    componentDidMount() {
        this.startTyping();
    }

    startTyping() {
        console.log("Started typing ...");
        setTimeout(() => {
            this.type();
        }, this.state.typingDelay);
    }

    type(){
        let displayText = this.state.displayText;
        let text  = this.state.text;

        if(text.length > displayText.length) {
            displayText = text.substring(0, displayText.length+1)
            this.setState({
                displayText: displayText,
            });
            setTimeout(() => {
                this.type();
            }, this.state.speed);
        } else {
            console.log("Finished typing !");
        }
    }

    render() {
        return(
            <div className="type-writer front-header-main">
                <span className="type-writer-static">{this.state.static}</span>
                <span className="type-writer-typed">{this.state.displayText}</span>
            </div>
        )
    }
}