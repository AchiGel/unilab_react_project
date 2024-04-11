import { NavLink, useLocation } from "react-router-dom";
import user from "../assets/icons/User_01.png";
import styled, { css } from "styled-components";
import burger from "../assets/icons/Hamburger_LG.png";
import burgerClose from "../assets/icons/Close_LG.png";
import { useState } from "react";

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
  @media screen and (max-width: 1230px) {
    font-size: 40px;
  }
  @media screen and (max-width: 991px) {
    font-size: 28px;
  }
`;

const NavbarItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 2em;
  color: #fff;
  margin-left: 40px;

  @media screen and (max-width: 1324px) {
    gap: 1em;
  }

  @media screen and (max-width: 991px) {
    display: none;
  }

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
  @media screen and (max-width: 1230px) {
    font-size: 20px;
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

const BurgerMenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: none;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 991px) {
    display: block;
  }
`;

const BurgerMenuBar = styled.div`
  position: fixed;
  right: 40px;
  top: 10px;
  padding: 20px 60px 20px 48px;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-start;
`;

const BurgerMenuClose = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;

const BurgerMenuBarList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BurgerMenuBarListItem = styled.li`
  color: #424244;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 1px;
`;

function Navbar({ scrolled, openSignPopUp }) {
  const location = useLocation();
  const [burgerClicked, setBurgerClicked] = useState(false);

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
          <BurgerMenuButton
            onClick={() => {
              setBurgerClicked(true);
            }}
          >
            <img src={burger} alt="icon" />
          </BurgerMenuButton>
          {burgerClicked ? (
            <BurgerMenuBar>
              <BurgerMenuClose
                onClick={() => {
                  setBurgerClicked(false);
                }}
              >
                <img src={burgerClose} alt="icon" />
              </BurgerMenuClose>
              <BurgerMenuBarList>
                <BurgerMenuBarListItem>
                  <NavLink to="/sign-in">Sign in</NavLink>
                </BurgerMenuBarListItem>
                <BurgerMenuBarListItem>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </BurgerMenuBarListItem>
                <hr />
                <BurgerMenuBarListItem>
                  <NavLink to="/">Home</NavLink>
                </BurgerMenuBarListItem>
                <BurgerMenuBarListItem>About Us</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Blogs</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Our Services</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Our Offers</BurgerMenuBarListItem>
              </BurgerMenuBarList>
            </BurgerMenuBar>
          ) : null}
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
          <BurgerMenuButton
            onClick={() => {
              setBurgerClicked(true);
            }}
          >
            <img src={burger} alt="icon" />
          </BurgerMenuButton>
          {burgerClicked ? (
            <BurgerMenuBar>
              <BurgerMenuClose
                onClick={() => {
                  setBurgerClicked(false);
                }}
              >
                <img src={burgerClose} alt="icon" />
              </BurgerMenuClose>
              <BurgerMenuBarList>
                <BurgerMenuBarListItem>
                  <NavLink to="/sign-in">Sign in</NavLink>
                </BurgerMenuBarListItem>
                <BurgerMenuBarListItem>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </BurgerMenuBarListItem>
                <hr />
                <BurgerMenuBarListItem>
                  <NavLink to="/">Home</NavLink>
                </BurgerMenuBarListItem>
                <BurgerMenuBarListItem>About Us</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Blogs</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Our Services</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Our Offers</BurgerMenuBarListItem>
              </BurgerMenuBarList>
            </BurgerMenuBar>
          ) : null}
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
          <BurgerMenuButton
            onClick={() => {
              setBurgerClicked(true);
            }}
          >
            <img src={burger} alt="icon" />
          </BurgerMenuButton>
          {burgerClicked ? (
            <BurgerMenuBar>
              <BurgerMenuClose
                onClick={() => {
                  setBurgerClicked(false);
                }}
              >
                <img src={burgerClose} alt="icon" />
              </BurgerMenuClose>
              <BurgerMenuBarList>
                <BurgerMenuBarListItem>
                  <NavLink to="/sign-in">Sign in</NavLink>
                </BurgerMenuBarListItem>
                <BurgerMenuBarListItem>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </BurgerMenuBarListItem>
                <hr />
                <BurgerMenuBarListItem>
                  <NavLink to="/">Home</NavLink>
                </BurgerMenuBarListItem>
                <BurgerMenuBarListItem>About Us</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Blogs</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Our Services</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Our Offers</BurgerMenuBarListItem>
              </BurgerMenuBarList>
            </BurgerMenuBar>
          ) : null}
        </DarkNavbar>
      )}
      {(location.pathname === "/services" ||
        location.pathname === "/services/Flights" ||
        location.pathname === "/services/Stays") && (
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
          <BurgerMenuButton
            onClick={() => {
              setBurgerClicked(true);
            }}
          >
            <img src={burger} alt="icon" />
          </BurgerMenuButton>
          {burgerClicked ? (
            <BurgerMenuBar>
              <BurgerMenuClose
                onClick={() => {
                  setBurgerClicked(false);
                }}
              >
                <img src={burgerClose} alt="icon" />
              </BurgerMenuClose>
              <BurgerMenuBarList>
                <BurgerMenuBarListItem>
                  <NavLink to="/sign-in">Sign in</NavLink>
                </BurgerMenuBarListItem>
                <BurgerMenuBarListItem>
                  <NavLink to="/sign-up">Sign Up</NavLink>
                </BurgerMenuBarListItem>
                <hr />
                <BurgerMenuBarListItem>
                  <NavLink to="/">Home</NavLink>
                </BurgerMenuBarListItem>
                <BurgerMenuBarListItem>About Us</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Blogs</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Our Services</BurgerMenuBarListItem>
                <BurgerMenuBarListItem>Our Offers</BurgerMenuBarListItem>
              </BurgerMenuBarList>
            </BurgerMenuBar>
          ) : null}
        </DarkNavbar>
      )}
    </NavbarNavigation>
  );
}

export default Navbar;
