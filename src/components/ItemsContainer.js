import styled from "styled-components";
import { customMedia } from "../styles/GlobalStyle";
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.palette.palePink};
  color: ${(props) => props.theme.palette.darkGrey};
  padding: 32px 32px 16px 32px;
  border-radius: 24px;
  width: 640px;
  height: 634px;
  p.title {
    margin-bottom: 32px;
    font-size: 18px;
    font-weight: 500;
    span {
      color: ${(props) => props.theme.palette.pink};
    }
  }
  p {
    font-size: 18px;
  }
  ${customMedia.lessThan("mobile")`
  width: calc(100vw - 48px);
  height: calc((100vw - 48px) * 0.9908);
  padding: 24px 24px 12px 24px;
  p.title {
    font-size: 16px;
    margin-bottom: 24px;
  }
  `}
`;

export default ItemsContainer;
