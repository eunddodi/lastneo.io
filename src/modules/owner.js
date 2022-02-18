/* eslint-disable */
import axios from "axios";
import { REACT_APP_DB_HOST } from "../keys";

const OWNER_INFO_SUCCESS = "owner/OWNER_INFO_SUCCESS";
const OWNER_INFO_FAILURE = "owner/OWNER_INFO_FAILURE";
const SEND_BIG5_SUCCESS = "owner/SEND_BIG5_SUCCESS";
const EDIT_DESC_SUCCESS = "owner/EDIT_DESC_SUCCESS";
const CREATE_NFT_SUCCESS = "owner/CREATE_NFT_SUCCESS";
const CREATE_NFT_FAILURE = "owner/CREATE_NFT_FAILURE";

// 페이지 렌더링 시 서버로부터 정보 받아오기
export const getOwnerInfo = async (nickname) => {
  try {
    const options = {
      headers: { Authorization: `Token ${localStorage.getItem("token")}` },
    };
    const req = await axios.get(
      REACT_APP_DB_HOST + `/api/v1/neohomeowner/${nickname}/`,
      options
    );
    return {
      type: OWNER_INFO_SUCCESS,
      payload: req.data,
      // payload: {
      //   neo_room_image:
      //     "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/home/image/%EB%84%A4%EC%98%A4_%EC%BA%90%EB%A6%AD%ED%84%B0_%EB%B0%A9_%EC%B4%88%EB%A1%9D.png",
      //   mini_profile:
      //     "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/neoupperimage/412/wbuCS4E.jpg",
      //   home_address: "http://3.37.14.91/claire",
      //   mbti: "ENTP",
      //   mbti_name: "공룡",
      //   description: "나를 담는 단 하나의 방법 '네오'",
      //   neo_image:
      //     "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/neoimage/412/feNE2kU.png",
      //   value_items: {
      //     value_name: "박애",
      //     name: "하트",
      //     description: "박애를 위한 하트를 가진",
      //     item_image:
      //       "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/item/meta/%ED%95%98%ED%8A%B8",
      //   },
      //   items: [
      //     {
      //       item_name: "하트",
      //       item_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/item/meta/%ED%95%98%ED%8A%B8",
      //       created_at: "2022.02.09",
      //       today_received: false,
      //     },
      //     {
      //       item_name: "감성적인 비닐봉투",
      //       item_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/item/meta/%EA%B0%90%EC%84%B1%EC%A0%81%EC%9D%B8_%EB%B9%84%EB%8B%90%EB%B4%89%ED%88%AC",
      //       created_at: "2022.02.17",
      //       today_received: false,
      //     },
      //     {
      //       item_name: "행복한 긴팔",
      //       item_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/item/meta/%ED%96%89%EB%B3%B5%ED%95%9C_%EA%B8%B4%ED%8C%94",
      //       created_at: "2022.02.16",
      //       today_received: false,
      //     },
      //     {
      //       item_name: "도전적인 새싹",
      //       item_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/item/meta/%EB%8F%84%EC%A0%84%EC%A0%81%EC%9D%B8_%EC%83%88%EC%8B%B9",
      //       created_at: "2022.02.14",
      //       today_received: false,
      //     },
      //     {
      //       item_name: "도전적인 새싹",
      //       item_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/item/meta/%EB%8F%84%EC%A0%84%EC%A0%81%EC%9D%B8_%EC%83%88%EC%8B%B9",
      //       created_at: "2022.02.18",
      //       today_received: false,
      //     },
      //     {
      //       item_name: "귀여운 새싹",
      //       item_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/item/meta/%EB%8F%84%EC%A0%84%EC%A0%81%EC%9D%B8_%EC%83%88%EC%8B%B9",
      //       created_at: "2022.02.19",
      //       today_received: false,
      //     },
      //   ],
      //   nfts_info: [
      //     {
      //       nft_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/neoupperimage/412/CjhCmtY.jpg",
      //       created_at: "2022.02.11",
      //       today_received: false,
      //       opensea_link: null,
      //     },
      //     {
      //       nft_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/neoupperimage/412/bAcJ82e.jpg",
      //       created_at: "2022.02.14",
      //       today_received: false,
      //       opensea_link: null,
      //     },
      //     {
      //       nft_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/neoupperimage/412/p3KSLsi.jpg",
      //       created_at: "2022.02.14",
      //       today_received: false,
      //       opensea_link: null,
      //     },
      //     {
      //       nft_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/neoupperimage/412/WtqEcL9.jpg",
      //       created_at: "2022.02.14",
      //       today_received: false,
      //       opensea_link: null,
      //     },
      //     {
      //       nft_image:
      //         "https://lastneo-storages-dev.s3.ap-northeast-2.amazonaws.com/media/neoupperimage/412/wbuCS4E.jpg",
      //       created_at: "2022.02.18",
      //       today_received: true,
      //       opensea_link: null,
      //     },
      //   ],
      //   today_datetime: "2022.02.18",
      //   neo_questions: [
      //     {
      //       id: 72,
      //       section: "N",
      //       question: "종종 타인에게 열등감을 느낀다.",
      //     },
      //     {
      //       id: 74,
      //       section: "N",
      //       question: "나는 종종 긴장을 느끼고 초조하다.",
      //     },
      //     {
      //       id: 79,
      //       section: "N",
      //       question: "걱정이 많다.",
      //     },
      //     {
      //       id: 65,
      //       section: "N",
      //       question: "나는 걱정하는 사람이 아니다.",
      //     },
      //     {
      //       id: 67,
      //       section: "N",
      //       question: "인생의 좌절에도 끄떡 없다.",
      //     },
      //   ],
      //   neo_blocks: {
      //     num_block: 29,
      //     remain_block: 0,
      //   },
      //   is_done: false,
      //   is_weekend: false,
      //   neodata_infos: [
      //     "2022.02.09",
      //     "2022.02.09",
      //     "2022.02.09",
      //     "2022.02.09",
      //     "2022.02.10",
      //     "2022.02.10",
      //     "2022.02.10",
      //     "2022.02.10",
      //     "2022.02.10",
      //     "2022.02.10",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.14",
      //     "2022.02.16",
      //     "2022.02.16",
      //     "2022.02.16",
      //     "2022.02.16",
      //     "2022.02.16",
      //     "2022.02.16",
      //     "2022.02.16",
      //     "2022.02.16",
      //     "2022.02.16",
      //     "2022.02.17",
      //   ],
      // },
    };
  } catch (e) {
    return {
      type: OWNER_INFO_FAILURE,
      payload: e,
    };
  }
};

