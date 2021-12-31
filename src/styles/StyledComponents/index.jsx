import styled from "styled-components";

export const Body = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 5vh;

  z-index: 0;
`;

export const VideoA1 = styled.video`
  /* position: fixed;
  overflow: hidden;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  z-index: -1; */

  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
`;
