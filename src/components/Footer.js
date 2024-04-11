import styled, { css } from "styled-components";
import insta from "../assets/icons/Vector.svg";
import fb from "../assets/icons/fb.svg";
import linkedIn from "../assets/icons/Li.svg";
import paperPlane from "../assets/icons/Paper_Plane.png";
import { NavLink } from "react-router-dom";

const FooterRow = styled.footer`
  padding-top: 40px;
  margin-inline: -10.7%;
  padding-inline: 8.8%;
  background-color: #eae9e9;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: auto auto;
    gap: 30px;
  }
  @media screen and (max-width: 560px) {
    display: grid;
    grid-template-columns: auto;
    gap: 30px;
    justify-content: center;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 282px;
`;

const FooterLogo = styled.button`
  color: #424244;
  font-family: "Kalnia";
  font-size: 48px;
  font-weight: 500;
  border: none;
  outline: none;
  background-color: transparent;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    scale: 80%;
  }
`;

const FooterLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FooterSpan = styled.span`
  ${({ size }) => {
    if (size === "medium") {
      return css`
        color: #424244;
        font-size: 32px;
        font-weight: 400;
      `;
    } else if (size === "small") {
      return css`
        color: #424244;
        font-size: 24px;
        font-weight: 400;
      `;
    }
  }}
`;

const FooterCR = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 40px;
  background-color: #eae9e9;
  margin-inline: -10.7%;
  padding-inline: 8.8%;
`;

const FooterLogos = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const FooterInput = styled.input`
  background-color: transparent;
  outline: none;
  border: 1px solid #424244;
  border-radius: 10px;
  padding: 10px;
`;

const FooterFormButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  background-image: url(${paperPlane});
  border: none;
  outline: none;
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  top: 50%;
  left: 70%;
  transform: translate(-50%, -50%);
`;

function Footer() {
  return (
    <>
      <FooterRow>
        <FooterColumn>
          <FooterLogo>ExploreEra</FooterLogo>
          <FooterSpan size={"small"}>
            Travel agency which helps you to plan your perfect holidays
          </FooterSpan>
          <FooterSpan size={"medium"}>Follow us</FooterSpan>
          <FooterLogos>
            <a href="https://instagram.com">
              <img src={insta} alt="instagram" />
            </a>
            <a href="https://facebook.com">
              <img src={fb} alt="facebook" />
            </a>
            <a href="https://linkedin.com">
              <img src={linkedIn} alt="linkedin" />
            </a>
          </FooterLogos>
        </FooterColumn>
        <FooterColumn>
          <FooterSpan size={"medium"}>Links</FooterSpan>
          <FooterLinksList>
            <li>
              <FooterSpan size={"small"}>
                <NavLink to="/">Home</NavLink>
              </FooterSpan>
            </li>
            <li>
              <FooterSpan size={"small"}>About us</FooterSpan>
            </li>
            <li>
              <FooterSpan size={"small"}>Blogs</FooterSpan>
            </li>
            <li>
              <FooterSpan size={"small"}>Our services</FooterSpan>
            </li>
            <li>
              <FooterSpan size={"small"}>Our offers</FooterSpan>
            </li>
          </FooterLinksList>
        </FooterColumn>
        <FooterColumn>
          <FooterSpan size={"medium"}>Contact us</FooterSpan>
          <FooterSpan size={"small"}>exploreera@gmail.com</FooterSpan>
          <FooterSpan size={"small"}>555111222</FooterSpan>
          <FooterSpan size={"medium"}>Subscribe news</FooterSpan>
          <form style={{ position: "relative" }}>
            <FooterInput type="email" placeholder="Email" />
            <FooterFormButton></FooterFormButton>
          </form>
        </FooterColumn>
      </FooterRow>
      <FooterCR>
        <FooterSpan size={"small"}>Copyright 2024</FooterSpan>
      </FooterCR>
    </>
  );
}

export default Footer;
