import Navbar from "./Navbar";
import styled from "styled-components";
import backgroundImg from "../assets/desktop_images/18b0e57c5f6c838c052271193834fa9e.png";
import Button from "./Button";

const HeaderContainer = styled.header`
  background-image: url(${backgroundImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  margin-inline: -10.4%;
  padding-inline: 8.8%;
`;

const HeaderOverlay = styled.div`
  min-height: 100vh;
  margin-inline: -8.8%;
  padding-inline: 8.8%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.35) 13.3%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.05) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HeaderOffer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
`;

const Heading3 = styled.h3`
  font-size: 40px;
  font-weight: 500;
`;

const Heading2 = styled.h2`
  font-size: 64px;
  font-weight: 600;
  letter-spacing: 6.4px;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderOverlay>
        <Navbar />
        <HeaderOffer>
          <Heading3>Visit Mountains In</Heading3>
          <Heading2>ITALY</Heading2>
          <Button buttonText="See offer" size="medium" />
        </HeaderOffer>
      </HeaderOverlay>
    </HeaderContainer>
  );
}

export default Header;
