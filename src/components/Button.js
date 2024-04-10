import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  ${({ size }) => {
    if (size === "large") {
      return css`
        border: none;
        outline: none;
        cursor: pointer;
        color: white;
        padding: 30px 50px;
        background-color: #ff6700;
        border-radius: 50px;
        font-family: "Roboto";
        font-size: 32px;
        font-weight: 600;
        transition: all 0.2s ease;
      `;
    } else if (size === "medium") {
      return css`
        border: none;
        outline: none;
        cursor: pointer;
        color: white;
        padding: 20px 40px;
        background-color: #ff6700;
        border-radius: 20px;
        font-family: "Roboto";
        font-size: 24px;
        font-weight: 500;
        transition: all 0.2s ease;
      `;
    } else if (size === "small") {
      return css`
        border: none;
        outline: none;
        cursor: pointer;
        color: #424244;
        padding: 15px 30px;
        background-color: transparent;
        border-radius: 20px;
        font-family: "Roboto";
        font-size: 24px;
        font-weight: 500;
        transition: all 0.2s ease;
        &:focus {
          color: white;
          background-color: #ff6700;
        }
        &:active {
          color: white;
          background-color: #ff6700;
        }
      `;
    } else {
      return css`
        border: none;
        outline: none;
        cursor: pointer;
        color: white;
        padding: 10px;
        background-color: #ff6700;
        border-radius: 10px;
        font-family: "Roboto";
        font-size: 20px;
        font-weight: 400;
        transition: all 0.2s ease;
      `;
    }
  }}

  &:hover {
    background-color: #c85100;
  }
`;

function Button({ toRedirect, buttonText, size }) {
  return (
    <StyledButton size={size}>
      <NavLink to={toRedirect}>{buttonText}</NavLink>
    </StyledButton>
  );
}

export default Button;
