import styled from "styled-components";
import { CardImg } from "../Packages/PackageCard/PackageCard.style";

export const PackageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 48px 24px;
  /* padding: 64px; */
  height: 100%;
  min-height: 100vh;
  gap: 16px;
  flex-wrap: wrap;
  flex-direction: column;
  color: black;
  margin-top: 164px;
  background-color: yellow;
`;

export const PackageImgSingle = styled(CardImg)`
  max-height: 100%;
  width: auto;
`;
