import React from "react";
import styled from "styled-components";

const StyledInternsMenu = styled.li`
  color: var(--main-color);
  font-size: 3rem;
  border: 0.1rem solid #000;
  border-radius: 0.5rem;
  padding: 0.5rem 2rem;
  box-shadow: 0 2rem 5rem rgba(117, 154, 163, 0.7);
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-0.3rem);
  }
`;

const InternsMenu = ({ id, title, setSelected }) => {
  return (
    <StyledInternsMenu onClick={() => setSelected(id)}>
      {title}
    </StyledInternsMenu>
  );
};

export default InternsMenu;
