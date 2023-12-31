import styled from "styled-components";
import Colors from "../colors/colors";

export const DefaultButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  gap: 8px;
  width: 360px;
  height: 56px;
  background: ${Colors.green};
  border-radius: 20px;
  border: none;
  color: ${Colors.black};
  font-size: 16px;
  font-weight: bold;
  margin-top: 23px;
  cursor: pointer;
  &:hover {
    background-color: #01f884;
    box-shadow: 3px 5px 7px 5px #2ecc71;
    transition: ease-in 0.5s;
  }
`;
export const SideBarButton = styled.div`
  width: 100%;
  display: flex;
  border-radius: 10px;
  margin-top: 22px;
  align-items: center;
  text-align: center;
  background-color: ${(props) => (props.active ? " #27ae60" : "#34495e")};
  font-size: 22px;

  #icon {
    height: 25px;
    margin-left: 4px;
    color: ${(props) => (props.active ? "#34495e" : "#27ae60")};
  }

  @media (max-width: 1500px) {
    height: 59px;
    p {
      align-items: center;
    }
  }

  P {
    display: flex;
    color: ${Colors.fonte};
    height: 100%;
    font-weight: bold;
    margin-left: 12px;
    margin-top: 10px;
  }
  &:hover {
    background-color: #27ae60;
    border-left: 7px solid ${Colors.green};
    cursor: pointer;

    #icon {
      color: #466aa9;
    }
  }
`;

export const BalanceButton = styled.div`
  margin-bottom: 20px;
  /* CSS */
  .button-74 {
    background-color: ${Colors.green};
    border: 2px solid #422800;
    border-radius: 30px;
    box-shadow: #422800 4px 4px 0 0;
    color: #13131f;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    font-size: 18px;
    padding: 0 18px;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-74:hover {
    background-color: #27ae60;
  }

  .button-74:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
    .button-74 {
      min-width: 120px;
      padding: 0 25px;
    }
  }
`;
export const WatchButton = styled.div`
  /* CSS */
  .button-82-pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-82-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  .button-82-edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      to left,
      hsl(340deg 100% 16%) 0%,
      hsl(340deg 100% 32%) 8%,
      hsl(340deg 100% 32%) 92%,
      hsl(340deg 100% 16%) 100%
    );
  }

  .button-82-front {
    display: block;
    position: relative;
    padding: 12px 27px;
    border-radius: 12px;
    font-size: 1.1rem;
    color: white;
    background: hsl(345deg 100% 47%);
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
  }

  @media (min-width: 768px) {
    .button-82-front {
      font-size: 1.25rem;
      padding: 12px 42px;
    }
  }

  .button-82-pushable:hover {
    filter: brightness(110%);
    -webkit-filter: brightness(110%);
  }

  .button-82-pushable:hover .button-82-front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .button-82-pushable:active .button-82-front {
    transform: translateY(-2px);
    transition: transform 34ms;
  }

  .button-82-pushable:hover .button-82-shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
  }

  .button-82-pushable:active .button-82-shadow {
    transform: translateY(1px);
    transition: transform 34ms;
  }

  .button-82-pushable:focus:not(:focus-visible) {
    outline: none;
  }
`;
