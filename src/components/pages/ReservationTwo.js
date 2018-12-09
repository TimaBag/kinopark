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
      seat.reserv = false;
      newHallMap[seat.GridY][seat.GridX] = seat;
      return seat;
    })
    for(let i = 1; i <= y; i++){
      for (let j = 1; j <= x; j++) {
        if(_.isEmpty(newHallMap[i][j])){
          newHallMap[i][j] = {};
          newHallMap[i][j].type = "blank";
        }
      } 
    }
    this.state = {
      maxChoosePlace : 3,
      currentRow: "",
      currentColumn: "",
      hallMap: newHallMap,
      maxY: y,
      maxX: x,
    }
    this.handleChoosePlace = this.handleChoosePlace.bind(this);
  }

  ksort(obj){
    var keys = Object.keys(obj).sort(), 
        sortedObj = {};

    for(var i in keys) {
      sortedObj[keys[i]] = obj[keys[i]];
    }

    return sortedObj;
  }

  handleChoosePlace(e,item){
    let { maxChoosePlace } = this.state;
    console.log(item);
    if(item.IsFree) {
      if(item.reserv !== undefined && item.reserv) {
        this.state.hallMap[item.GridY][item.GridX]["reserv"] = false;
        maxChoosePlace++;
        this.setState({
          currentColumn: "",
          currentRow: "",
          maxChoosePlace
        });
      } else {
        if(maxChoosePlace > 0) { 
          maxChoosePlace--;
          this.setState({
            currentColumn: item.GridY,
            currentRow: item.GridX,
            maxChoosePlace
          });
          this.state.hallMap[item.GridY][item.GridX]["reserv"] = true;
        } else {
          console.log("you expired max places")
        }
      }
    } else {
      console.log("not available")
    }
  }

  getHallMap = (map) => {
    this.setState({
      newMap : map,
    })
    console.log(map);
  }

  checkPlaces = () => {
    let { hallMap } = this.state;
    hallMap.forEach(row => {
      row.forEach((seat, index) => {
        if(index - 1 > 0 && index + 1 < row.length){
          let previous = row[index-1];
          let current = row[index];
          let next = row[index+1];
          if( (previous.IsFree && previous.reserv) && 
              (current.IsFree && !current.reserv) && 
              (next.IsFree && next.reserv)){
              console.log("You can not select this places");
              return;
          }
        }
      })
    });
  }

  render() {
    // console.log(this.state.hallMap);
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
            {/* <form action="#" className="reservation-form"> */}
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
                                onClick={(e) => this.handleChoosePlace(e, seat)}>
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
                <button onClick={this.checkPlaces} className="thunderbird-btn">next</button> 
              </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    )
  }
}

export default ReservationTwo;