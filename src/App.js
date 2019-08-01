import React from 'react';
import './App.css';
import ContentFrame from "./ContentComponent/ContentFrame"
import Front from "./FrontComponent/Front"
import ProgressBar from "./ProgressBarComponent/ProgressBar"
import SiteManager from "./SiteManagerComponent/SiteManager"
import Site from "./SiteManagerComponent/Site"


function App() {
  return (
      <div className="App">
          <SiteManager>
              <Site>
                  <Front />
              </Site>
              <Site>
                  <div className="app-main">
                      <ProgressBar fill="50%" label="Android Development"/>
                      <div className="vl"/>
                  </div>
              </Site>
          </SiteManager>
      </div>
  );
}

export default App;
