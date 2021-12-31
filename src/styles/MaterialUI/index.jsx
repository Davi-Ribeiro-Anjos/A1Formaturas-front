import { makeStyles } from "@material-ui/core/styles";

import tranparencia from "../../galery/transparencia.png";

// xs = mobile, sm = table, md = laptop

export const StylesMaterial = makeStyles((theme) => ({
  logo: {
    margin: "0 1vw 0 0",

    [theme.breakpoints.up("xs")]: {
      width: "10vw",
    },
    [theme.breakpoints.up("md")]: {
      width: "7vw",
    },
  },
  divBack: {
    display: "flex",
    justifyContent: "space-evenly",

    [theme.breakpoints.up("xs")]: {
      marginTop: "5px",
    },
  },
  backButton: {
    color: theme.palette.common.white,
  },
  iconButton: {
    margin: "0 .5vw 0 0",

    "&:hover": {
      background: "rgba(158, 158, 158, 0.3)",
      opacity: 1,
    },

    [theme.breakpoints.up("xs")]: {
      opacity: 1,
    },
    [theme.breakpoints.up("md")]: {
      opacity: "0.7",
    },
  },
  themeIconButton: {
    color: theme.palette.common.white,

    width: "3vw",
    height: "5vh",

    [theme.breakpoints.up("xs")]: {
      height: "3vw",
    },
  },
  defaultButton: {
    color: theme.palette.common.white,

    fontWeight: 900,
    fontFamily: "Source Sans Pro",

    "&:hover": {
      background: "rgba(158, 158, 158, 0.1)",
    },

    [theme.breakpoints.up("xs")]: {
      width: "60vw",
      height: "20vh",
      fontSize: "2rem",
      opacity: 1,
    },

    [theme.breakpoints.up("sm")]: {
      height: "15vh",
      width: "35vw",
      fontSize: "1.75rem",
    },
    [theme.breakpoints.up("md")]: {
      opacity: "0.7",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "3.5rem",
    },
  },
  titleDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(1),
    },

    [theme.breakpoints.up("xs")]: {
      width: "80vw",
      height: "90vh",
      marginTop: "20px",
      alignItens: "center",
    },

    [theme.breakpoints.up("sm")]: {
      width: "40vw",
      height: "70vh",
      marginTop: "9vh",
    },
  },
  aboutUs: {
    display: "flex",
    flexDirection: "column",
    height: "80vh",

    [theme.breakpoints.up("xs")]: {
      width: "80vw",
    },

    [theme.breakpoints.up("sm")]: {
      width: "50vw",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "3vh",
    },
  },
  h2: {
    color: theme.palette.common.white,

    fontSize: "2.5rem",
    fontFamily: "Source Sans Pro",
    fontWeight: 900,
    textAlign: "center",

    marginBottom: "15px",

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
      marginBottom: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
      marginBottom: "15px",
    },
  },
  h3: {
    color: theme.palette.common.white,

    fontFamily: "Source Sans Pro",
    fontWeight: 600,

    [theme.breakpoints.up("xs")]: {
      fontSize: "1.15rem",
      marginBottom: "10px",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
      marginBottom: "15px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.5rem",
    },
  },
  p: {
    color: theme.palette.common.white,

    fontFamily: "Source Sans Pro",
    fontWeight: 400,

    marginBottom: "10px",

    [theme.breakpoints.up("xs")]: {
      fontSize: "0.8rem",
    },

    [theme.breakpoints.up("md")]: {
      fontSize: "1.10rem",
      marginBottom: "15px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25rem",
      marginBottom: "15px",
    },
  },
  baseModal: {
    [theme.breakpoints.up("xs")]: {
      padding: "0 7.5vw",
      backgroundImage: `url(${tranparencia})`,
    },

    [theme.breakpoints.up("md")]: {
      padding: "0 5vw",
    },
    [theme.breakpoints.up("xl")]: {
      padding: "0 5vw",
      backgroundImage: "none",
    },
  },
}));
