import styled from "styled-components";
import fbIcon from "../assets/icons/fb.png";
import appleIcon from "../assets/icons/apple.png";
import googleIcon from "../assets/icons/google.png";
import gmailIcon from "../assets/icons/gmail.png";
import Button from "./Button";

const SignUpPageOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  padding-top: 136px;
  padding-bottom: 55px;
`;

const SignUpFormContainer = styled.div`
  max-width: 540px;
  background-color: white;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
`;

const SignUpMediaButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(66, 66, 68, 0.7);
  margin-bottom: 20px;
`;

const SignUpMediaButton = styled.button`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #424244;
  background: transparent;
`;

const SignUpFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SignUpFormLabelSpan = styled.span`
  color: rgba(66, 66, 68, 0.7);
  font-size: 16px;
  font-weight: 400;
  margin-left: 20px;
`;

const SignUpFormInput = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ff6700;
  color: #424244;
  font-size: 20px;
  font-weight: 400;
`;

const BorderDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  color: rgba(66, 66, 68, 0.7);
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 20px;
`;

const TermsText = styled.span`
  text-align: center;
  color: rgba(66, 66, 68, 0.7);
  font-size: 16px;
  font-weight: 400;
`;

function SignUpPage() {
  const icons = [fbIcon, appleIcon, googleIcon, gmailIcon];
  return (
    <SignUpPageOverlay>
      <SignUpFormContainer>
        <SignUpForm>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>First name</SignUpFormLabelSpan>
            <SignUpFormInput type="text" placeholder="Enter your first name" />
          </SignUpFormLabel>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>Last name</SignUpFormLabelSpan>
            <SignUpFormInput type="text" placeholder="Enter your last name" />
          </SignUpFormLabel>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>Email</SignUpFormLabelSpan>
            <SignUpFormInput
              type="email"
              placeholder="Enter your email address"
            />
          </SignUpFormLabel>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>Password</SignUpFormLabelSpan>
            <SignUpFormInput
              type="password"
              placeholder="Enter your password"
            />
          </SignUpFormLabel>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>Confirm the password</SignUpFormLabelSpan>
            <SignUpFormInput
              type="password"
              placeholder="Re-enter your password"
            />
          </SignUpFormLabel>
          <Button buttonText="Continue" size="sign" />
        </SignUpForm>
        <BorderDiv>
          <span
            style={{
              height: "1px",
              backgroundColor: "rgba(66, 66, 68, 0.70)",
              width: "122px",
            }}
          ></span>
          Or continue with
          <span
            style={{
              height: "1px",
              backgroundColor: "rgba(66, 66, 68, 0.70)",
              width: "122px",
            }}
          ></span>
        </BorderDiv>
        <SignUpMediaButtons>
          {icons.map((el, index) => (
            <SignUpMediaButton key={index}>
              <img src={el} alt={el} />
            </SignUpMediaButton>
          ))}
        </SignUpMediaButtons>
        <TermsText>
          By signing in or creating an account, you agree with our Terms &
          conditions and Privacy policy
        </TermsText>
      </SignUpFormContainer>
    </SignUpPageOverlay>
  );
}

export default SignUpPage;
