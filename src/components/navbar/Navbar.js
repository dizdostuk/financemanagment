import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import { faHome, faCreditCard, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <nav className="navbar-left">
        <ul className="navbar-left__list left-menu">
          <li className="left-menu__item">
            <Link to="/">
              <FontAwesomeIcon className="fAw-l" icon={faHome} />
              Мой кабинет
            </Link>
          </li>
          <li className="left-menu__item">
            <Link to="/activities">
              <FontAwesomeIcon className="fAw-l" icon={faCreditCard} />
              Активность
            </Link>
          </li>
          <li className="left-menu__item">
            <Link to="/report">
              <FontAwesomeIcon className="fAw-l" icon={faCalendarCheck} />
              Расчет
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;