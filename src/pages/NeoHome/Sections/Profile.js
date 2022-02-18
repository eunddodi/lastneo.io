/* eslint-disable */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import images from "../../../assets";
import { customMedia } from "../../../styles/GlobalStyle";
import { sendHomeDesc } from "../../../modules/owner";

function Profile({ store, owner, nickname }) {
  const dispatch = useDispatch();

  let originalDesc = "";
  if (owner && store.description == "나를 담는 단 하나의 방법 '네오'") {
    originalDesc = "집으로 초대한 친구에게 네오를 소개해주세요";
  } else {
    originalDesc = store.description;
  }
  const [desc, setDesc] = useState(originalDesc);
  const [editable, setEditable] = useState(false);
  const onDescHandler = (e) => {
    setDesc(e.target.value);
  };

  const onSubmitHandler = () => {
    let data = { description: desc, nickname };
    dispatch(sendHomeDesc(data)).then((response) => {
      if (response.type == "owner/EDIT_DESC_SUCCESS") {
        setEditable(false);
        if (response.payload.length == 0) {
          setDesc("집으로 초대한 친구에게 네오를 소개해주세요");
        } else {
          setDesc(response.payload);
        }
      } else {
        setEditable(false);
        setDesc(originalDesc);
      }
    });
  };
  return (
    <ProfileSection>
      <img className="profile-img" src={store.mini_profile} />
      <div className="desc-wrapper">
        <h3>{store.home_address}</h3>
        <HomeDesc>
          {!owner ? (
            <div className="guest-desc">{desc}</div>
          ) : (
            <div className="owner-desc">
              {editable ? (
                <div className="edit-desc">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      value={desc}
                      onChange={onDescHandler}
                      maxLength="20"
                      // onBlur={onBlurHandler}
                    />
                  </div>
                  <button onClick={onSubmitHandler}>완료</button>
                </div>
              ) : (
                <div className="desc">
                  <span>{desc}</span>
                  <EditBtn onClick={() => setEditable(true)}>
                    <img className="edit-btn" src={images.pencil} />
                  </EditBtn>
                </div>
              )}
            </div>
          )}
        </HomeDesc>
      </div>
    </ProfileSection>
  );
}

export default Profile;

const ProfileSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 640px;
  margin-bottom: 60px; //TODO: 왜 padding아니고 margin으로 해놨지
  margin-top: 60px;
  font-size: 24px;
  h3 {
    margin-bottom: 8px;
    color: ${(props) => props.theme.palette.black};
    font-weight: 500;
  }
  img.profile-img {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 12px;
  }
  div.desc-wrapper {
    width: 540px;
  }

  ${customMedia.lessThan("mobile")`
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
  img.profile-img {
    margin-right:0;
    margin-bottom: 16px;
    width: 60px;
    height: 60px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 4px;
  }
  div.desc-wrapper {
    width: 100%;
    justify-content: center;
  }

    `}
`;

const EditBtn = styled.button`
  background-color: transparent;
  display: inline;
  width: 20px;
  height: 20px;
`;

const HomeDesc = styled.div`
  /* background-color: orange; */
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.darkGrey};
  img.edit-btn {
    width: 16px;
    height: 16px;
  }
  div.owner-desc {
    width: fit-content;
  }
  div.edit-desc {
    position: relative;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    button {
      width: 32px;
      height: 24px;
      border-radius: 4px;
      margin-left: 6px;
      font-size: 10px;
      background: ${(props) => props.theme.palette.lightGrey};
      color: ${(props) => props.theme.palette.powderGrey};
    }
    input {
      outline: none;
      font-size: 16px;
      font-weight: 400;
      width: 310px;
      border-bottom: 1px solid ${(props) => props.theme.palette.darkGrey};
      color: ${(props) => props.theme.palette.darkGrey};
      padding-bottom: 4px;
    }
  }
  div.desc {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: fit-content;
    span {
      margin-right: 6px;
    }
  }

  ${customMedia.lessThan("mobile")`
  font-size: 14px;
  align-items: center;
  div.edit-desc {
    input {
      font-size: 14px;
      width: 258px;
    }
    button {
      margin-left: 4px;
    }
  }
  div.desc {
    span {
      margin-right: 4px;
    }
  }  
  img.edit-btn {
    width: 12px;
    height: 12px;
  }
  `}
`;
