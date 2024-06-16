import styled from "styled-components";
import { WHITE_NEUTRAL, PALE_YELLOW, DARK_GREEN, LIGHT_GREEN} from "../../constants/color";
export const PackageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 48px 90px;
  padding: 64px;
  height: 100%;
  min-height: 100vh;
  gap: 16px;
  flex-wrap: wrap;
  color: black;
  font-weight: 700;
`;
export const SortingBarContainer = styled.div`
  margin: 0 9px;
  position: absolute;
  left: 0;
  top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 25%;
  height: 350px;
  background-color: ${PALE_YELLOW};
  border-radius: 7px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SortingBarInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${LIGHT_GREEN};
  background-color: ${WHITE_NEUTRAL};
  transition: border-color 0.3s ease-in-out; 
  
  &:focus {
    border-color: ${DARK_GREEN};
    outline: none;
  }
`;

export const SortingBarDropdown = styled.select`
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${LIGHT_GREEN};
  background-color: ${WHITE_NEUTRAL};
  appearance: none;
  transition: border-color 0.3s ease-in-out; 
  cursor: pointer;
  &:focus {
    border-color: ${DARK_GREEN};
    outline: none;
  }
`;
export const SortingBarDropdownContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
gap: 18px;
`
export const SortingBarDropdownItems = styled.option`
  padding: 10px;
  margin-right: 10px;
`;
export const NoMatchMessage = styled.p`
  font-size: 14px;
  color: #e74c3c;
  margin-top: 10px;
`;
export const ClearSortBarButton = styled.button`
  background-color: red ;
  color: ${WHITE_NEUTRAL};
  padding: 7px;
  width: 70px;
  border: 1px solid ${WHITE_NEUTRAL};
  cursor: pointer;
  border-radius: 9px;
  font-weight: 700;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out, border 0.3s ease-in-out;

  &:hover {
    background-color: ${WHITE_NEUTRAL};
    color: red;
    border: 1px solid red;
  }
`;
