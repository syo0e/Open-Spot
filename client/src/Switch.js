import React from "react";
import "./Switch.css";

function Switch() {
  return (
    <>
      <div className="background">
        <header>
          <div id="logo" />
        </header>
        <div className="container">
          <div>
            <p id="title">Who You are ?</p>
            <div className="button-container">
              <div>
                <div className="circle-button">
                  <strong>개인</strong>입니다
                </div>
              </div>
              <div id="vertical-hr" />
              <div>
                <div className="circle-button">
                  <strong>사업자</strong>입니다
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Switch;
