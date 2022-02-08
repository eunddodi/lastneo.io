/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Redirect, useHistory, useLocation } from "react-router";
import GuestHome from "./GuestHome";
import OwnerHome from "./OwnerHome";
import { isOwner } from "../../utils/auth";
import { getGuestInfo } from "../../_actions/guest_action";
import { getOwnerInfo } from "../../_actions/owner_action";
import { useDispatch, useSelector } from "react-redux";
import HomeNavbar from "../../components/HomeNavbar";
import { Helmet } from "react-helmet-async";

function HomeContainer({ match, history }) {
  const dispatch = useDispatch();
  dispatch({ type: "set_nickname", payload: match.params.id });

  const [showGuest, setShowGuest] = useState(false);
  const [showOwner, setShowOwner] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const data = location.state;
    if (typeof data !== "undefined") {
      if (data.from == "frontdoor" && data.status == 1) {
        dispatch(getGuestInfo(match.params.id)).then((response) => {
          if (response.type == "guest_info_success") {
            setShowGuest(true);
          }
        });
      } else if (data.from == "frontdoor" && data.status == 0) {
        dispatch(getOwnerInfo(match.params.id)).then((response) => {
          if (response.type == "owner_info_success") {
            setShowOwner(true);
          }
        });
      } else if (data.from == "register") {
        dispatch(getOwnerInfo(match.params.id)).then((response) => {
          if (response.type == "owner_info_success") {
            setShowOwner(true);
          }
        });
      }
    } else {
      if (localStorage.getItem("token") == null) {
        // 토큰이 없으면 현관으로 Redirect
        console.log("redirect");
        history.push({
          pathname: `${match.url}/frontdoor`,
          state: { nickname: match.params.id },
        });
      } else {
        // 토큰 있으면 주인 여부 확인하는 요청을 서버에 전송
        let data = {
          nickname: match.params.id,
          token: localStorage.getItem("token"),
        };
        isOwner(data).then((response) => {
          if (response.status == 200) {
            dispatch(getOwnerInfo(match.params.id)).then((response) => {
              if (response.type == "owner_info_success") {
                setShowOwner(true);
              }
            });
          } else {
            history.push({
              pathname: `${match.url}/frontdoor`,
              state: { nickname: match.params.id },
            });
          }
        });
      }
    }
  }, []);

  return (
    <>
      <Helmet>
        {/* URL 정보 */}
        <meta
          property="og:url"
          content={`http://3.37.14.91/${match.params.id}`}
        />
        {/* title 정보 */}
        <meta
          property="og:title"
          content={`${match.params.id}님의 네오입니다.`}
        />
        {/* 페이지 상세 정보 */}
        <meta property="og:description" content="네오 설명" />
        {/* 페이지 대표 이미지 정보 */}
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1643888193686-81c45c445b95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        />
        {/* 트위터 메타 정보 */}
        <meta
          name="twitter:title"
          content={`${match.params.id}의 네오입니다.`}
        />
        <meta name="twitter:description" content="네오 설명" />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1643888193686-81c45c445b95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        />
      </Helmet>
      <HomeNavbar owner={showOwner} guest={showGuest} />
      {showGuest && <GuestHome nickname={match.params.id} />}
      {showOwner && <OwnerHome nickname={match.params.id} />}
    </>
  );
}

export default HomeContainer;
