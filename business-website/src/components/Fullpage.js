import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

function Fullpage() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"96BA3DF5-5B084EFD-9DCB632E-D35399B1"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <p>Section 1 (welcome to fullpage.js)</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 2</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 3</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section">
              <p>Section 4</p>
              <button onClick={() => fullpageApi.moveTo(1, 2)}>
                Click me to move all the way up
              </button>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default Fullpage;
