import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

import { SliderImg } from "../assets";

const StyledCarousel = styled(Carousel)`
  height: 100%;
  .carousel-inner {
    height: 100%;
  }

  .carousel-indicators [data-bs-target] {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 2rem;
    margin-left: 2rem;
  }
`;

const Slider = () => {
  return (
    <StyledCarousel controls={false} id="home">
      <StyledCarousel.Item>
        <img className="d-block w-100" src={SliderImg} alt="First slide" />
      </StyledCarousel.Item>
      <StyledCarousel.Item>
        <img className="d-block w-100" src={SliderImg} alt="Second slide" />
      </StyledCarousel.Item>
      <StyledCarousel.Item>
        <img className="d-block w-100" src={SliderImg} alt="Third slide" />
      </StyledCarousel.Item>
      <StyledCarousel.Item>
        <img className="d-block w-100" src={SliderImg} alt="fourth slide" />
      </StyledCarousel.Item>
      <StyledCarousel.Item>
        <img className="d-block w-100" src={SliderImg} alt="fifth slide" />
      </StyledCarousel.Item>
      <StyledCarousel.Item>
        <img className="d-block w-100" src={SliderImg} alt="fifth slide" />
      </StyledCarousel.Item>
    </StyledCarousel>
  );
};

export default Slider;
