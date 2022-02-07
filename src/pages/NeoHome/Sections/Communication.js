/* eslint-disable */
import React, { useEffect, useState } from "react";
import SectionContainer from "../../../components/SectionContainer";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import SmallPinkBtn from "../../../components/SmallPinkBtn";
import images from "../../../assets";
import { customMedia } from "../../../styles/GlobalStyle";
import KakaoShareButton from "../../../components/KaKaoShareButton";
import { useSelector } from "react-redux";
import MsgModal from "../../../components/modals/MsgModal";

const ShareBtns = styled.div`
  align-items: center;
  margin-bottom: 40px;
  div {
    flex-direction: row;
    margin-bottom: 12px;
  }
  button {
    background-color: transparent;
    padding: 0;
  }
  img {
    width: 50px;
    height: 50px;
    margin: 0 4px;
    &:hover {
      filter: brightness(50%);
    }
  }
  p {
    font-size: 14px;
    color: ${(props) => props.theme.palette.black};
  }
  ${customMedia.lessThan("mobile")`
  margin-bottom: 24px;
  `}
`;

const CopyDiscode = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .copy,
  .discode {
    .copy-discode-img {
      width: 50px;
      height: 50px;
      margin-bottom: 20px;
    }
    div {
      margin-bottom: 16px;
      h4 {
        font-size: 20px;
      }
      p {
        font-size: 14px;
      }
    }
  }
  h4 {
    margin-bottom: 4px;
  }

  ${customMedia.lessThan("mobile")`
  grid-template-columns: 100%;
  gird-template-rows: repeat(2, 1fr);
  .copy, .discode { 
    position: relative;
    flex-direction: row;
    margin-bottom: 33px;
    .copy-discode-img {
      width: 40px;
      height: 40px;
      margin-right: 16px;
    }
    div {
      margin-right: 
      h4 {
        font-size: 16px;
      }
      p {
        font-size: 12px;
      }
    }
    button {
      position: absolute;
      right: 0;
    }
  }
  `}
`;

const hashtags = ["라스트네오", "나를", "담은", "캐릭터", "mbti", "가치관"];
const snsTitle = "나를 담은 네오 캐릭터는? 보러가기 → ";
const snsDesc =
  "'MBTI'와 '나를 잘 설명하는 단어'로 표현된 내 캐릭터를 보러 와!";

function Communication({ store }) {
  const kakaoDesc = `${store.value_items.description} ${store.mbti} ${store.mbti_name}`;
  const kakaoData = {
    img: store.neo_image,
    home_address: store.home_address,
    desc: kakaoDesc,
  };
  const store_neohome = useSelector((store) => store.neohome);
  const [modal, setModal] = useState(false);
  console.log(store);
  useEffect(() => {
    if (modal) {
      let timer = setTimeout(() => {
        setModal(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [modal]);

  return (
    <SectionContainer color="pink" communication>
      <p>소통하기</p>
      <h3>
        네오 집을 친구에게 <span>공유</span>하고
        <br />
        다른 네오들과 <span>소통</span>해보세요
      </h3>
      <ShareBtns>
        <div>
          <KakaoShareButton props={kakaoData} />
          <FacebookShareButton
            url={store.home_address}
            quote={snsDesc}
            hashtag={`#${hashtags[0]}`}
          >
            <img src={images.fb} />
          </FacebookShareButton>
          <TwitterShareButton
            url={store.home_address}
            title={snsTitle}
            hashtags={hashtags}
          >
            <img src={images.tw} />
          </TwitterShareButton>
        </div>
        <p>공유하기</p>
      </ShareBtns>
      <CopyDiscode>
        <div className="copy">
          <img className="copy-discode-img" src={images.pinkhome} />
          <div>
            <h4>{`lastneo.io/${store_neohome.nickname}`}</h4>
            <p>친구를 집으로 초대 해보세요!</p>
          </div>
          <CopyToClipboard text={store.home_address}>
            <SmallPinkBtn
              onClick={() => {
                setTimeout(() => {
                  setModal(true);
                }, 500);
              }}
            >
              복사하기
            </SmallPinkBtn>
          </CopyToClipboard>
          <MsgModal show={modal} share left mobile />
        </div>
        <div className="discode">
          <img className="copy-discode-img" src={images.pinkbubble} />
          <div>
            <h4>디스코드방</h4>
            <p>나와 비슷한 네오들과 소통해보세요!</p>
          </div>
          <SmallPinkBtn>둘러보기</SmallPinkBtn>
        </div>
      </CopyDiscode>
    </SectionContainer>
  );
}

export default Communication;
