import { useSelectMenu } from "../../../providers/SelectMenu";

import BaseModal from "../base";
import SubMap from "./subModal";

const Map = () => {
  const { selectMenu, setSelectMenu } = useSelectMenu();

  return (
    <>
      <BaseModal menu={"map"} open={selectMenu.map} setOpen={setSelectMenu}>
        <SubMap />
      </BaseModal>
    </>
  );
};

export default Map;
