/* eslint-disable */
import React from "react";
import styled from "styled-components";
import images from "../../assets";
import { customMedia } from "../../styles/GlobalStyle";

function CopyModal() {
  return (
    <StyledDiv>
      <img src={images.blackalert} />
      <span>클립보드에 복사되었어요!</span>
    </StyledDiv>
  );
}

export default CopyModal;

const StyledDiv = styled.div`
  margin-top: 12px;
  img {
    width: 16px;
    height: 16px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme.palette.black};
  }
  ${customMedia.lessThan("mobile")`
  img {
      width: 12px;
      height: 12px;
  }
  span {
      font-size: 12px;
  }
  `}
`;
