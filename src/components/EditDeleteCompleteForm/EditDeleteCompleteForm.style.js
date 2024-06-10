import styled from "styled-components";

export const AddContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 48px 0;
  padding: 64px;
  height: 100%;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
`;

export const AddLabel = styled.p`
  font-size: large;
  max-width: 400px;
  margin: 12px auto 0;
  text-transform: uppercase;
  color: orange;
`;

export const AddInput = styled.input`
  max-width: 400px;
  width: 100%;
  height: 24px;
  margin: 12px auto;
`;

export const AddButton = styled.button`
  max-width: 300px;
  width: 100%;
  height: 24px;
  margin: 12px auto;
  border-radius: 4px;
  border: 1px solid #000;
  cursor: pointer;

  &:hover {
    background: gray;
    color: white;
  }
`;

export const ErrorP = styled.p`
  color: red;
  width: 100%;
`;
