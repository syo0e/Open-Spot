import "./ClientMyPage.css";
import React from "react";

function ClientMyPage() {
  return (
    <div className="entire-box">
      <div className="intro-bg">
        <div className="header">
          <div className="rogo">로고</div>
          <ul className="nav">
            <li>
              <a href="www.naver.com">MAP</a>
            </li>
            <li>
              <a href="www.naver.com">MYPAGE</a>
            </li>
            <li>
              <a href="www.naver.com">LOGOUT</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="second-big-box">
        <div className="sider-bar">
          <button className="client-info-bt">
            <div className="client-info">회원정보</div>
          </button>
          <button className="favorite-li-bt">
            <div className="favorite-li">나의 보관함</div>
          </button>
        </div>
        <div className="inner-box">
          <div className="client-info-box">
            <div className="client-img-box">
              <div className="client-img"></div>
            </div>
            <div className="info-box">
              <ul className="name-box">
                <li className="name">
                  <div>이름</div>
                </li>
                <li className="name-area">
                  <div>
                    <input name="text-nmae" type="text"></input>
                  </div>
                </li>
              </ul>
              <ul className="password-box">
                <li className="password">
                  <div>비밀번호</div>
                </li>
                <li className="password-area">
                  <div>
                    <input name="text-password" type="text"></input>
                  </div>
                </li>
              </ul>
              <ul className="email-box">
                <li className="email">
                  <div>E-mail</div>
                </li>
                <li className="email-area">
                  <div>
                    <input name="text-email" type="text"></input>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="change-bt">
            <button className="info-change-bt">
              <div className="client-info-change">회원정보 수정</div>
            </button>
            <button className="delete-bt">
              <div className="with-drawal">회원 탈퇴</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientMyPage;
