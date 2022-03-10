import React from "react";
import { createStyles, makeStyles, Theme } from "@mui/styles";
import {
  faBars,
  faWindowClose,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((Theme) =>
  createStyles({
    root: {
      background: "red",
      width: "100vw",
      height: "5rem",
      position: "fixed",
      top: 0,
      zIndex: 11,
    },
    container: {
      width: "var(--container-width-lg)",
      margin: "0 auto",
    },

    nav_container: {
      height: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    nav_menu: {
      display: "flex",
      alignItems: "center",
      gap: "4rem",
    },
    nav_button: {
      display: "none",
    },
  })
);

export default function Navbar() {
  const classes = useStyles(0);
  return (
    <>
      <div className={classes.root}>
        <div className={`${classes.container} ${classes.nav_container}`}>
          <ul className={classes.nav_menu}>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Contact</li>
          </ul>
          <button>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      </div>
    </>
  );
}
