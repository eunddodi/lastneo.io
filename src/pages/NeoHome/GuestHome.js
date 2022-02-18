/* eslint-disable */
import React, { useEffect, useReducer, useState, useRef } from "react";
import { useSelector } from "react-redux";
import HomeDiv from "../../components/HomeDiv";
import HomeFooter from "../../components/HomeFooter";
import CharacterRoom from "./CharacterRoom";
import HomeNav from "../../components/HomeNav";
import Profile from "./Sections/Profile";
import styled, { css } from "styled-components";
import images from "../../assets";
import { customMedia } from "../../styles/GlobalStyle";
import FltBtn from "../../components/FltBtn";
import { useHistory, useLocation } from "react-router";
import { Helmet } from "react-helmet-async";
const GuestHome = () => {
  const history2 = useHistory();
  const tabMenuRef = useRef();

  const store = useSelector((store) => store.guest);
  const onClickHandler = () => {
    history2.push("/register");
  };

  useEffect(() => {
    window.addEventListener("wheel", () => {
      if (tabMenuRef.current.getBoundingClientRect().top < 0) {
        setFltBtnVisible(true);
      }
      if (tabMenuRef.current.getBoundingClientRect().top > 0) {
        setFltBtnVisible(false);
      }
    });
  });

  return (
    <>
      <HomeDiv>
        <Profile store={store} owner={false} />
        <HomeNav>
          <TabBtn color="black" textColor="white" ref={tabMenuRef}>
            <img src={images.pinkblock} />
            캐릭터 방
          </TabBtn>
        </HomeNav>
        <CharacterRoom store={store} owner={false} />
        <FltBtn color="pink" onClick={onClickHandler} visible={true}>
          내 네오 만들기
        </FltBtn>
        <HomeFooter />
      </HomeDiv>
    </>
  );
};

export default GuestHome;

const TabBtn = styled.button`
  padding: 16px 0;
  width: 320px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 12px 0 0;
  font-size: 18px;
  margin: auto;
  img {
    width: 20px;
    height: 20px;
    margin-right: 20px;
    margin-bottom: 0;
  }
  ${(props) => {
    const color = props.color;
    const textColor = props.textColor;
    const selected = props.theme.palette[color];
    const textSelected = props.theme.palette[textColor];
    return css`
      background-color: ${selected};
      color: ${textSelected};
    `;
  }}

  ${customMedia.lessThan("mobile")`
  width: calc((100% - 48px)/2);
  font-size: 16px;
  button {
    padding: 12px 0;
    width: 164px;
  }`}
`;