// 사용자가 작성한 big5 질문에 대한 응답을 서버에 전송
export const sendBig5 = async (dataTosubmit) => {
  try {
    const options = {
      headers: { Authorization: `Token ${localStorage.getItem("token")}` },
    };
    const req = await axios.post(
      REACT_APP_DB_HOST + "/api/v1/big5question/",
      dataTosubmit,
      options
    );
    return {
      type: SEND_BIG5_SUCCESS,
      payload: req.data,
    };
  } catch (e) {
    return {
      type: SEND_BIG5_FAILURE,
      payload: e,
    };
  }
};

// 사용자가 수정한 홈 description을 서버에 전송
export const sendHomeDesc = async (data) => {
  const body = { description: data.description, nickname: data.nickname };
  try {
    const options = {
      headers: { Authorization: `Token ${localStorage.getItem("token")}` },
    };
    const req = await axios.put(
      REACT_APP_DB_HOST + `/api/v1/homeintroduction/`,
      body,
      options
    );
    return {
      type: EDIT_DESC_SUCCESS,
      payload: data.description,
    };
  } catch (e) {
    return {
      type: EDIT_DESC_FAILURE,
      payload: e,
    };
  }
};

// nft 생성하는 요청을 서버에 전송
export const createNft = async (data) => {
  const body = {};
  try {
    const options = {
      headers: { Authorization: `Token ${localStorage.getItem("token")}` },
    };
    const req = await axios.post(
      REACT_APP_DB_HOST + `/api/v1/nftblock/`,
      body,
      options
    );
    return {
      type: CREATE_NFT_SUCCESS,
      payload: req.data,
    };
  } catch (e) {
    return {
      type: CREATE_NFT_FAILURE,
      payload: e,
    };
  }
};

export default function owner(state = {}, action) {
  switch (action.type) {
    case OWNER_INFO_SUCCESS:
      const data = action.payload;
      return data;
    case OWNER_INFO_FAILURE:
      return state;
    case SEND_BIG5_SUCCESS:
      return {
        ...state,
      };
    case EDIT_DESC_SUCCESS:
      return {
        ...state,
        description: action.payload,
      };
    default:
      return state;
  }
}
