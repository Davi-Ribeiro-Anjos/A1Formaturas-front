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
        size="large"
        className={classes.defaultButton}
        onClick={() => alternMenu({ main: false, aboutUs: true })}
      >
        Quem somos
      </Button>
      <Button
        size="large"
        className={classes.defaultButton}
        onClick={() => alternMenu({ main: false, graduationArea: true })}
      >
        Área dos Formandos
      </Button>
      <Button
        size="large"
        className={classes.defaultButton}
        onClick={() => setSelectMenu({ main: false, promotion: true })}
      >
        Promoções
      </Button>
      <Button
        size="large"
        className={classes.defaultButton}
        onClick={() => setSelectMenu({ ...selectMenu, contact: true })}
      >
        Contato
      </Button>
    </div>
  );
};

export default MainContent;
