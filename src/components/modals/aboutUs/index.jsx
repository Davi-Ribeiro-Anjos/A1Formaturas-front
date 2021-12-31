import { useSelectMenu } from "../../../providers/SelectMenu";

import BaseModal from "../base";
import SubAboutUs from "./subModal";

const AboutUs = () => {
  const { selectMenu, setSelectMenu } = useSelectMenu();

  return (
    <>
      <BaseModal
        menu={"aboutUs"}
        open={selectMenu.aboutUs}
        setOpen={setSelectMenu}
      >
        <SubAboutUs setOpen={setSelectMenu} />
      </BaseModal>
    </>
  );
};

export default AboutUs;
