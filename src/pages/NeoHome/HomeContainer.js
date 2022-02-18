/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { Redirect, useHistory, useLocation } from "react-router";
import GuestHome from "./GuestHome";
import OwnerHome from "./OwnerHome";
import { isOwner } from "../../utils/auth";
import { getOwnerInfo } from "../../modules/owner";
import { getGuestInfo } from "../../modules/guest";
import { setNickname } from "../../modules/neohome";
import { useDispatch, useSelector } from "react-redux";
import HomeNavbar from "../../components/HomeNavbar";

function HomeContainer({ match, history }) {
  const dispatch = useDispatch();
  dispatch(setNickname(match.params.id));

  const [showGuest, setShowGuest] = useState(false);
  const [showOwner, setShowOwner] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const data = location.state;
    if (typeof data !== "undefined") {
      if (data.from == "frontdoor" && data.status == 1) {
        dispatch(getGuestInfo(match.params.id)).then((response) => {
          if (response.type == "guest/GUEST_INFO_SUCCESS") {
            setShowGuest(true);
          }
        });
      } else if (data.from == "frontdoor" && data.status == 0) {
        dispatch(getOwnerInfo(match.params.id)).then((response) => {
          if (response.type == "owner/OWNER_INFO_SUCCESS") {
            setShowOwner(true);
          }
        });
      } else if (data.from == "register") {
        dispatch(getOwnerInfo(match.params.id)).then((response) => {
          if (response.type == "owner/OWNER_INFO_SUCCESS") {
            setShowOwner(true);
          }
        });
      }
    } else {
      if (localStorage.getItem("token") == null) {
        // 토큰이 없으면 현관으로 Redirect
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
              if (response.type == "owner/OWNER_INFO_SUCCESS") {
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
      <HomeNavbar owner={showOwner} guest={showGuest} />
      {showGuest && <GuestHome nickname={match.params.id} />}
      {showOwner && <OwnerHome nickname={match.params.id} />}
    </>
  );
}

export default HomeContainer;
