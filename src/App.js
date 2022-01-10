import Header from "./components/header";
import Main from "./components/main";

import { Body, VideoA1 } from "./styles/StyledComponents";
import video from "./galery/a1_video.mp4";

const App = () => {
  return (
    <Body>
      {/* <VideoA1 src={video} autoPlay muted loop /> */}
      <Header />
      <Main />
    </Body>
  );
};

export default App;
