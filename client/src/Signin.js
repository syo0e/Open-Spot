import React from "react";
import "./Signin.css";

function Signin() {
  return (
    <>
      <div className="background">
        <header>
          <div id="logo" />
        </header>
        <div className="container">
          <div>
            <p id="title">SIGN IN</p>
            {/* client, business 구분자 */}
            <div className="auth-container">
              <p className="sub-title">사업자 인증</p>
              <div className="business-code-container">
                <input className="input-business-code" />
                <input className="input-business-code" />
                <input className="input-business-code" />
              </div>
              <div className="verification">
                {/* 이미 사용된 사업자 번호입니다/(통과) or 사업자 번호 형식이 올바르지 않습니다/(통과) -문구 띄우기 */}
              </div>
              <button>사업자 번호 인증하기</button>
            </div>
            {/* client, business 구분자 */}
            <div className="input-container">
              <p className="sub-title">
                {/* 사용자 개인 정보/사업자 개인정보 */}사용자 개인 정보
              </p>
              <input placeholder="닉네임" />
              <div className="verification">
                {/* 닉네임이 중복됩니다/(통과) or 닉네임의 형식이 올바르지 않습니다/(통과) -문구 띄우기 */}
              </div>
              <input placeholder="이메일" />
              <div className="verification">
                {/* 이메일이 중복됩니다/(통과) or 이메일의 형식이 올바르지 않습니다/(통과) -문구 띄우기 */}
              </div>
              <input placeholder="비밀번호" className="input-password" />
              <div className="verification">
                {/* 비밀번호의 형식이 올바르지 않습니다/(통과) -문구 띄우기 */}
              </div>
              <input placeholder="비밀번호 확인" className="input-password" />
              <div className="verification">
                {/* 비밀번호가 일치합니다/비밀번호가 일치하지 않습니다 -문구 띄우기 */}
              </div>
              <button>회원 가입</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
