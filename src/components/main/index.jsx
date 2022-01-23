import { useSelectMenu } from "../../providers/SelectMenu";

import AboutUs from "../modals/aboutUs";
import Contact from "../modals/contact";
import GraduationArea from "../modals/graduationArea";
import Promotion from "../modals/promotion";
import Map from "../modals/map";

const Main = () => {
  const { selectMenu } = useSelectMenu();

  return (
    <div>
      {selectMenu.aboutUs && <AboutUs />}
      {selectMenu.map && <Map />}
      {selectMenu.graduationArea && <GraduationArea />}
      {selectMenu.promotion && <Promotion />}
      {selectMenu.contact && <Contact />}
    </div>
  );
};

export default Main;
