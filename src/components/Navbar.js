import user from "../assets/icons/User_01.png";
import styled, { css } from "styled-components";

const NavbarNavigation = styled.nav`
  position: fixed;
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

const NavbarLogo = styled.span`
  color: #fff;
  font-family: "Kalnia";
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ${(props) =>
    props.scrolled &&
    css`
      color: #424244;
    `};
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
`;

const NavbarUser = styled.img`
  ${(props) =>
    props.scrolled &&
    css`
      filter: invert(1);
    `};
`;

function Navbar({ scrolled }) {
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
        <NavbarItem>
          <NavbarUser src={user} scrolled={scrolled} />
        </NavbarItem>
      </NavbarItems>
    </NavbarNavigation>
  );
}

export default Navbar;