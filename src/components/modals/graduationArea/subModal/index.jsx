import { Button } from "@material-ui/core";

import { useSelectMenu } from "../../../../providers/SelectMenu";
import { StylesMaterial } from "../../../../styles/MaterialUI";
import ButtonBack from "../../../buttonBack";

const SubGraduationArea = () => {
  const { selectMenu, setSelectMenu, selectSub, setSelectSub } =
    useSelectMenu();
  const classes = StylesMaterial();

  const alternMenu = (main, sub) => {
    setSelectMenu({ ...selectMenu, ...main });
    setSelectSub({ ...selectSub, ...sub });
  };

  return (
    <div className={classes.titleDiv}>
      <ButtonBack models={{ graduationArea: false, main: true }} />
      <Button
        color="neutral"
        size="large"
        className={classes.defaultButton}
        onClick={() =>
          alternMenu({ main: false, graduationArea: false }, { register: true })
        }
      >
        Cadastro Inicial
      </Button>
      <Button
        size="large"
        className={classes.defaultButton}
        onClick={() =>
          alternMenu(
            { main: false, graduationArea: false },
            { invitationPhoto: true }
          )
        }
      >
        Foto do convite
      </Button>
      <Button
        size="large"
        className={classes.defaultButton}
        onClick={() =>
          setSelectMenu(
            { main: false, graduationArea: false },
            { updateRegister: true }
          )
        }
      >
        Atualização cadastral
      </Button>
    </div>
  );
};

export default SubGraduationArea;
