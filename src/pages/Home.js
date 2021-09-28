import React from "react";
import styled from "styled-components";
import { About, Contact } from "../components";

const WelcomeDiv = styled.div`
  background-color: var(--third-color);
  padding-top: 2rem;
`;

const WelcomeTitle = styled.h2`
  text-transform: uppercase;
  color: var(--main-color);
  font-size: 6rem;
  font-weight: 700;
  letter-spacing: 1.5rem;
`;

const WelcomeParagraph = styled.p`
  color: var(--second-color);
  font-size: 3rem;
  width: 70%;
  margin: auto;
`;

const Home = () => {
  return (
    <>
      <WelcomeDiv className="text-center">
        <WelcomeTitle>welcome</WelcomeTitle>
        <WelcomeParagraph>
          we love working with both local and national companies. It is our
          mission to provide refreshing
        </WelcomeParagraph>
      </WelcomeDiv>

      <About />
      <Contact />
    </>
  );
};

export default Home;
