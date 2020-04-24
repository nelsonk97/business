import React from "react";
//import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import hero from "../assets/hero.png";

function Fullpage() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"96BA3DF5-5B084EFD-9DCB632E-D35399B1"}
      scrollingSpeed={725} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div id="fullpage">
              <div className="section" id="section-1">
                <div className="hero">
                  <img src={hero} alt="hero-img" id="hero-img"></img>
                  <p id="hero-txt">Elevate Your Online Presence.</p>
                </div>
              </div>
              <div className="section" id="section-2"></div>
              <div className="section" id="section-3"></div>
              <div className="section" id="section-4">
                <button onClick={() => fullpageApi.moveTo(1, 2)}>
                  Click me to move all the way up
                </button>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default Fullpage;
