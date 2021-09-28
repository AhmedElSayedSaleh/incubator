import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { InternsMenu } from "../components";

import { InternBgImg, InternDemoImg } from "../assets";

import {
  allInterns,
  frontendInterns,
  backendInterns,
  fullstackInterns,
  designInterns,
} from "../data/internsDB";

const StyledInterns = styled.div`
  background-color: var(--sixth-color);

  .intern-card-img {
    width: 25rem;
    height: 25rem;
    background-image: url(${InternBgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .intern-card-desc {
    h3 {
      color: var(--main-color);
      font-size: 2.5rem;
      font-weight: 700;
      text-transform: capitalize;
    }

    h5 {
      color: var(--third-color);
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: capitalize;
    }
  }
`;

const Interns = () => {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);

  const menu = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "frontend",
      title: "Front End",
    },
    {
      id: "backend",
      title: "Back End",
    },
    {
      id: "fullstack",
      title: "Full Stack",
    },
    {
      id: "ui/ux",
      title: "UI/UX",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allInterns);
        break;
      case "frontend":
        setData(frontendInterns);
        break;
      case "backend":
        setData(backendInterns);
        break;
      case "fullstack":
        setData(fullstackInterns);
        break;
      case "ui/ux":
        setData(designInterns);
        break;
      default:
        setData(allInterns);
        break;
    }
  }, [selected]);

  return (
    <>
      <Container fluid>
        <Row>
          <ul className="d-flex justify-content-around align-items-center mt-3">
            {menu.map((el) => (
              <InternsMenu
                key={el.id}
                title={el.title}
                setSelected={setSelected}
                id={el.id}
              />
            ))}
          </ul>
        </Row>
      </Container>

      <StyledInterns>
        <Container>
          <Row>
            {data.map((el) => (
              <Col
                md={6}
                lg={4}
                key={el.id}
                className="d-flex justify-content-center flex-column text-center py-5"
              >
                <div className="intern-card-img">
                  <a href={el.url} target="_blank" rel="noopener noreferrer">
                    <img
                      className="w-50"
                      src={el.img === "" ? InternDemoImg : el.img}
                      alt=""
                    />
                  </a>
                </div>
                <div className="intern-card-desc">
                  <h3>{el.name}</h3>
                  <h5>{el.title}</h5>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </StyledInterns>
    </>
  );
};

export default Interns;
