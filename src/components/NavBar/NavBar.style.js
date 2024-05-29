import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DARK_GRAY,
  DARK_GREEN,
  RED_ORANGE,
  WHITE_NEUTRAL,
} from "../../constants/color";

export const Title = styled.h1`
  color: ${WHITE_NEUTRAL};
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  vertical-align: middle;
  background: ${RED_ORANGE};
  color: white;
  max-height: 56px;
  padding: 8px 16px;
  position: relative;
`;

export const LinkNavStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${WHITE_NEUTRAL};
  padding: 8px 16px;
  margin: 0;
  border-radius: 4px;

  &:hover {
    background: ${DARK_GRAY};
    color: ${WHITE_NEUTRAL};
    border-radius: 0;
  }

  @media screen and (max-width: 820px) {
    color: ${DARK_GREEN};
  }
`;

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${WHITE_NEUTRAL};
  color: ${DARK_GREEN};
  width: 200px;
  position: absolute;
  top: 56px;
  right: 0;
  display: none;
  border-radius: 8px;

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  color: ${DARK_GRAY};
  width: 100%;
`;

export const LinkContainerDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media screen and (max-width: 820px) {
    display: none;
  }
`;

export const ButtonDropdown = styled.button`
  width: 40px;
  height: 40px;
  color: ${WHITE_NEUTRAL};
  background: none;
  display: none;
  padding: 0;
  margin: 0;
  border: none;

  &:hover {
    background: ${DARK_GREEN};
  }

  @media screen and (max-width: 820px) {
    display: block;
  }
`;

export const NewButton = styled(ButtonDropdown)`
  color: ${RED_ORANGE};
`; // exemplu de extindere a componentei
