import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  max-width: 600px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin-top: 8px;
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

export const TextContainer = styled.div`
  margin-top: 16px;
`;

export const SubTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
`;
