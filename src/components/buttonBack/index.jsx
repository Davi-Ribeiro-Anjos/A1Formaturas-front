import { IconButton } from "@material-ui/core";
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
      <IconButton className={classes.iconButton} onClick={() => backModel()}>
        <ArrowBackIcon className={classes.backButton} />
      </IconButton>
    </div>
  );
};

export default ButtonBack;
