import user from "../assets/icons/User_01.png";
import styled from "styled-components";

const NavbarNavigation = styled.nav`
  position: fixed;
  top: 0;
  height: 105px;
  width: 84%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLogo = styled.span`
  color: #fff;
  font-family: "Kalnia";
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const NavbarItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  color: #fff;
`;

const NavbarItem = styled.li`
  font-size: 28px;
  font-weight: 400;
  letter-spacing: 1.4px;
`;

function Navbar() {
  return (
    <NavbarNavigation>
      <div className="navbar-logo">
        <NavbarLogo>ExploreEra</NavbarLogo>
      </div>
      <NavbarItems>
        <NavbarItem>Home</NavbarItem>
        <NavbarItem>About us</NavbarItem>
        <NavbarItem>Blogs</NavbarItem>
        <NavbarItem>Our services</NavbarItem>
        <NavbarItem>Our offers</NavbarItem>
        <NavbarItem>
          <img src={user} alt="userIcon" />
        </NavbarItem>
      </NavbarItems>
    </NavbarNavigation>
  );
}

export default Navbar;
