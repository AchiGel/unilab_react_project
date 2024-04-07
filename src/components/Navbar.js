import user from "../assets/icons/User_01.png";
import styled, { css } from "styled-components";

const NavbarNavigation = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  height: 105px;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  ${(props) =>
    props.scrolled &&
    css`
      width: 100%;
      padding-inline: 8%;
      background-color: #eae9e9;
    `};
`;

const NavbarLogo = styled.button`
  color: #fff;
  font-family: "Kalnia";
  font-size: 48px;
  font-weight: 500;
  border: none;
  outline: none;
  background-color: transparent;
  transition: all 0.2s ease;
  ${(props) =>
    props.scrolled &&
    css`
      color: #424244;
    `};
  &:hover {
    cursor: pointer;
    scale: 80%;
  }
`;

const NavbarItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  color: #fff;

  ${(props) =>
    props.scrolled &&
    css`
      color: #424244;
    `};
`;

const NavbarItem = styled.li`
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 1.4px;
  transition: all 0.2s ease;
  &:hover {
    cursor: pointer;
    scale: 80%;
  }
`;

const NavbarUser = styled.img`
  ${(props) =>
    props.scrolled &&
    css`
      filter: invert(1);
    `};
  &:hover {
    filter: invert(47%) sepia(60%) saturate(6885%) hue-rotate(16deg)
      brightness(91%) contrast(101%);
    cursor: pointer;
  }
`;

function Navbar({ scrolled, openSignPopUp }) {
  return (
    <NavbarNavigation scrolled={scrolled}>
      <div className="navbar-logo">
        <NavbarLogo scrolled={scrolled}>ExploreEra</NavbarLogo>
      </div>
      <NavbarItems scrolled={scrolled}>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>About us</NavbarItem>
        <NavbarItem>Blogs</NavbarItem>
        <NavbarItem>Our services</NavbarItem>
        <NavbarItem>Our offers</NavbarItem>
        <NavbarItem onClick={openSignPopUp}>
          <NavbarUser src={user} scrolled={scrolled} />
        </NavbarItem>
      </NavbarItems>
    </NavbarNavigation>
  );
}

export default Navbar;
