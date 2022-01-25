import { Button } from "@material-ui/core";

// import { useSelectMenu } from "../../../../providers/SelectMenu";
import { StylesMaterial } from "../../../../styles/MaterialUI";
import ButtonBack from "../../../buttonBack";

const SubGraduationArea = () => {
  // const { selectMenu, setSelectMenu, selectSub, setSelectSub } =
  //   useSelectMenu();
  const classes = StylesMaterial();

  // const alternMenu = (main, sub) => {
  //   setSelectMenu({ ...selectMenu, ...main });
  //   setSelectSub({ ...selectSub, ...sub });
  // };

  return (
    <div className={classes.titleDiv}>
      <ButtonBack models={{ graduationArea: false, main: true }} />
      <a
        href="https://a1.formaturas.eti.br/cli.login.php"
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <Button
          color="neutral"
          size="large"
          className={classes.defaultButton}
          // onClick={() => alternMenu({ main: false, graduationArea: false })}
        >
          <label className={classes.labelButton}> Cadastro Inicial</label>
        </Button>
      </a>
      <a
        href="https://a1.formaturas.eti.br/cli.login.php"
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <Button
          size="large"
          className={classes.defaultButton}
          // onClick={() =>
          //   alternMenu(
          //     { main: false, graduationArea: false },
          //     { invitationPhoto: true }
          //   )
          // }
        >
          <label className={classes.labelButton}>Foto do convite</label>
        </Button>
      </a>
      <a
        href="http://a1formaturas.com.br/app/87-homepage/155-atualizacao-cadastral.html"
        style={{ textDecoration: "none" }}
        target="_blank"
        rel="noreferrer"
      >
        <Button
          size="large"
          className={classes.defaultButton}
          // onClick={() => setSelectMenu({ main: false, graduationArea: false })}
        >
          <label className={classes.labelButton}>Atualização Cadastral</label>
        </Button>
      </a>
    </div>
  );
};

export default SubGraduationArea;
