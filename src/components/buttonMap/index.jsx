import { Button, makeStyles } from "@material-ui/core";

import { useSelectMenu } from "../../providers/SelectMenu";

const buttonStyle = makeStyles((theme) => ({
  label: {
    color: theme.palette.common.white,

    fontWeight: 600,
    fontFamily: "Source Sans Pro",

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.8rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "2.5rem",
    },
  },
  button: {
    "&:hover": {
      background: "rgba(158, 158, 158, 0.4)",
      opacity: 1,
    },

    [theme.breakpoints.up("xs")]: {
      width: "35vw",
      height: "7.5vh",
      opacity: 1,
    },

    [theme.breakpoints.up("sm")]: {
      height: "7.5vh",
      width: "22.5vw",
    },
    [theme.breakpoints.up("md")]: {
      opacity: "0.7",
    },
  },
}));

const ButtonMap = () => {
  const classes = buttonStyle();
  const { selectMenu, setSelectMenu } = useSelectMenu();

  return (
    <Button
      className={classes.button}
      onClick={() =>
        setSelectMenu({ ...selectMenu, ...{ aboutUs: false, map: true } })
      }
    >
      <label className={classes.label}>Mapa de Atuação</label>
    </Button>
  );
};

export default ButtonMap;
