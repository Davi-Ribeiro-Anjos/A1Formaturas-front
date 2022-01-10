import { useSelectMenu } from "../../../providers/SelectMenu";

import BaseModal from "../base";
import SubContact from "./subModal";

const Contact = () => {
  const { selectMenu, setSelectMenu } = useSelectMenu();

  return (
    <>
      <BaseModal
        menu={"contact"}
        open={selectMenu.contact}
        setOpen={setSelectMenu}
      >
        <SubContact setOpen={setSelectMenu} />
      </BaseModal>
    </>
  );
};

export default Contact;
