import styled from "styled-components";
import { keyframes } from "styled-components";

export const down = keyframes`
from {
    transform: translateY(-150px);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
export const up = keyframes`
from {
    transform: translateY(0);
    opacity: 1;
  }

  to {
    transform: translateY(-150px);
    opacity: 0;
  }
`;

export const Body = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const AppHeaderDown = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-top: 5vh;

  animation-name: ${down};
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  z-index: 0;
`;

export const AppHeaderUp = styled(AppHeaderDown)`
  animation-name: ${up};
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
