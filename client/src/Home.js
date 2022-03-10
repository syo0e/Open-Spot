import React from "react";
import "./Home.css";

// input 태그와 button 태그 둘 다 버튼을 만들 수 있음 -> 차이점 뭔지 알아보기

function Home() {
  return (
    <>
      <div className="entire-container">
        <div className="main-section">
          <header>
            <div id="logo" />
            <div className="tab-container">
              <button className="tab">MAP</button>
              <div id="vertical-hr"></div>
              <button className="tab">LOG IN</button>
              {/* <button className="tab">MY PAGE</button> */}
              <button className="tab">SIGN IN</button>
              {/* <button className="tab">LOG OUT</button> */}
            </div>
          </header>
          <div className="main-container">
            <p id="title">
              새롭게 떠오르는.
              <br />
              빠르게 알고싶은.
            </p>
            <button className="map-button">Open Spot 체험하러가기</button>
            {/* <button className="map-button">Map 구경가기</button> */}
          </div>
          <div className="down-button-container">
            <i id="down-icon" className="fas fa-chevron-down"></i>
            <p id="down-text">
              Scroll
              <br />
              Down
            </p>
          </div>
        </div>
        <div className="client-section">Hello World</div>
        <div className="business-section">Hello World</div>
        <footer>Hello World</footer>
      </div>
    </>
  );
}

export default Home;
