import React, { Component } from 'react';
import JohnKheho from "../../assets/employee.jpg";
import mcd from "../../assets/mcd.png";
import apple from "../../assets/apple.png";
import "./UserCard.css";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 345000,
      firstName: "Улан",
      lastName: "Жусупов",
      worksAt: "Фронтенд разработчик Яндекс.Такси",
      salary: 145000,
      newOperation: 0,
      changeValue: "income",
    };
  }

  handleoperation = (sum) => {
    this.setState({newOperation: sum})
  }

  handleAddOperation = () => {
    const { balance, newOperation, changeValue } = this.state;
    if(changeValue === "income") {
      this.setState({balance: parseInt(balance) + parseInt(newOperation)});
    } else {
      this.setState({balance: parseInt(balance) - parseInt(newOperation)})
    }
  }

  handleOperationType = (opr) => {
    this.setState({changeValue: opr});
  }

  render() {
    const { balance, firstName, lastName, worksAt, salary, changeValue } = this.state;
    return (
      <section className="user-card">
        <h2 className="visually-hidden">Карточка пользователя</h2>
        <div className="user-card__info card__info">
          <img className="card__info__img" src={JohnKheho} alt="User image"/>
          <h4 className="card__info__name">{firstName} {lastName}</h4>
          <p className="card__info__work-info">{worksAt}</p>
          <p className="card__info__work-info">${salary}</p>

        </div>

        <section className="user-finance">
          <h3 className="visually-hidden">Финансы пользователя</h3>
          <div className="user-finance__wrapper">
            <div className="user-finance__balance">
              <h5 className="user-finance__title">Баланс</h5>
              <span className="balance">${balance}</span>
            </div>
            <div className="user-finance__balance">
              <h5 className="user-finance__title">Изменения</h5>
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
                <span className="transaction-magazine__value transaction-magazine__value--minus">-14,90Р</span>
              </a>
            </li>
            <li className="transaction-list__item">
              <a href="#" className="transaction-magazine__link">
                <p className="transaction-magazine__wrapper">
                  <img src={mcd} alt="" className="transaction-magazine__logo"/>
                  <p className="transaction-magazine__name">McDonalds</p>
                </p>
                <span className="transaction-magazine__value transaction-magazine__value--minus">-14,90Р</span>
              </a>
            </li>
          </ul>
        </section>

        <section className="new-transc">
          <h3 className="new-transc__title">Новая операция</h3>
          <div className="new-transc__form">
            <p>
              <select className="transc__list" value={changeValue} onChange={(e) => this.handleOperationType(e.value)}>
                <option value="income">Поступления</option>
                <option value="outcome">Вычисления</option>
              </select>
              <input onChange={(e) => this.handleoperation(e.target.value)} className="transc__inpt" type="number"/>
            </p>
            <p className="transc__btns">
              <button className="transc__btn" onClick={() => this.handleAddOperation()}>Добавить</button>
            </p>
          </div>
        </section>

      </section>
    );
  }
}

export default UserCard;