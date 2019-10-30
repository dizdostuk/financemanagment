import React, { Component } from 'react';
import JohnKheho from "../../assets/employee.jpg";
import mcd from "../../assets/mcd.png";
import apple from "../../assets/apple.png";
import "./UserCard.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <section className="user-card">
        <h2 className="visually-hidden">Карточка пользователя</h2>
        <div className="user-card__info card__info">
          <img className="card__info__img" src={JohnKheho} alt="User image"/>
          <h4 className="card__info__name">John Kheho</h4>
          <p className="card__info__work-info">Frontend Engeneer at Yandex.Taxi</p>
        </div>

        <section className="user-finance">
          <h3 className="visually-hidden">Финансы пользователя</h3>
          <div className="user-finance__wrapper">
            <div className="user-finance__balance">
              <h5 className="user-finance__title">Balance</h5>
              <span className="balance">P 345 500</span>
            </div>
            <div className="user-finance__balance">
              <h5 className="user-finance__title">Changes</h5>
              <span className="changes">+ 5.25%</span>
            </div>
          </div>
        </section>

        <section className="recent-transactions">
          <h3>Последние операции</h3>
          <ul className="recent-transactions-list transaction-list">
            <li className="transaction-list__item">
              <a href="#" className="transaction-magazine__link">
                <p className="transaction-magazine__wrapper">
                  <img src={apple} alt="" className="transaction-magazine__logo"/>
                  <p className="transaction-magazine__name">AppStore</p>
                </p>
                <span className="transaction-magazine__value transaction-magazine__value--minus">-$14,90</span>
              </a>
            </li>
            <li className="transaction-list__item">
              <a href="#" className="transaction-magazine__link">
                <p className="transaction-magazine__wrapper">
                  <img src={mcd} alt="" className="transaction-magazine__logo"/>
                  <p className="transaction-magazine__name">McDonalds</p>
                </p>
                <span className="transaction-magazine__value transaction-magazine__value--minus">-$14,90</span>
              </a>
            </li>
          </ul>
        </section>

      </section>
    );
  }
}

export default UserCard;