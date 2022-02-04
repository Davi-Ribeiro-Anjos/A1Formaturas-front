import { Button } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSelectMenu } from "../../providers/SelectMenu";
import { StylesMaterial } from "../../styles/MaterialUI";

const ButtonBack = ({ models }) => {
  const { selectMenu, setSelectMenu } = useSelectMenu();
  const classes = StylesMaterial();

  const backModel = () => {
    setSelectMenu({ ...selectMenu, ...models });
  };

  return (
    <div className={classes.divBack}>
      <Button
        onClick={() => backModel()}
        className={classes.backButton}
        startIcon={<ArrowBackIcon style={{ color: "#fff" }} />}
      >
        <label style={{ fontFamily: "Source Sans Pro", color: "#fff" }}>
          Voltar
        </label>
      </Button>
    </div>
  );
};

export default ButtonBack;
