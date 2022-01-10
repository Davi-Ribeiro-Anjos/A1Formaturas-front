import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import MenuIcon from "@material-ui/icons/Menu";

import { StylesMaterial } from "../../styles/MaterialUI";
import { AppHeader } from "../../styles/StyledComponents";
import logo from "../../galery/logoA1.png";

import BaseModal from "../modals/base";
import MainContent from "../modals/main";

import { useSelectMenu } from "../../providers/SelectMenu";

const Header = () => {
  const { selectMenu, setSelectMenu } = useSelectMenu();
  const classes = StylesMaterial();

  return (
    <>
      <AppHeader>
        <img className={classes.logo} src={logo} alt="Logo A1" />
        <a
          href="https://www.instagram.com/a1formaturasoficial/"
          target="_blank"
          rel="noreferrer"
          title="Instagram da A1 Formaturas"
        >
          <IconButton className={classes.iconButton}>
            <InstagramIcon className={classes.themeIconButton} />
          </IconButton>
        </a>
        <a
          href="https://www.facebook.com/A1Formaturas/"
          target="_blank"
          rel="noreferrer"
          title="Facebook da A1 Formaturas"
        >
          <IconButton className={classes.iconButton}>
            <FacebookIcon className={classes.themeIconButton} />
          </IconButton>
        </a>
        <a
          href="https://twitter.com/a1_formaturas/"
          target="_blank"
          rel="noreferrer"
          title="Twitter da A1 Formaturas"
        >
          <IconButton className={classes.iconButton}>
            <TwitterIcon className={classes.themeIconButton} />
          </IconButton>
        </a>
        <IconButton
          className={classes.iconButton}
          onClick={() => setSelectMenu({ ...selectMenu, main: true })}
        >
          <MenuIcon className={classes.themeIconButton} />
        </IconButton>
        <BaseModal menu={"main"} open={selectMenu.main} setOpen={setSelectMenu}>
          <MainContent setOpen={setSelectMenu} />
        </BaseModal>
      </AppHeader>
    </>
  );
};

export default Header;
