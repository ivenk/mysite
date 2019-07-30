import React from 'react';
import './App.css';
import ContentFrame from "./ContentComponent/ContentFrame"
import Front from "./FrontComponent/Front"

function App() {
  return (
    <div className="App">
        <Front />
        <div className="app-main">
            <div className="side-bar">
                <div className="name-header">
                    <h1 className="name-header-main">Iven Köthke</h1>
                    <h2 className="name-header-second">Blue</h2>
                </div>
            </div>
            <div className="vl"/>
            <ContentFrame mode="main"/>
        </div>
    </div>
  );
}

export default App;
