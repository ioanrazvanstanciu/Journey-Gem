import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  WHITE_NEUTRAL,
  DARK_GREEN,
  LIGHT_GREEN,
  DARK_GRAY,
  LIGHT_GRAY,
  BEIGE,
  LIGHT_BLUE,
  PALE_YELLOW,
  DARK_BLUE,
} from "/src/constants/color.js";

export const Card = styled.div`
  background-color: ${BEIGE};
  color: ${DARK_BLUE};
  height: 300px;
  width: 900px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const PrimaLinie = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 180px;
  width: 280px;
  overflow: hidden;
  border-radius: 10px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const DetaliiPrimaLinie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`;

export const OrasSiTara = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const DetaliiGrupate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  font-size: 15px;
  gap: 10px;
`;

export const ZileConcediu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const NrPers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const ModTransport = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

export const ADouaLinie = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

export const SosirePlecare = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  margin-left: 5.5rem;
`;

export const AnteteSosirePlecare = styled.div`
  font-size: 23px;
  font-weight: 700;
`;

export const PretMoneda = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: 20px;
`;

export const PretMonedaValori = styled.div`
  color: ${DARK_GRAY};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: 25px;
`;

export const CardImgContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
`;

export const CardImg = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;

export const CardInfoContainer = styled.div`
  background-color: ${LIGHT_GRAY};
  padding: 8px;
  margin-top: 16px;
  height: 250px;
`;

export const Title = styled.h1`
  margin: 16px 0;
  color: ${DARK_BLUE};
  font-size: 24px;
  font-weight: 700;
`;

export const Text = styled.p`
  margin: 0;
`;

export const UperText = styled.span`
  text-transform: uppercase;
`;

export const EditDeleteButton = styled(Link)`
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  border: 2px solid ${DARK_BLUE};
  background-color: ${WHITE_NEUTRAL};
  color: ${DARK_BLUE};
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${DARK_BLUE};
    color: ${WHITE_NEUTRAL};
  }
`;
