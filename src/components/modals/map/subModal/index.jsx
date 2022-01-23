import { makeStyles } from "@material-ui/core/styles";
import { StylesMaterial } from "../../../../styles/MaterialUI";

import imgMapa from "../../../../galery/mapa.png";

import ButtonBack from "../../../buttonBack";

const styleMap = makeStyles((theme) => ({
  p: {
    color: theme.palette.common.white,

    fontFamily: "Source Sans Pro",
    fontWeight: 500,

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "0.85rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "0.9rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.1rem",
    },
  },
  div: {
    marginTop: "15px",
  },
  img: {
    position: "absolute",

    [theme.breakpoints.up("xs")]: {
      marginTop: "10vw",
      width: "140vw",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "3vw",
      marginLeft: "15vw",
      width: "80vw",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "30vw",
      width: "60vw",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "40vw",
      width: "45vw",
    },
  },
}));

const SubMap = () => {
  const classesMain = styleMap();
  const classesGlobal = StylesMaterial();

  return (
    <div
      style={{ marginTop: "5vh", position: "relative" }}
      className={classesGlobal.aboutUs}
    >
      <img className={classesMain.img} src={imgMapa} alt="Imagem Mapa" />
      <ButtonBack models={{ map: false, aboutUs: true }} />
      <div className={classesMain.div}>
        <p className={classesMain.p}>
          <b>Curitiba - PR</b>
        </p>
        <p className={classesMain.p}>Av. Anita Garibaldi, 850, sala 105</p>
        <p className={classesMain.p}>
          Complemento: Torre B Térreo, Edifício Infinity Prime Office
        </p>
        <p className={classesMain.p}>(41) 3046-0030</p>
        <p className={classesMain.p}>a1@A1formaturas.com.br</p>
      </div>
      <div className={classesMain.div}>
        <p className={classesMain.p}>
          <b>Pato Branco - PR</b>
        </p>
        <p className={classesMain.p}>Rua Tapir, 1200 - Centro</p>
        <p className={classesMain.p}>(46) 2101 1300</p>
        <p className={classesMain.p}>a1@A1formaturas.com.br</p>
      </div>
      <div className={classesMain.div}>
        <p className={classesMain.p}>
          <b>Cascavel - PR</b>
        </p>
        <p className={classesMain.p}>Avenida Brasil, 9.653 - Coqueiral</p>
        <p className={classesMain.p}>(46) 2101 1300</p>
        <p className={classesMain.p}>a1@A1formaturas.com.br</p>
      </div>
      <div className={classesMain.div}>
        <p className={classesMain.p}>
          <b>Toledo - PR</b>
        </p>
        <p className={classesMain.p}>Avenida Brasil, 9.653 - Coqueiral</p>
        <p className={classesMain.p}>(46) 2101 1300</p>
        <p className={classesMain.p}>a1@A1formaturas.com.br</p>
      </div>
      <div className={classesMain.div}>
        <p className={classesMain.p}>
          <b>Sorriso, Sinop e Lucas do Rio Verde - MT</b>
        </p>
        <p className={classesMain.p}>
          Rua das Videiras,1311 - Centro - Sorriso
        </p>
        <p className={classesMain.p}>(41) 3046-0030</p>
        <p className={classesMain.p}>a1@A1formaturas.com.br</p>
      </div>
      <div className={classesMain.div}>
        <p className={classesMain.p}>
          <b>Guarapuava - PR</b>
        </p>
        <p className={classesMain.p}>
          Rua Expedicionário João Maria Batista, 1210 - Santana
        </p>
        <p className={classesMain.p}>(46) 2101 1300</p>
        <p className={classesMain.p}>a1@A1formaturas.com.br</p>
      </div>
    </div>
  );
};

export default SubMap;
