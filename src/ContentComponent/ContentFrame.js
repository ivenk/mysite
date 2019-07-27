import React from 'react';
import './ContentFrame.css'

class ContentFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode
        };
    }

    render() {
        return (
            <div className="content-frame">
                Great content coming !
                Currently displaying: {this.state.mode}
            </div>
        );
    }
}

export default ContentFrame;