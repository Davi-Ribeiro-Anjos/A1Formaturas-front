import { useEffect, useState } from "react";

import Main from "./components/main";
import HeaderUp from "./components/headerUp";
import HeaderDown from "./components/headerDown";

import { Body, VideoA1 } from "./styles/StyledComponents";
import { useSelectMenu } from "./providers/SelectMenu";

import video from "./galery/a1_video.mp4";

const App = () => {
  const { selectMenu } = useSelectMenu();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let isOpen = false;
    for (let value in selectMenu) {
      if (selectMenu[value] === true) {
        isOpen = true;
      }
    }
    setIsOpen(isOpen);
  }, [selectMenu]);

  return (
    <Body>
      <VideoA1 src={video} autoPlay muted loop />
      {isOpen ? <HeaderUp /> : <HeaderDown />}
      <Main />
    </Body>
  );
};

export default App;
