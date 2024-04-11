import styled from "styled-components";
import fbIcon from "../assets/icons/fb.png";
import appleIcon from "../assets/icons/apple.png";
import googleIcon from "../assets/icons/google.png";
import gmailIcon from "../assets/icons/gmail.png";
import Button from "./Button";
import TermsModal from "./TermsModal";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignInPageOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  padding-top: 231px;
  padding-bottom: 156px;
`;

const SignInFormContainer = styled.div`
  max-width: 540px;
  background-color: white;
  padding: 50px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
`;

const SignInMediaButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(66, 66, 68, 0.7);
  margin-bottom: 20px;
`;

const SignInMediaButton = styled.button`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #424244;
  background: transparent;
`;

const SignInFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SignInFormLabelSpan = styled.span`
  color: rgba(66, 66, 68, 0.7);
  font-size: 16px;
  font-weight: 400;
  margin-left: 20px;
`;

const SignInFormInput = styled.input`
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

const TermsLink = styled.span`
  color: #c85100;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  margin-left: 20px;
  color: #f00;
  font-size: 16px;
  font-weight: 400;
`;

function SignInPage() {
  const icons = [fbIcon, appleIcon, googleIcon, gmailIcon];

  const [termsClicked, setTermsClicked] = useState(false);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    console.log(formData);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);
    localStorage.setItem("isLoggedIn", true);
  }, [formData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function closeModal() {
    setTermsClicked(false);
    document.body.classList.remove("modal-open");
  }

  const onSubmit = (data) => {
    setFormData(data);
    alert("Logged in successfully");
    navigate("/services");
  };

  const navigate = useNavigate();

  return (
    <SignInPageOverlay>
      {termsClicked && <TermsModal closeModal={closeModal} />}
      <SignInFormContainer>
        <SignInForm onSubmit={handleSubmit(onSubmit)}>
          <SignInFormLabel>
            <SignInFormLabelSpan>Email</SignInFormLabelSpan>
            <SignInFormInput
              {...register("email", {
                required: "Email is required",
                validate: (value) => {
                  if (!value.includes("@")) {
                    return "Email must include @";
                  }
                },
              })}
              type="email"
              placeholder="Enter your email address"
            />
          </SignInFormLabel>
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          <SignInFormLabel>
            <SignInFormLabelSpan>Password</SignInFormLabelSpan>
            <SignInFormInput
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </SignInFormLabel>
          <Button type="submit" size="sign" buttonText="Continue" />
        </SignInForm>
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
        <SignInMediaButtons>
          {icons.map((el, index) => (
            <SignInMediaButton key={index}>
              <img src={el} alt={el} />
            </SignInMediaButton>
          ))}
        </SignInMediaButtons>
        <TermsText>
          By signing in or creating an account, you agree with our
          <TermsLink
            onClick={() => {
              setTermsClicked(!termsClicked);
            }}
          >
            Terms & conditions
          </TermsLink>{" "}
          and
          <TermsLink
            onClick={() => {
              setTermsClicked(!termsClicked);
            }}
          >
            Privacy policy
          </TermsLink>
        </TermsText>
      </SignInFormContainer>
    </SignInPageOverlay>
  );
}

export default SignInPage;
