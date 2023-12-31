import { styled } from "styled-components";
import Colors from "../../colors/colors";

export const Container = styled.div`
  height: 100vh;
  background-color: #1a1a28;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  @media (max-width: 1336px) {
    height: 100%;
  }

  .table-whrap {
    margin-top: 30px;
    height: 600px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px 20px 0px 0px;

    display: flex;
    flex-direction: column;
    background-color: #fff;

    overflow-y: auto;
  }
  .table-hover {
    &:hover {
      cursor: pointer;
    }
  }
`;
