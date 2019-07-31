import React from 'react'

function ProgressBar(props) {
    return (
      <div className="progress-bar">
          <span className="progress-bar-inner" style={"width: " + props.width + "%"}/>
      </div>
    );
}