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
    }
  }}

  &:hover {
    background-color: #c85100;
  }
`;

function Button({ buttonText, size }) {
  return <StyledButton size={size}>{buttonText}</StyledButton>;
}

export default Button;
