import React from "react";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { StylesMaterial } from "../../../styles/MaterialUI";

import { useSelectMenu } from "../../../providers/SelectMenu";

const BaseModal = ({ menu, open, setOpen, children }) => {
  const classes = StylesMaterial();
  const { selectMenu } = useSelectMenu();

  const handleClose = () => {
    const setMenu = {};
    setMenu[menu] = false;
    console.log("SetMenu", setMenu);
    console.log("SelectMenu", selectMenu);
    setOpen({ ...selectMenu, ...setMenu });
  };

  return (
    <div>
      <Modal
        className={classes.baseModal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>{children}</Fade>
      </Modal>
    </div>
  );
};

export default BaseModal;
