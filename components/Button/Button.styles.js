import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  font-size: 28px;
  border-radius: 5px;
  padding: 24px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  //if stretch is true take the full space horizontally
  ${(props) =>
    props.stretch &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.btnStyle === "black" &&
    css`
      background-color: black;
      color: white;
      font-weight: normal;

      &:hover {
        background-color: hsl(0, 0%, 20%);
      }

      &.loading {
        background-color: hsl(0, 0%, 20%);
      }
    `}
  ${(props) =>
    props.btnStyle === "yellow" &&
    css`
      background-color: var(--primary-yellow);
      color: black;
      font-weight: 600;

      &:hover {
        background-color: var(--primary-yellow-hover);
      }

      &.loading {
        background-color: var(--primary-yellow-hover);
      }

      &.loading::before {
        border-top-color: black !important;
        border-right-color: black !important;
      }
    `}

  &.loading > * {
    opacity: 0;
    pointer-events: none;
  }

  &.loading::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    width: 40px;
    height: 40px;

    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: white;
    border-right-color: white;
    animation: loading 0.3s linear infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
