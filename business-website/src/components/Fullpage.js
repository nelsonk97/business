import React from "react";
//import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
// import hero from "../assets/hero-text-1c.png";

function Fullpage() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"96BA3DF5-5B084EFD-9DCB632E-D35399B1"}
      scrollingSpeed={650} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div id="fullpage">
              <div className="section" id="section-1">
                <div className="hero">
                  {/* <img src={hero} alt="hero" id="hero-txt"></img> */}
                  <p id="hero-txt">7ven digital media</p>
                  <p id="hero-subtxt">Elevate your online presence</p>
                </div>
              </div>
              <div className="section" id="section-2">
                <div className="info-container" id="info-container">
                  <div className="info-1" id="info-1">
                    1
                  </div>
                  <div className="info-2" id="info-2">
                    2
                  </div>
                </div>
              </div>
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
