import React, { Component } from 'react';
import "./MainPage.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    
    return (
      <div className="main-block">
        <div className="main-block__wrapper">
          <div className="main-block-cards__wrapper">
            <section className="main-block__activities">
              <h3 className="main-block__activities__title">Поступления</h3>
              <span className="main-block__activities__sum">+ 245 000 P</span>
            </section>

            <section className="main-block__activities">
              <h3 className="main-block__activities__title">Вычисления</h3>
              <span className="main-block__activities__sum main-block__activities__sum--minus">- 5 000 P</span>
            </section>

          </div>

          <section className="main-block__graph">
            <h3 className="main-block__graph__title">Изменения за этот год</h3>
            
          </section>
        </div>
      </div>
    );
  }
}
 
export default MainPage;