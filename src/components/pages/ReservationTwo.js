import React, { Component } from 'react';
import _ from 'lodash';
import { hallMapData } from '../../constants/reservation_data';

class ReservationTwo extends Component {

  constructor(props){
    super(props);
    let maxX = 0, maxY = 0;
    hallMapData.Seats.map((seat) => {
      maxX = (seat.GridX > maxX)?seat.GridX:maxX;
      maxY = (seat.GridX > maxY)?seat.GridX:maxY;
      return seat;
    });

    var x = 0;
    var y = 0;
    var newHallMap = new Array(maxX);
    for (let i = 0; i < newHallMap.length; i++) {
      newHallMap[i] = new Array(maxY);
    }
    hallMapData.Seats.map((seat) => {
      if(seat.GridY > y) y = seat.GridY;
      if(seat.GridX > x) x = seat.GridX;
      newHallMap[seat.GridY][seat.GridX] = seat;
      return seat;
    })
    for(let i = 1; i <= y; i++){
      for (let j = 1; j <= x; j++) {
        if(_.isEmpty(newHallMap[i][j])){
          newHallMap[i][j] = [];
          newHallMap[i][j]["type"] = "blank";
        }
      } 
    }
    this.state = {
      currentPlace : 3,
      currentRow: "",
      currentColumn: "",
      hallMap: newHallMap,
      maxY: y,
      maxX: x,
    }
    this.handleClickChoose = this.handleClickChoose.bind(this);
  }

  ksort(obj){
    var keys = Object.keys(obj).sort(), 
        sortedObj = {};

    for(var i in keys) {
      sortedObj[keys[i]] = obj[keys[i]];
    }

    return sortedObj;
  }

  handleClickChoose(e,item){
    if(item.IsFree) {
      this.setState({
        currentColumn: item.GridY,
        currentRow: item.GridX
      })
      for(var i = 1; i <= this.state.currentPlace;i++){
        this.state.hallMap[item.GridY][item.GridX]["reserv"] = true;
      }
    } else {
      console.log("not available")
    }
  }

  handledisClickChoose(e,item){
    this.setState({
      currentColumn: item.GridY,
      currentRow: item.GridX
    })
    for(var i = 1; i <= this.state.currentPlace;i++){
      this.state.hallMap[item.GridY][item.GridX]["reserv"] = false;
    }
  }

  getHallMap = (map) => {
    this.setState({
      newMap : map,
    })
    console.log(map);
  }

  render() {
    console.log(this.state.hallMap);
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
                    this.state.hallMap.map((elem,index)=>
                    {
                      return(
                        <tr key={index}>
                        {
                          this.state.hallMap[index].map((seat, index_b)=>{
                            return(
                              <td key={index_b}
                                className={seat.type === "blank" ? "column-hidden" : ""} 
                                onClick={(e) => this.handleClickChoose(e, seat)}>
                                {seat.IsFree && (<i className={(this.state.hallMap[index][index_b].reserv) ? "fa fa-user el_red" : "fa fa-user"}></i>)}
                                {!seat.IsFree && (<i className={"fa fa-user el_red not-available"}></i>)}
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