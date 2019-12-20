import React from "react";
import "./header.component.style.scss";
import headerBG from '../../images/header_bg.png'

/**
 * Name: HeaderComponent
 * Description: Presentetional componet
 */
const HeaderComponent: React.FC = () => {
  return (
    <nav className="header-component navbar mb-5 sticky-top"
      style={{ backgroundImage: `url(${headerBG})` }}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src="./images/MusicPlay_logo.png" alt="Music Play logo" />
        </a>
      </div>
    </nav>
  );
}

export default HeaderComponent;