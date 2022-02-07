/* eslint-disable */
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import EnterId from "./pages/Login/EnterId";
import Register from "./pages/Register";
import GlobalStyle from "./styles/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Nav from "./components/Navbar";
import NeoHome from "./pages/NeoHome";
import ResetPw from "./pages/ResetPw";
import React from "react";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";
import favicon from "./assets/favicon.ico";
import mainImg from "./assets/main_web.png";

const AppBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  window.addEventListener("resize", () => setScreenSize());
  const currentUrl = document.location.href;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Helmet>
        <title>라스트네오</title>
        <link rel="icon" href={favicon} />
        <meta property="og:url" content={currentUrl} />
        {/* title 정보 */}
        <meta property="og:title" content="일론 머스크 지수 테스트하기" />
        {/* 페이지 상세 정보 */}
        <meta
          property="og:description"
          content="나는 일론 머스크에 대해서 얼마나 알고 있을까?"
        />
        {/* 페이지 대표 이미지 정보 */}
        <meta property="og:image" content={mainImg} />

        {/* 트위터 메타 정보 */}
        <meta name="twitter:title" content="일론 머스크 지수 테스트하기" />
        <meta
          name="twitter:description"
          content="나는 일론 머스크에 대해서 얼마나 알고 있을까?"
        />
        <meta name="twitter:image" content={mainImg} />
      </Helmet>
      <BrowserRouter>
        <AppBlock className="app-container">
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/login" component={EnterId}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/resetpw" component={ResetPw}></Route>
            <Route path="/404" component={NotFound}></Route>
            <Route path="/:id" component={NeoHome}></Route>
          </Switch>
        </AppBlock>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
