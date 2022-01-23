import { Button } from "@material-ui/core";

import { useSelectMenu } from "../../../providers/SelectMenu";

import { StylesMaterial } from "../../../styles/MaterialUI";

const MainContent = () => {
  const { selectMenu, setSelectMenu } = useSelectMenu();
  const classes = StylesMaterial();

  const alternMenu = (object) => {
    setSelectMenu({ ...selectMenu, ...object });
  };

  return (
    <div className={classes.titleDiv}>
      <Button
        className={classes.defaultButton}
        onClick={() => alternMenu({ main: false, aboutUs: true })}
      >
        <label className={classes.labelButton}>Quem somos</label>
      </Button>
      <Button
        size="large"
        className={classes.defaultButton}
        onClick={() => alternMenu({ main: false, graduationArea: true })}
      >
        <label className={classes.labelButton}>Área dos Formandos</label>
      </Button>
      <Button
        size="large"
        className={classes.defaultButton}
        onClick={() => setSelectMenu({ main: false, promotion: true })}
      >
        <label className={classes.labelButton}>Promoções</label>
      </Button>
      <Button
        size="large"
        className={classes.defaultButton}
        onClick={() => setSelectMenu({ main: false, contact: true })}
      >
        <label className={classes.labelButton}>Contato</label>
      </Button>
    </div>
  );
};

export default MainContent;
