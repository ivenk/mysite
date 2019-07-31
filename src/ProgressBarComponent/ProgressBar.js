import React from 'react'
import './ProgressBar.css'

export default function ProgressBar(props) {
    return (
      <div className="progress-bar">
          {props.label + ": " + props.fill}
          <div className="progress-bar-bar">
              <span className="progress-bar-inner" style={{"width" : props.fill}} />
          </div>
      </div>
    );
}