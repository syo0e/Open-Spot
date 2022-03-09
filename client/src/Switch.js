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

const Header = styled.Header`
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
}
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

const BtnContainer = styled.div`
  width: 500px;
  height: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;
`;

const VerticalHr = styled.div`
  width: 0.1px;
  height: 200px;
  border-bottom: 0px;
  background-color: rgb(255, 255, 255, 0.3);
`;

const CircleBtn = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: rgb(194, 152, 152);
  cursor: pointer;
  color: rgb(240, 240, 240);
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  line-height: 170px; /*text가 한줄일때만 수직 중앙 정렬 가능한 방식*/
`;

const Strong = styled.strong`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: rgb(194, 152, 152);
  cursor: pointer;
  color: rgb(240, 240, 240);
  font-size: 1.2em;
  font-weight: 700;
  text-align: center;
  line-height: 170px;
  color: rgb(44, 44, 44);
  font-weight: 900;
`;

const Switch = () => {
  return (
    <>
      <Background>
        <Header>
          <Logo />
        </Header>
        <Container>
          <div>
            <Title>Who You are ?</Title>
            <BtnContainer>
              <div>
                <div className="circle-button">
                  <strong>개인</strong>입니다
                </div>
              </div>
              <VerticalHr />
              <div>
                <CircleBtn>
                  <strong>사업자</strong>입니다
                </CircleBtn>
              </div>
            </BtnContainer>
          </div>
        </Container>
      </Background>
    </>
  );
};

export default Switch;
