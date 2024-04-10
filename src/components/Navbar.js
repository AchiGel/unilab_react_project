import { NavLink, useLocation } from "react-router-dom";
import user from "../assets/icons/User_01.png";
import styled, { css } from "styled-components";

const NavbarNavigation = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  height: 105px;
  width: 100%;
  margin-inline: -8.8%;
  padding-inline: 8%;
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

const DarkNavbar = styled.nav`
  position: fixed;
  z-index: 999;
  top: 0;
  height: 105px;
  width: 100%;
  margin-inline: -8.8%;
  padding-inline: 8%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  background-color: #eae9e9;
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
  const location = useLocation();

  return (
    <NavbarNavigation scrolled={scrolled}>
      {location.pathname === "/" && (
        <>
          <div className="navbar-logo">
            <NavLink to="/">
              <NavbarLogo scrolled={scrolled}>ExploreEra</NavbarLogo>
            </NavLink>
          </div>
          <NavbarItems scrolled={scrolled}>
            <NavbarItem>
              <NavLink to="/">Home</NavLink>
            </NavbarItem>
            <NavbarItem>About us</NavbarItem>
            <NavbarItem>Blogs</NavbarItem>
            <NavbarItem>
              <NavLink to="/services">Our services</NavLink>
            </NavbarItem>
            <NavbarItem>Our offers</NavbarItem>
            <NavbarItem onClick={openSignPopUp}>
              <NavbarUser src={user} scrolled={scrolled} />
            </NavbarItem>
          </NavbarItems>
        </>
      )}
      {location.pathname === "/sign-in" && (
        <DarkNavbar>
          <div className="navbar-logo">
            <NavLink to="/">
              <NavbarLogo style={{ color: "#424244" }}>ExploreEra</NavbarLogo>
            </NavLink>
          </div>
          <NavbarItems>
            <NavbarItem onClick={openSignPopUp}>
              <NavbarUser
                style={{
                  filter:
                    "invert(24%) sepia(8%) saturate(182%) hue-rotate(202deg) brightness(50%) contrast(93%)",
                }}
                src={user}
              />
            </NavbarItem>
          </NavbarItems>
        </DarkNavbar>
      )}
      {location.pathname === "/sign-up" && (
        <DarkNavbar>
          <div className="navbar-logo">
            <NavLink to="/">
              <NavbarLogo style={{ color: "#424244" }}>ExploreEra</NavbarLogo>
            </NavLink>
          </div>
          <NavbarItems>
            <NavbarItem onClick={openSignPopUp}>
              <NavbarUser
                style={{
                  filter:
                    "invert(24%) sepia(8%) saturate(182%) hue-rotate(202deg) brightness(50%) contrast(93%)",
                }}
                src={user}
              />
            </NavbarItem>
          </NavbarItems>
        </DarkNavbar>
      )}
      {(location.pathname === "/services" ||
        location.pathname === "/services/Flights") && (
        <DarkNavbar>
          <div className="navbar-logo">
            <NavLink to="/">
              <NavbarLogo style={{ color: "#424244" }} scrolled={scrolled}>
                ExploreEra
              </NavbarLogo>
            </NavLink>
          </div>
          <NavbarItems scrolled={scrolled}>
            <NavbarItem style={{ color: "#424244" }}>
              <NavLink to="/">Home</NavLink>
            </NavbarItem>
            <NavbarItem style={{ color: "#424244" }}>About us</NavbarItem>
            <NavbarItem style={{ color: "#424244" }}>Blogs</NavbarItem>
            <NavbarItem style={{ color: "#424244" }}>
              <NavLink to="/services">Our services</NavLink>
            </NavbarItem>
            <NavbarItem style={{ color: "#424244" }}>Our offers</NavbarItem>
            <NavbarItem onClick={openSignPopUp}>
              <NavbarUser
                style={{
                  filter:
                    "invert(24%) sepia(8%) saturate(182%) hue-rotate(202deg) brightness(50%) contrast(93%)",
                }}
                src={user}
                scrolled={scrolled}
              />
            </NavbarItem>
          </NavbarItems>
        </DarkNavbar>
      )}
    </NavbarNavigation>
  );
}

export default Navbar;
