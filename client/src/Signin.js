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

const SubTitle = styled.p`
  height: 13%;
  margin-left: 1%;
  color: rgb(240, 240, 240);
  font-size: 1em;
  font-weight: 600;
`;

const InputContainer = styled.div`
  height: 420px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 6%;
`;

const Input = styled.input`
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

const Verfication = styled.div`
  height: 15%;
  margin-left: 1%;
  color: rgb(245, 59, 59);
  font-size: 0.9em;
  font-weight: 600;
`;

const Button = styled.button`
  height: 26%;
  border-radius: 10px;
  color: rgb(44, 44, 44);
  font-size: 1em;
  font-weight: 600;
  border: 1px solid rgb(194, 152, 152);
  background-color: rgb(211, 165, 165);
  cursor: pointer;
  margin-top: 15px;
`;

const AuthBtn = styled.button`
  width: 400px;
  height: 46px;
  margin-bottom: 40px;
`;

const BcodeContainer = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
`;

const Signin = () => {
  return (
    <>
      <Background>
        <Header>
          <Logo />
        </Header>
        <Container>
          <div>
            <Title>SIGN IN</Title>
            {/* client, business 구분자 */}
            <div className="auth-container">
              <SubTitle>사업자 인증</SubTitle>
              <BcodeContainer>
                <Input className="input-business-code" />
                <Input className="input-business-code" />
                <Input className="input-business-code" />
              </BcodeContainer>
              <Verfication>
                {/* 이미 사용된 사업자 번호입니다/(통과) or 사업자 번호 형식이 올바르지 않습니다/(통과) -문구 띄우기 */}
              </Verfication>
              <AuthBtn>사업자 번호 인증하기</AuthBtn>
            </div>
            {/* client, business 구분자 */}
            <InputContainer>
              <p className="sub-title">
                {/* 사용자 개인 정보/사업자 개인정보 */}사용자 개인 정보
              </p>
              <Input placeholder="닉네임" />
              <Verfication>
                {/* 닉네임이 중복됩니다/(통과) or 닉네임의 형식이 올바르지 않습니다/(통과) -문구 띄우기 */}
              </Verfication>
              <Input placeholder="이메일" />
              <Verfication>
                {/* 이메일이 중복됩니다/(통과) or 이메일의 형식이 올바르지 않습니다/(통과) -문구 띄우기 */}
              </Verfication>
              <Input placeholder="비밀번호" className="input-password" />
              <div className="verification">
                {/* 비밀번호의 형식이 올바르지 않습니다/(통과) -문구 띄우기 */}
              </div>
              <Input placeholder="비밀번호 확인" className="input-password" />
              <Verfication>
                {/* 비밀번호가 일치합니다/비밀번호가 일치하지 않습니다 -문구 띄우기 */}
              </Verfication>
              <Button>회원 가입</Button>
            </InputContainer>
          </div>
        </Container>
      </Background>
    </>
  );
};

export default Signin;
