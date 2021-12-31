import { useSelectMenu } from "../../providers/SelectMenu";

import AboutUs from "../modals/aboutUs";
import GraduationArea from "../modals/graduationArea";
import Promotion from "../modals/promotion";

const Main = () => {
  const { selectMenu } = useSelectMenu();

  return (
    <div>
      {selectMenu.aboutUs && <AboutUs />}
      {selectMenu.graduationArea && <GraduationArea />}
      {selectMenu.promotion && <Promotion />}
      {selectMenu.contact && <div>Hello 4</div>}
    </div>
  );
};

export default Main;
