import "./BusinessMyStore.css";
import React from "react";

function BusinessMyStore() {
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
          <button className="my-store-bt">
            <div className="my-store-li">나의 가게함</div>
          </button>
        </div>
        <div className="inner-box">
          <div>
            <button className="register-bt">
              <div className="change">가게 등록 하기</div>
            </button>
          </div>
          <div className="aside"></div>
          <div className="divider">
            <div className="store-info">
              <div className="store-img-box">
                <div className="store-img"></div>
              </div>
              <div className="store-name">니쿠킹 버거</div>
              <div className="store-detail-info">
                <div className="detail-info">
                  <div>
                    주소 : 서울 강서구 강서로 72-5 580번지 코드스테이츠 1층
                  </div>
                  <div>전화번호 : 010-0000-0000</div>
                  <div>주차여부 : 5/20</div>
                  <div>예약 여부 : 가능</div>
                </div>
                <div className="reaction-box">
                  <div>💜</div>
                  <div className="count">20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessMyStore;
