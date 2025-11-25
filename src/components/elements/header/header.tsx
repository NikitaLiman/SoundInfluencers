import React from "react";
import Styles from "../../sass/header.module.scss";

import logo from "../../../img/logo.png";

export const Header = () => {
  return (
    <header className={Styles.Header}>
      <div className={Styles.Header__content}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};
