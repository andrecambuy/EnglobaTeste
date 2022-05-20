import React, { useRef, useState } from "react";
import calendar from "../images/calendar.svg";
import menu from "../images/menu.svg";
import search from "../images/search.svg";
import help from "../images/Help.svg";
import notes from "../images/notes.svg";
import notifications from "../images/notifications.svg";
import arrd from "../images/arrw-down.svg";
import "./Header.css";

const Header = () => {
  const dropDownRef = useRef(null);
  const [isActive, setISActive] = useState(false);
  const onClick = () => setISActive(!isActive);

  return (
    <div className="header">
      <div className="left">
        <div className="logo">Engloba</div>
        <div className="menu">
          <img src={menu} alt="menu" onClick={onClick} />
        </div>

        <nav ref={dropDownRef} className="nav">
          {isActive ? (
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">User</a>
              </li>
            </ul>
          ) : null}
        </nav>
        <div className="search-bar">
          <div className="l">
            <select name="Codigo" id="Option">
              <option value="Código">Código</option>
            </select>
            <input type="text" placeholder="Pesquisar..." />
          </div>

          <span>
            <img src={search} alt="" />
          </span>
        </div>
      </div>
      <div className="right">
        <img src={calendar} alt="calendario " />
        <img src={notes} alt="calendario " />
        <div className="notific">
          <img src={notifications} alt="calendario " />
          <div className="notific-num">
            <span>0</span>
          </div>
        </div>
        <img src={help} alt="calendario " />
        <div className="perfil">
          <img
            src="http://lorempixel.com.br/50/50/?1"
            alt="perfil"
            className="picture"
          />
          <img src={arrd} alt="seta" className="arrowdown" />
        </div>
      </div>
    </div>
  );
};

export default Header;
