import React from "react";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: url(./../public/img/StoreIMG.jpg) no-repeat center center
    rgba(82, 82, 82, 0.5);
  background-blend-mode: multiply;
  background-size: cover;
`;

const Header = styled.header`
  height: 70px;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  top: 30px;
  left: 45px;
  background: url(./../public/img/ProjectLogoEX.png) no-repeat center center;
  background-size: cover;
  cursor: pointer;
`;

const Container = styled.div`
  height: 75%;
  display: flex;
  flex-direction: column wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  text-align: center;
  font-size: 3em;
  font-weight: 900;
  color: rgb(240, 240, 240);
  cursor: grab;
`;

const InputContainer = styled.div`
  height: 23%;
  stroke: none;
  outline: none;
  box-shadow: none;
  border: 1px solid rgb(240, 240, 240);
  border-radius: 10px;
  padding: 0 1.6ch;
  font-weight: 500;
  margin-bottom: 7px;
  letter-spacing: 1.5px;
  background-color: f2f5fb;
`;

const LoginBtn = styled.button`
  height: 26%;
  border-radius: 10px;
  color: rgb(44, 44, 44);
  font-size: 1em;
  font-weight: 600;
  border: 1px solid rgb(194, 152, 152);
  background-color: rgb(211, 165, 165);
  cursor: pointer;
`;

const Verfication = styled.div`
  height: 15%;
  margin-left: 1%;
  color: rgb(245, 59, 59);
  font-size: 0.9em;
  font-weight: 600;
`;

const Seperate = styled.hr`
  width: 100%;
  border-bottom: 0px;
  background-color: rgb(255, 255, 255);
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
`;

const SocialIcons = styled.input`
  width: 55px;
  height: 55px;
  border: none;
  cursor: pointer;
  background-size: cover;
`;

const Login = () => {
  return (
    <>
      <Background>
        <Header>
          <Logo />
        </Header>
        <Container>
          <div>
            <Title>LOG IN</Title>
            <InputContainer>
              <input placeholder="email" />
              <input placeholder="password" />
              <Verfication>
                {/* 이메일과 비밀번호가 일치하지 않습니다 -문구 띄우기 */}
              </Verfication>
              <LoginBtn>로그인</LoginBtn>
            </InputContainer>
            {/* client, business 구분자 */}
            <Seperate />
            <BtnContainer>
              <SocialIcons type="button" id="googleIcon" />
              <SocialIcons type="button" id="naverIcon" />
              <SocialIcons type="button" id="kakaoIcon" />
            </BtnContainer>
            {/* client, business 구분자 */}
          </div>
        </Container>
      </Background>
    </>
  );
};
