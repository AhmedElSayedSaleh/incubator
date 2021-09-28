import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { AboutImg1, AboutImg2 } from "../assets";

const AboutRowTop = styled.div`
  background-color: var(--fourth-color);
  padding-top: 3rem;
  padding-bottom: 5rem;
  scroll-margin-top: 7.5rem;
`;

const AboutDescTop = styled.div`
  h2 {
    color: var(--main-color);
    font-size: 4.5rem;
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
    padding-bottom: 2rem;
  }

  p {
    color: var(--second-color);
    font-size: 3rem;
    padding-top: 1rem;
    width: 80%;
  }
`;

const AboutImgTop = styled.div`
  width: 100%;
  height: 100%;
  border: 0.5rem solid var(--main-color);
  margin-top: 3rem;
  position: relative;

  img {
    position: absolute;
    top: -10%;
    left: -5%;
    z-index: 1;
  }
`;

const AboutRowBottom = styled.div`
  background-color: var(--fifth-color);
`;

const AboutDescBottom = styled.div`
  background-color: var(--white-color);
  color: var(--second-color);
  font-size: 3rem;
  padding: 2rem;
  position: relative;
  top: 50%;
  transform: translate(-7%, -50%);
  width: 107%;
`;

const About = () => {
  return (
    <>
      <AboutRowTop id="about">
        <Container fluid className="px-5">
          <Row>
            <Col lg={7}>
              <AboutDescTop>
                <h2>about us</h2>
                <p>
                  we love working with both local and national companies. It is
                  our mission to provide refreshing,{" "}
                </p>
                <p>
                  modern design so that our clients get the most saturation out
                  of their target markets.
                </p>
              </AboutDescTop>
            </Col>

            <Col lg={5}>
              <AboutImgTop>
                <img src={AboutImg1} alt="" className="w-100 h-100" />
              </AboutImgTop>
            </Col>
          </Row>
        </Container>
      </AboutRowTop>

      <AboutRowBottom>
        <Container fluid className="p-5">
          <Row>
            <Col>
              <img src={AboutImg2} alt="" className="w-100 h-100" />
            </Col>
            <Col>
              <AboutDescBottom>
                <p>
                  we love working with both local and national companies. It is
                  our mission to provide refreshing modern design so that our
                  clients get the most saturation out of their target markets.
                </p>
              </AboutDescBottom>
            </Col>
          </Row>
        </Container>
      </AboutRowBottom>
    </>
  );
};

export default About;
