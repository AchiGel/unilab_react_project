import styled from "styled-components";
import fbIcon from "../assets/icons/fb.png";
import appleIcon from "../assets/icons/apple.png";
import googleIcon from "../assets/icons/google.png";
import gmailIcon from "../assets/icons/gmail.png";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import TermsModal from "./TermsModal";

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

const InputsFields = styled.input`
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ff6700;
  color: #424244;
  font-size: 20px;
  font-weight: 400;
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

const ErrorMessage = styled.span`
  margin-left: 20px;
  color: #f00;
  font-size: 16px;
  font-weight: 400;
`;

const TermsLink = styled.span`
  color: #c85100;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

function SignUpPage() {
  const icons = [fbIcon, appleIcon, googleIcon, gmailIcon];
  const [formData, setFormData] = useState({});
  const [termsClicked, setTermsClicked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    console.log(formData);
    localStorage.setItem("name", formData.name);
    localStorage.setItem("lastName", formData.lastName);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("password", formData.password);
    localStorage.setItem("isLoggedIn", true);
  }, [formData]);

  const onSubmit = (data) => {
    setFormData(data);
    alert("Signed Up successfully");
  };

  function closeModal() {
    setTermsClicked(false);
    document.body.classList.remove("modal-open");
  }

  return (
    <SignUpPageOverlay>
      {termsClicked && <TermsModal closeModal={closeModal} />}
      <SignUpFormContainer>
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>First name</SignUpFormLabelSpan>
            <InputsFields
              {...register("firstName", {
                required: "First name is required",
                validate: (value) => {
                  if (value.length <= 4) {
                    return "first name should be longer than 4 characters";
                  }
                },
              })}
              type="text"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <ErrorMessage>{errors.firstName.message}</ErrorMessage>
            )}
          </SignUpFormLabel>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>Last name</SignUpFormLabelSpan>
            <InputsFields
              {...register("lastName", {
                required: "Last name is required",
                validate: (value) => {
                  if (value.length <= 4) {
                    return "Last name should be longer than 4 characters";
                  }
                },
              })}
              type="text"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <ErrorMessage>{errors.lastName.message}</ErrorMessage>
            )}
          </SignUpFormLabel>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>Email</SignUpFormLabelSpan>
            <InputsFields
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
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </SignUpFormLabel>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>Password</SignUpFormLabelSpan>
            <InputsFields
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
          </SignUpFormLabel>
          <SignUpFormLabel>
            <SignUpFormLabelSpan>Confirm the password</SignUpFormLabelSpan>
            <InputsFields
              {...register("passwordConfirm", {
                required: "Password re-enter is required",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
              type="password"
              placeholder="Re-enter your password"
            />
            {errors.passwordConfirm && (
              <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>
            )}
          </SignUpFormLabel>
          <Button type="submit" buttonText="Continue" size="sign" />
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
      </SignUpFormContainer>
    </SignUpPageOverlay>
  );
}

export default SignUpPage;
