import React from "react";
import "./header.component.style.scss";

/**
 * Name: HeaderComponent
 * Description: Presentetional componet
 */
const HeaderComponent: React.FC = ()=>{
    return (
        <nav className="header-component navbar mb-5 sticky-top">
        <div className="container">
          <a className="navbar-brand" href="/">
              <img src="/images/MusicPlay_logo.png" alt="Music Play logo"/>
          </a>
        </div>
      </nav>

    );
}

export default HeaderComponent;