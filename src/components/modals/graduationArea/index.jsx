import { useSelectMenu } from "../../../providers/SelectMenu";

import BaseModal from "../base";
import SubGraduationArea from "./subModal";

const GraduationArea = () => {
  const { selectMenu, setSelectMenu } = useSelectMenu();

  return (
    <>
      <BaseModal
        menu={"graduationArea"}
        open={selectMenu.graduationArea}
        setOpen={setSelectMenu}
      >
        <SubGraduationArea />
      </BaseModal>
    </>
  );
};

export default GraduationArea;
