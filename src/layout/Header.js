import React from "react";

import { NavBar, Slider } from "../components";
import { InternsImg } from "../assets";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const StyledHeader = styled.div`
  height: 75vh;
  /* scroll-margin-top: 7.5rem; */
`;

const Header = () => {
  const urlPath = window.location.pathname;
  if (urlPath === "/interns") {
    return (
      <>
        <NavBar />
        <StyledHeader>
          <img className="d-block w-100 h-100" src={InternsImg} alt="intern" />
        </StyledHeader>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <StyledHeader>
        <Slider />
      </StyledHeader>
    </>
  );
};

export default withRouter(Header);
