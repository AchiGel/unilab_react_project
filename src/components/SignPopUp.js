import styled from "styled-components";

const SignPopUpContainer = styled.div`
  position: fixed;
  top: 133px;
  right: 8%;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 267px;
`;

const SignPopUpButtons = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid #ff6700;
  text-align: left;
  color: #424244;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 400;
`;

function SignPopUp() {
  return (
    <SignPopUpContainer>
      <SignPopUpButtons>Sign in</SignPopUpButtons>
      <SignPopUpButtons>Sign in</SignPopUpButtons>
      <SignPopUpButtons>Sign in</SignPopUpButtons>
    </SignPopUpContainer>
  );
}

export default SignPopUp;
