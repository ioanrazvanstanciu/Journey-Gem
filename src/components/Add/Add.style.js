import styled , {createGlobalStyle , css} from "styled-components";
import { DARK_GREEN, LIGHT_GRAY, LIGHT_GREEN, PALE_YELLOW, WHITE_NEUTRAL } from "../../constants/color";
import { ShieldExclamation } from "react-bootstrap-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


export const StyledDatePicker = styled(DatePicker)`
  height: 30px;
  border-radius: 10px;
  padding: 10px;
  border: none;
  border-bottom: 2px solid black;
  background-color: ${PALE_YELLOW};
  position: relative;
  
  &:hover {
    border: 2px solid ${LIGHT_GREEN};
  }

  &:focus-within {
    background-color: ${WHITE_NEUTRAL};
    border: 2px solid ${DARK_GREEN};
  }
`;

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${WHITE_NEUTRAL};
  }
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  gap: 40px;
`;

export const AddLabel = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
  color: ${DARK_GREEN};
  pointer-events: none;

  ${({ isfocused, hasvalue }) =>
    (isfocused || hasvalue) &&
    css`
      top: -12px;
      font-size: 19px;
      color: ${DARK_GREEN};
    `}
`;

export const AddInput = styled.input`
  width: 50%;
  height: 30px;
  border-radius: 10px;
  padding: 10px 10px 10px 35px;
  border: none;
  border-bottom: 2px solid black;
  background-color: ${PALE_YELLOW};
  position: relative;

  &:hover {
    border: 2px solid ${LIGHT_GREEN};
  }

  &:focus {
    background-color: ${WHITE_NEUTRAL};
    border: 2px solid ${DARK_GREEN};
  }

  &:focus + ${AddLabel}, &:not(:placeholder-shown) + ${AddLabel} {
    top: -15px;
    font-size: 19px;
    color: ${DARK_GREEN};
  }
`;

export const AddButton = styled.button`
  margin: 25px 0;
  width: 110px;
  height: 40px;
  border-radius: 10px;
  cursor: pointer;
  border: 2px solid ${DARK_GREEN};
  background-color: ${WHITE_NEUTRAL};
  color: ${DARK_GREEN};
  font-size: 17px;
  font-weight: 700;

  &:hover {
    background-color: ${DARK_GREEN};
    color: ${WHITE_NEUTRAL};
  }

  &:active {
    background-color: ${PALE_YELLOW};
    color: black;
    border: 2px solid ${LIGHT_GREEN};
  }
`;

export const ErrorP = styled.p`
  color: red;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

export const ExclamationErrorIcon = styled(ShieldExclamation)`
  width: 25px;
  height: 25px;
  margin: 0 10px;
`;