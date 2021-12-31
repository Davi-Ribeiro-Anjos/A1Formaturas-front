import { StylesMaterial } from "../../../styles/MaterialUI";

import BaseModal from "../base";

import { useSelectMenu } from "../../../providers/SelectMenu";

const Promotion = () => {
  const { selectMenu, setSelectMenu } = useSelectMenu();

  const classes = StylesMaterial();

  return (
    <>
      <BaseModal
        menu={"promotion"}
        open={selectMenu.promotion}
        setOpen={setSelectMenu}
      >
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
          }}
        >
          <h2 className={classes.h2}>Aguarde, em breve teremos novidades!</h2>
        </div>
      </BaseModal>
    </>
  );
};

export default Promotion;
