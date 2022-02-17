/* eslint-disable */
import {
  GET_NICKNAME,
  GET_TAB,
  SET_NICKNAME,
  SET_TAB,
  SET_SCROLL,
  UNSET_SCROLL,
  SET_BIG5_ANSWERS,
} from "../_actions/types";

const initialState = {
  tab: "character",
  nickname: "",
  scroll: false,
  scroll_to: "",
  big5_answers: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_NICKNAME:
      return {
        ...state,
        nickname: action.payload,
      };
    case GET_NICKNAME:
      return {
        payload: state.nickname,
      };
    case SET_TAB:
      return {
        ...state,
        tab: action.payload,
      };
    case GET_TAB:
      return {
        payload: state.tab,
      };
    case SET_SCROLL:
      return {
        ...state,
        scroll: true,
        scroll_to: action.payload,
      };
    case UNSET_SCROLL:
      return {
        ...state,
        scroll: false,
      };
    case SET_BIG5_ANSWERS:
      return {
        ...state,
        big5_answers: action.payload,
      };
    default:
      return state;
  }
}
