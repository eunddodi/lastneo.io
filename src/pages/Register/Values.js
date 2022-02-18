/* eslint-disable */
import React, { useState, useEffect } from "react";
import InputDiv from "../../components/InputDiv";
import { useDispatch } from "react-redux";
import values from "../../assets/values";
import styled, { css } from "styled-components";
import { sendValues } from "../../modules/register";
import { useHistory } from "react-router";
import { customMedia } from "../../styles/GlobalStyle";
import Footer from "../../components/Footer";
import FltBtn from "../../components/FltBtn";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";

function Values() {
  const arr = new Array(40).fill(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [valueList, setValueList] = useState(arr);
  const [msg, setMsg] = useState("5개를 선택해주세요");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(valueList.filter((element) => element == true).length);
    if (count == 5) {
      setMsg("다음");
    } else if (count > 5) {
    } else if (count > 0) {
      setMsg(`${5 - count}개 더 선택해주세요`);
    } else if (count == 0) {
      setMsg("5개를 선택해주세요");
    }
  }, [valueList, count]);

  const onSumbmitHandler = () => {
    dispatch(sendValues(valueList));
    history.push("/register/nickname");
  };

  return (
    <>
      <Navbar goBack={true} />
      <Container>
        <ValueInputDiv>
          <h3>
            나를 잘 설명하는 단어
            <br />
            5개를 선택해 주세요
          </h3>
          <h4>mbti와 함께 네오에게 담겨요</h4>
          <ValueDiv>
            {values.map((a, i) => {
              return (
                <StyledBtn // 가치관 개별 버튼
                  key={i}
                  onClick={() => {
                    const temp = [...valueList];
                    if (temp.filter((element) => element == true).length < 5) {
                      temp[i] = !temp[i];
                      setValueList(temp);
                    } else {
                      if (temp[i]) {
                        temp[i] = !temp[i];
                        setValueList(temp);
                      }
                    }
                  }}
                  color={valueList[i] ? "purple" : "lightPurple"}
                  textColor={valueList[i] ? "white" : "lavender"}
                >
                  {a.name}
                </StyledBtn>
              );
            })}
          </ValueDiv>
          <FltBtn
            disabled={count != 5}
            onClick={onSumbmitHandler}
            color={count != 5 ? "lightPink" : "pink"}
            visible={true}
          >
            {msg}
          </FltBtn>
        </ValueInputDiv>
        <Footer />
      </Container>
    </>
  );
}

export default Values;

const StyledBtn = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 6px 20px;
  height: 36px;
  border-radius: 20px;
  border: none;
  font-weight: 500;
  font-size: 16px;

  ${({ theme, color, textColor }) => {
    const selected = theme.palette[color];
    const textSelected = theme.palette[textColor];
    if (color == "purple") {
      return css`
        background: ${selected};
        color: ${textSelected};
        &:hover {
          background: ${theme.palette.darkPurple};
          color: ${theme.palette.grey};
        }
        ${customMedia.lessThan("mobile")`
        &:hover {
          background: ${theme.palette.purple};
          color: ${theme.palette.white};
        }
        `}
      `;
    } else if (color == "lightPurple") {
      return css`
        background: ${selected};
        color: ${textSelected};
        &:hover {
          background: ${theme.palette.powderPurple};
          color: ${theme.palette.purple};
        }
      `;
    }
  }}

  ${customMedia.lessThan("mobile")`
  font-size: 12px;
  height: 29px;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 6px 14px;
    `}
`;

const ValueDiv = styled.div`
  /* background: pink; */
  display: block;
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: center;
  ${customMedia.lessThan("mobile")`
    margin-top: 48px;
    `}
`;

const ValueInputDiv = styled(InputDiv)`
  /* background: red; */
  overflow: auto;
  padding-bottom: 0;
  min-height: 100%;
  ${customMedia.lessThan("mobile")`
  min-height: calc(var(--vh, 1vh)*100 - 70px);
    `}
`;

const ValueFltBtn = styled(FltBtn)`
  bottom: 120px;
`;
