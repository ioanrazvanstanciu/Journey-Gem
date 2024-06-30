import styled from "styled-components";

export const HomeContainer = styled.div``;

export const HomeImageBackground = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  object-position: 50%;
`;

export const HomeText = styled.div`
  font-weight: 700;
  font-size: 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;

  @media screen and (min-width: 350px) and (max-width: 700px) {
    font-weight: 700;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const HomeButtonsContainer = styled.div`
  margin-bottom: 4rem;
`;
