import styled from "styled-components";

export const Paragraph = styled.p`
  border-bottom: none;
  margin-bottom: 30px;

  &:last-of-type {
    border-bottom: 1px solid #ddd; /* Aplica a linha no último parágrafo */
  }
`;
