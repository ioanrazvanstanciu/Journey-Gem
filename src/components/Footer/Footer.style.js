import { DARK_GRAY } from "./../../constants/color";
import styled from "styled-components";

export const FooterContainer = styled.div`
  margin: 48px 0 0;
  padding: 16px 0;
  background: #0f0e0e;
  color: ${DARK_GRAY};
  height: 100%;
  min-height: 80px;
  width: 100%;
  gap: 16px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;