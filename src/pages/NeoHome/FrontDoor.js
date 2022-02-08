/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import styled from "styled-components";
import bell from "../../assets/bell.png";
import lock from "../../assets/lock.png";
import EnterPw from "./EnterPw";
import images from "../../assets";
import Footer from "../../components/Footer";
import { customMedia } from "../../styles/GlobalStyle";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import { Helmet } from "react-helmet-async";

function FrontDoor() {
  const [passwordUI, setPasswordUI] = useState(false);
  const [nickname, setNickname] = useState("");
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    setNickname(location.state.nickname);
  }, []);
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  const onBellHandler = () => {
    history.push({
      pathname: `/${nickname}`,
      state: { from: "frontdoor", status: 1 },
    });
  };
  const onLockHandler = () => {
    setPasswordUI(true);
  };
  return (
    <>
      <Helmet>
        {/* URL 정보 */}
        <meta property="og:url" content={`http://3.37.14.91/${nickname}`} />
        {/* title 정보 */}
        <meta property="og:title" content={`${nickname}님의 네오입니다.`} />
        {/* 페이지 상세 정보 */}
        <meta property="og:description" content="네오 설명" />
        {/* 페이지 대표 이미지 정보 */}
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1643888193686-81c45c445b95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        />
        {/* 트위터 메타 정보 */}
        <meta name="twitter:title" content={`${nickname}의 네오입니다.`} />
        <meta name="twitter:description" content="네오 설명" />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1643888193686-81c45c445b95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        />
      </Helmet>
      <Navbar color="tBlack" goBack={false} />
      <Container>
        <ImgDiv>
          <img src={images.frontdoorhome} />
        </ImgDiv>
        {!passwordUI ? (
          <Default
            onLockHandler={onLockHandler}
            onBellHandler={onBellHandler}
            nickname={nickname}
          />
        ) : (
          <EnterPw nickname={nickname} />
        )}
        <Footer />
      </Container>
    </>
  );
}

function Default({ onLockHandler, onBellHandler, nickname }) {
  return (
    <StyledDiv>
      <h4>
        집 주소
        <br />
        {`lastneo.io/${nickname}`}
      </h4>
      <h3>초인종을 눌러 들어가보세요</h3>
      <BellBtn onClick={onBellHandler}>
        <img src={bell} />
      </BellBtn>
      <LockBtn>
        <p>집 주인이신가요?</p>
        <button onClick={onLockHandler}>
          <img src={lock} />
        </button>
      </LockBtn>
    </StyledDiv>
  );
}

export default FrontDoor;

const StyledDiv = styled.div`
  color: ${(props) => props.theme.palette.lightGrey};
  padding-bottom: 180px;
  background: lavender;
  background-color: rgba(0, 0, 0, 0.6);
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-top: 60px;
  h3 {
    font-size: 28px;
    font-weight: 700;
  }
  h4 {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 40px;
  }
  p {
    font-size: 14px;
  }
  ${customMedia.lessThan("mobile")`
  padding-top: 24px;
  // height: 100%;
  h3 {
    font-size: 24px;
  }
  h4 {
    font-size: 20px;
    margin-bottom: 24px;
  }
  p {
    font-size: 12px;
  }
    `}
`;

const ImgDiv = styled.div`
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  height: 100%;
  z-index: -100;
  text-align: center;
  img {
    display: inline;
    margin: auto;
    width: auto;
    height: 50%;
  }
  ${customMedia.lessThan("mobile")`
  width: 100%;
  img {
    width: calc(100% - 48px);
    height: auto;
  }

  `}
`;

const BellBtn = styled.button`
  background: none;
  img {
    width: 120px;
    height: 120px;
    &:hover {
      filter: brightness(50%);
    }
  }
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  ${customMedia.lessThan("mobile")`
  img {
    width: 96px;
    height: 96px;
  }
  `}
`;

const LockBtn = styled.button`
  background: none;
  img {
    width: 60px;
    height: 60px;
    &:hover {
      filter: brightness(50%);
    }
  }
  button {
    background: none;
  }
  p {
    color: ${(props) => props.theme.palette.lightGrey};
    margin-bottom: 8px;
  }
  position: absolute;
  bottom: 60px;
  ${customMedia.lessThan("mobile")`
  img {
    width: 48px;
    height: 48px;
  }
  `}
`;
