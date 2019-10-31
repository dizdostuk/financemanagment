import React, { Component } from 'react';
import Chart from "chart.js";
import "./MainPage.css";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() {
    var ctx = <canvas width="400" height="400"></canvas>;
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    return (
      <div className="main-block">
        <div className="main-block__wrapper">
          <section className="main-block__activities">
            <h3 className="main-block__activities__title">Поступления</h3>
            <span className="main-block__activities__sum">+ 245 000 P</span>
          </section>

          <section className="main-block__activities">
            <h3 className="main-block__activities__title">Вычисления</h3>
            <span className="main-block__activities__sum">- 5 000 P</span>
          </section>

          <section className="main-block__graph">
            <h3 className="main-block__graph__title">Изменения за этот год</h3>
            {myChart}
          </section>
        </div>
      </div>
    );
  }
}
 
export default MainPage;