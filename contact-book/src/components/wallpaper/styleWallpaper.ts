import { styled } from "styled-components";

export const DivWallpaper = styled.div`
  z-index: -1;
  display: flex;
  position: fixed;
  height: 100vh;
  width: 100vw;

  top: 0;
  img {
    height: 100%;
    width: 100%;
  }
`;
