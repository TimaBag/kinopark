import React, { Component } from 'react';
import _ from 'lodash';
import { hallMapData } from '../../constants/reservation_data';

class ReservationTwo extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentPlace : null,
      currentRow: "",
      currentColumn: ""
    }
    this.handleClickChoose = this.handleClickChoose.bind(this);
  }

  ksort(obj){
    var keys = Object.keys(obj).sort()
      , sortedObj = {};

    for(var i in keys) {
      sortedObj[keys[i]] = obj[keys[i]];
    }

    return sortedObj;
  }

  handleClickChoose(e,item){
    this.setState({
      currentColumn: item.GridY,
      currentRow: item.GridX
    })
  }

  render() {
    var x = 0;
    var y = 0;
    var newHallMap = new Array(25);
    for (let i = 0; i < newHallMap.length; i++) {
      newHallMap[i] = new Array(25);
    }
    hallMapData.Seats.map((seat) => 
      {
        if(seat.GridY > y) y = seat.GridY;
        if(seat.GridX > x) x = seat.GridX;
        newHallMap[seat.GridY][seat.GridX] = seat;
        return seat;
      }
    )
    for(let i = 1; i <= y; i++){
      for (let j = 1; j <= x; j++) {
        if(_.isEmpty(newHallMap[i][j])){
          newHallMap[i][j] = [];
          newHallMap[i][j]["type"] = "blank";
        }
      }
         
    }
  
    return (
      <div className="content">
        <div className="container">
          <h1>Бронирование</h1>
          <div className="reservation-content">
            <ul className="reservation-steps">
              <li><a href="" className="active">1 шаг</a></li>
              <li><a href="" className="active">2 шаг</a></li>
              <li><a href="">3 шаг</a></li>
            </ul>
            <div className="places-and-reset-button">
              <div className="selected-places">
                <strong>Выберите места на карте зала:</strong> Вы выбрали <span className="color">2</span> из <span className="color">3</span> мест
              </div>
              <div className="reset-places-btn">
                <i className="fa fa-close"></i>
                <a href="">Сбросить выбранные места</a>
              </div>
            </div>
            <div className="screen">экран</div>
            <form action="#" className="reservation-form">
              <div className="wrapper-choice-place-cinema">
                <table className="choice-place-cinema">
                  <tbody>
                  {
                    newHallMap.map((elem,index)=>
                    {
                      return(
                        <tr key={index}>
                        {
                          newHallMap[index].map((in_elem, index_b)=>{
                            return(
                              <td key={index_b}
                                className={newHallMap[index][index_b].type === "blank" ? "column-hidden" : ""} 
                                onClick={(e) => this.handleClickChoose(e,newHallMap[index][index_b])}>
                                <i className={(this.state.currentColumn === index && this.state.currentRow === index_b) ? "fa fa-user el_red" : "fa fa-user"}></i>
                                <span className="prompt-window prompt-window-desktop">
                                  Ряд: <span className="bold">{index}</span><br/>
                                  Место <span className="bold">{index_b}</span>
                                </span>
                              </td>
                            );
                          })
                        }
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default ReservationTwo;