import { styled } from "styled-components";
import Colors from "../colors/colors";

export const Balance = styled.div`
  width: 90%;
  height: 90px;
  margin-top: 16px;
  border-radius: 15px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  background-color: #34495e;
  h1 {
    color: ${Colors.green};
  }

  @media (max-width: 1126px) {
    flex-direction: column;
    height: 250px;
    width: 400px;
  }

  .addCredit {
    margin-left: auto;
    height: 36px;
    display: flex;
    align-items: center;
    @media (max-width: 1126px) {
      flex-direction: column;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
    }
    span {
      font-family: sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #16a085;
      margin-right: 8px;
      @media (max-width: 1126px) {
        margin-top: 10px;
      }
    }
    .resultCredit {
      border-radius: 20px;
      height: 52px;
      padding: 6px;
      display: flex;
      align-items: center;
      .icon {
        color: ${Colors.green};
        user-select: none;
        width: 1em;
        height: 1em;
        display: inline-block;
        fill: currentColor;
        transition: fill 200ms;
        font-size: 1.5rem;
        margin-right: 10px;
      }
      @media (max-width: 1126px) {
        margin-top: 10px;
      }
    }
  }
  .NameUser {
    display: flex;
    height: 100%;
    margin-left: 30px;
    margin-right: 30px;
    p {
      color: #16a085;
      margin: auto;

      span {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        color: #f39c12;
        margin-right: 8px;
      }
    }
  }
`;

export const BalanceTitle = styled.h1`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: #4b4b4b;
  margin-left: 20px;
  margin-right: 60px;
  margin-left: 10px;

  @media (max-width: 1126px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
