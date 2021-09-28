import React from "react";
import { NavBar, Slider } from "../components";
import { InternsImg } from "../assets";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 75vh;
  /* scroll-margin-top: 7.5rem; */
`;

const Header = () => {
  const urlPath = window.location.pathname;
  const HeaderContent = () => {
    if (urlPath === "/interns") {
      return (
        <StyledHeader>
          <img className="d-block w-100 h-100" src={InternsImg} alt="intern" />
        </StyledHeader>
      );
    } else {
      return (
        <StyledHeader>
          <Slider />
        </StyledHeader>
      );
    }
  };

  return (
    <>
      <NavBar />
      <HeaderContent />
    </>
  );
};

export default Header;
