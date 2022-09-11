import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <header>
      <NavContainer>
        <NavContent>
          <li>
            <a href="#">
              <img src="/assets/logo.svg" alt="logo" />
            </a>
          </li>
          <li>
            <Products>
              <li>
                <a href="#">Model S</a>
              </li>
              <li>
                <a href="#">Model 3</a>
              </li>
              <li>
                <a href="#">Model X</a>
              </li>
              <li>
                <a href="#">Model Y</a>
              </li>
              <li>
                <a href="#">Solar Roof</a>
              </li>
              <li>
                <a href="#">Solar Panels</a>
              </li>
            </Products>
          </li>
          <li>
            <Help>
              <Details>
                <a href="#">Shop</a>
              </Details>
              <Details>
                <a href="#">Account</a>
              </Details>
              <Menu>
                <a href="#">Menu</a>
              </Menu>
            </Help>
          </li>
        </NavContent>
      </NavContainer>
    </header>
  );
}

export default Header;

const NavContainer = styled.nav`
  min-height: 60px;
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px 0 35px;
`;

const NavContent = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Products = styled.li`
  display: flex;
  gap: 30px;
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Help = styled.li`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const Details = styled.li`
  @media (max-width: 1080px) {
    display: none;
  }
`;

const Menu = styled.li`
  @media (max-width: 1080px) {
    background: rgba(0, 0, 0, 0.1);
    opacity: 0.9;
    color: black;
    padding: 7px 15px 7px 15px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
`;
