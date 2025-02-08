import styled from "styled-components";

export const ParagraphText = styled.p`
  border-bottom: none; /* Remove a linha de todos os parágrafos */

  &:last-of-type {
    border-bottom: 1px solid #000; /* Aplica a linha no último parágrafo */
  }
`;
