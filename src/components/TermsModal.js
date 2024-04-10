import styled from "styled-components";
import Button from "./Button";

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(66, 66, 68, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalInner = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 60px;
  max-width: 932px;
  max-height: 80vh;
  overflow-y: auto;
  border-radius: 15px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TermsTitle = styled.h2`
  color: #424244;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
`;

const TermsText = styled.p`
  color: #424244;
  font-size: 18px;
  font-weight: 400;
`;

export default function TermsModal({ closeModal }) {
  function preventClosingOnClick(e) {
    e.stopPropagation();
  }
  return (
    <ModalOverlay onClick={closeModal}>
      <ModalInner onClick={preventClosingOnClick}>
        <TextBox>
          <TermsTitle>Terms and conditions</TermsTitle>
          <TermsText>
            Before you use our website or services, please carefully read the
            following Terms and Conditions. By accessing or using our platform,
            you agree to comply with and be bound by these terms. If you do not
            agree with any part of these terms, please do not use our services.
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect, use, and disclose information about you.
            By using our services, you consent to our privacy practices.
          </TermsText>
        </TextBox>
        <TextBox>
          <TermsTitle>Privacy policy</TermsTitle>
          <TermsText>
            We may collect personal information, such as your name, email
            address, and other details, when you register an account, make a
            purchase, or interact with our services. We also automatically
            collect certain information, such as IP addresses, browser type, and
            usage patterns, through cookies and similar technologies. Our
            website may contain links to third-party websites or services.
          </TermsText>
        </TextBox>
        <Button closeModal={closeModal} buttonText="I agree" size="terms" />
      </ModalInner>
    </ModalOverlay>
  );
}
