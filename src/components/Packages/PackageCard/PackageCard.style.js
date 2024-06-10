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
} from "/src/constants/color.js";

export const Card = styled(Link)`
  background-color: ${WHITE_NEUTRAL};
  color: ${LIGHT_GREEN};
  height: 300px;
  width: 900px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  border: 2px solid ${LIGHT_GREEN};

  &:hover {
    background-color: ${LIGHT_GREEN};
    color: ${WHITE_NEUTRAL};
  }
`;

export const PrimaLinie = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  height: 180px;
  width: 280px;
  border-radius: 10px;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

export const DetaliiPrimaLinie = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const OrasSiTara = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

export const DetaliiGrupate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
  font-size: 15px;
  font-weight: 600;
  margin-top: 4rem;
`;

export const ZileConcediu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 15px;
  font-weight: 600;
`;

export const NrPers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 15px;
  font-weight: 600;
`;

export const ModTransport = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  font-size: 15px;
  font-weight: 600;
`;

export const ADouaLinie = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  font-weight: 600;
`;

export const PretMoneda = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: 20px;
  font-weight: 600;
`;

export const PretMonedaValori = styled.div`
  color: ${DARK_GRAY};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  font-size: 25px;
  font-weight: 600;
  border-bottom: dotted;
`;

export const CardImgContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
`;

export const CardImg = styled.img`
  padding: 0;
  width: 100%;
  max-height: 300px;
  height: 100%;
  border-radius: 4px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(250, 250, 250, 0.1);
  padding: 8px;
  margin-top: 16px;
  height: 250px;
`;

export const Title = styled.h1`
  margin: 16px 0;
  color: ${(props) => (props.isWhite ? white : white)};
`;

export const Text = styled.p`
  margin: 0 0 4px;
`;

export const UperText = styled.span`
  text-transform: uppercase;
  text-decoration: solid;
`;
