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
                  <p id="hero-subtxt">Elevate your online presence.</p>
                </div>
              </div>
              <div className="section" id="section-2">
                <div className="info-container" id="info-container">
                  <div className="info-1" id="info-1">
                    <p id="info-1-header">Challenge.</p>
                    <p id="info-1-subtxt">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p id="info-1-header">Modern.</p>
                    <p id="info-1-subtxt">
                      Faucibus purus in massa tempor nec. Ut faucibus pulvinar
                      elementum integer enim neque. Malesuada proin libero nunc
                      consequat interdum varius sit amet. Viverra justo nec
                      ultrices dui sapien eget. A diam sollicitudin tempor id eu
                      nisl nunc. Ullamcorper malesuada proin libero nunc
                      consequat interdum varius sit.
                    </p>
                    <p id="info-1-header">Elevate.</p>
                    <p id="info-1-subtxt">
                      Malesuada proin libero nunc consequat interdum varius sit
                      amet. Tempus imperdiet nulla malesuada pellentesque elit
                      eget. Blandit turpis cursus in hac. Amet nisl purus in
                      mollis. A diam sollicitudin tempor id eu nisl nunc. Enim
                      sit amet venenatis urna. Egestas diam in arcu cursus
                      euismod quis viverra nibh cras.
                    </p>
                  </div>
                  <div className="info-2" id="info-2">
                    <p id="info-1-header">Challenge.</p>
                    <p id="info-1-subtxt">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p id="info-1-header">Modern.</p>
                    <p id="info-1-subtxt">
                      Faucibus purus in massa tempor nec. Ut faucibus pulvinar
                      elementum integer enim neque. Malesuada proin libero nunc
                      consequat interdum varius sit amet. Viverra justo nec
                      ultrices dui sapien eget. A diam sollicitudin tempor id eu
                      nisl nunc. Ullamcorper malesuada proin libero nunc
                      consequat interdum varius sit.
                    </p>
                    <p id="info-1-header">Elevate.</p>
                    <p id="info-1-subtxt">
                      Malesuada proin libero nunc consequat interdum varius sit
                      amet. Tempus imperdiet nulla malesuada pellentesque elit
                      eget. Blandit turpis cursus in hac. Amet nisl purus in
                      mollis. A diam sollicitudin tempor id eu nisl nunc. Enim
                      sit amet venenatis urna. Egestas diam in arcu cursus
                      euismod quis viverra nibh cras.
                    </p>
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
