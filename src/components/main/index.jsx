import { useSelectMenu } from "../../providers/SelectMenu";

import AboutUs from "../modals/aboutUs";
import Contact from "../modals/contact";
import GraduationArea from "../modals/graduationArea";
import Promotion from "../modals/promotion";

const Main = () => {
  const { selectMenu } = useSelectMenu();

  return (
    <div>
      {selectMenu.aboutUs && <AboutUs />}
      {selectMenu.graduationArea && <GraduationArea />}
      {selectMenu.promotion && <Promotion />}
      {selectMenu.contact && <Contact />}
    </div>
  );
};

export default Main;
