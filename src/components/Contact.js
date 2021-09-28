import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import styled from "styled-components";

const ContactUs = styled.div`
  background-color: var(--sixth-color);
  scroll-margin-top: 7.5rem;

  h2 {
    color: var(--main-color);
    font-size: 4.5rem;
    font-weight: 700;
    text-transform: capitalize;
  }
`;

const ContactForm = styled.form`
  width: 75%;
  padding-inline-start: 1rem;

  .form-control {
    background-color: transparent;
    border: none;
    border-bottom: 0.2rem solid var(--fifth-color);
    padding: 4.5rem 0 2rem !important;
    /* overflow-y: hidden; */
    font-size: 2.5rem;
    color: var(--fourth-color);
    box-shadow: none !important;

    &::focus {
      background-color: transparent;
    }
  }

  textarea {
    min-height: 10rem;
  }

  label {
    color: var(--white-color);
    font-size: 2.5rem;
    font-weight: 700;
  }
`;

const FormButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;

  button {
    background-color: var(--third-color);
    color: var(--main-color);
    font-size: 4rem;
    font-weight: 700;
    padding: 0rem 6rem;
    border: 0.3rem solid var(--main-color);
    border-radius: 2rem;
  }
`;

const ContactDetails = styled.div`
  width: 100%;
  padding-top: 4rem;

  h4 {
    width: 20%;
    color: var(--main-color);
    font-size: 3rem;
    font-weight: 700;
    position: relative;

    span {
      position: absolute;
      right: 0;
    }
  }

  a {
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 700;
    padding-inline-start: 2rem;
    line-height: 1.2;
  }
`;

const ContactMap = styled.div`
  iframe {
    width: 100%;
    height: 20rem;
    border-radius: 2rem;
  }
`;

const Contact = () => {
  return (
    <ContactUs id="contact">
      <Container fluid className="py-5">
        <Row>
          <Col className="ps-5">
            <h2>contact us</h2>
            <ContactForm>
              <FloatingLabel
                controlId="floatingInput"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="name" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Massage"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a massage here"
                />
              </FloatingLabel>

              <FormButton>
                <button>Send</button>
              </FormButton>
            </ContactForm>
          </Col>
          <Col>
            <h2 className="ps-3">more info :</h2>
            <ContactDetails>
              <div className="d-flex pb-3">
                <h4>
                  WebSite <span>:</span>{" "}
                </h4>
                <a
                  href="http://incubator-eg.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://incubator-eg.com/
                </a>
              </div>
              <div className="d-flex pb-3">
                <h4>
                  Phone <span>:</span>{" "}
                </h4>
                <a href="tel:+201110094423">01110094423</a>
              </div>
              <div className="d-flex pb-3">
                <h4>
                  Email <span>:</span>{" "}
                </h4>

                <a href="mailto:info@incubator-eg.com">info@incubator-eg.com</a>
              </div>

              <ContactMap>
                <iframe
                  title="Incubator co. location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.449985803648!2d31.43043231511459!3d30.023945681889852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583d6c92442a3b%3A0x7f85fdda8d8cfc18!2sIncubator!5e0!3m2!1sen!2seg!4v1632620836266!5m2!1sen!2seg"
                  loading="lazy"
                ></iframe>
              </ContactMap>
            </ContactDetails>
          </Col>
        </Row>
      </Container>
    </ContactUs>
  );
};

export default Contact;
