import BaseModal from "../base";
import ImgPromo from "../../../galery/promo.png";

import { useSelectMenu } from "../../../providers/SelectMenu";
import ButtonBack from "../../buttonBack";

const Promotion = () => {
  const { selectMenu, setSelectMenu } = useSelectMenu();

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
            justifyContent: "space-evenly",
            width: "90%",
          }}
        >
          <ButtonBack models={{ promotion: false, main: true }} />
          <img
            style={{ width: "100%", marginTop: "5vh" }}
            src={ImgPromo}
            alt="Imagem Promoção"
          />
        </div>
      </BaseModal>
    </>
  );
};

export default Promotion;
