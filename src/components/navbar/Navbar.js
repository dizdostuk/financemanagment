import React, { Component } from 'react';
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
            <a href="#">
              <FontAwesomeIcon className="fAw-l" icon={faHome} />
              Мой кабинет
            </a>
          </li>
          <li className="left-menu__item">
            <a href="#">
              <FontAwesomeIcon className="fAw-l" icon={faCreditCard} />
              Активность
            </a>
          </li>
          <li className="left-menu__item">
            <a href="#">
              <FontAwesomeIcon className="fAw-l" icon={faCalendarCheck} />
              Расчет
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;