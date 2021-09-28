import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import styled from "styled-components";
import { Logo } from "../assets";

const StyledNav = styled(Nav)`
  .nav-link {
    color: var(--main-color) !important;
    font-weight: 400;
    font-size: 2.5rem;
    margin-inline-end: 3rem;
    position: relative;
  }

  .nav-link:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -1.5rem;
    transform: translateY(-50%);
    width: 0.2rem;
    height: 50%;
    background-color: var(--main-color);
    cursor: default;
  }
`;

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="py-0">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="py-0">
          <img src={Logo} alt="Incubator-logo" style={{ width: "120px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <StyledNav className="ms-auto">
            <StyledNav.Link href="/">Home</StyledNav.Link>
            <StyledNav.Link href="/#about">About US</StyledNav.Link>
            <StyledNav.Link href="/#contact">Contact US</StyledNav.Link>
            <StyledNav.Link href="/interns">Interns</StyledNav.Link>
          </StyledNav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
