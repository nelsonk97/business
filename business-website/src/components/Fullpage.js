import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";

function Fullpage() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"96BA3DF5-5B084EFD-9DCB632E-D35399B1"}
      scrollingSpeed={750} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section" id="section-1">
              <p>
                Section 1 (please refer to{" "}
                <a href="https://github.com/alvarotrigo/fullPage.js/#fullpagejs">
                  fullpage.js docs
                </a>
                )
              </p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section" id="section-2">
              <p>Section 2</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section" id="section-3">
              <p>Section 3</p>
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
            <div className="section" id="section-4">
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
