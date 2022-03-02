import React from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="background">
        <header>
          <div id="logo" />
        </header>
        <div className="container">
          <div>
            <p id="titie">LOG IN</p>
            <div className="input-container">
              <input placeholder="email" />
              <input placeholder="password" />
              <div className="verfication">
                {/* 이메일과 비밀번호가 일치하지 않습니다 -문구 띄우기 */}
              </div>
              <button>로그인</button>
            </div>
            {/* client, business 구분자 */}
            <hr />
            <div className="button-container">
              <input type="button" className="social-icons" id="googleIcon" />
              <input type="button" className="social-icons" id="naverIcon" />
              <input type="button" className="social-icons" id="kakaoIcon" />
            </div>
            {/* client, business 구분자 */}
          </div>
        </div>
      </div>
    </>
  );
};
