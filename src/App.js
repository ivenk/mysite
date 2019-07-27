import React from 'react';
import './App.css';
import NavBar from "./NavigationBarComponent/NavBar";

function App() {
  return (
    <div className="App">
        <div className="side-bar">
            <div className="name-header">
                <h1 className="name-header-main">Iven Köthke</h1>
                <h2 className="name-header-second">Blue</h2>
            </div>
            <div className="vl"/>
            <NavBar/>
        </div>
    </div>
  );
}

export default App;
