import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeftSidebar from '../extra/LeftSidebar';
import Slider from '../extra/Slider';
import NewsBlock from '../extra/NewsBlock';
const films = [
  {
    title : "Тайна Коко",
    qualities : [
      {"format" : "3D"},
      {"format" : "IMAX"},
      {"format"  : "Laser"}, 
    ],
    sessionTime : [
      {
        "time" : "10:00",
        "status" : "disabled",
      },
      {
        "time" : "11:30",
        "status" : "disabled",
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm"
      },
      {
        "time" : "11:30",
        "quality" : "IMAX"
      },
      {
        "time" : "11:30",
        "quality" : "3D"
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm",
      },
      {
        "time" : "11:30",
        "quality" : "IMAX",
      },
      {
        "time" : "11:30",
        "quality" : "3D",
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm",
      },
      {
        "time" : "11:30",
        "quality" : "3D",
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm",
      }
    ],
    age : "12+",
    img : "../../img/static/film/01.jpg",
  },
  {
    title : "Звёздные Войны: Последние джедаи",
    qualities : [
      {"format" : "3D"},
      {"format" : "IMAX"},
      {"format"  : "Laser"}, 
    ],
    version : "Original Ver",
    sessionTime : [
      {
        "time" : "10:00",
        "status" : "disabled",
      },
      {
        "time" : "11:30",
        "status" : "disabled",
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm"
      },
      {
        "time" : "11:30",
        "quality" : "IMAX"
      },
      {
        "time" : "11:30",
        "quality" : "3D"
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm",
      },
      {
        "time" : "11:30",
        "quality" : "IMAX",
      },
      {
        "time" : "11:30",
        "quality" : "3D",
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm",
      },
      {
        "time" : "11:30",
        "quality" : "3D",
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm",
      }
    ],
    age : "12+",
    img : "../../img/static/film/02.jpg",
  }, 
  {
    title : "Тайна Коко",
    qualities : [
      {"format" : "3D"},
      {"format" : "IMAX"},
      {"format"  : "Laser"}, 
    ],
    sessionTime : [
      {
        "time" : "10:00",
        "status" : "disabled",
      },
      {
        "time" : "11:30",
        "status" : "disabled",
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm"
      },
      {
        "time" : "11:30",
        "quality" : "IMAX"
      },
      {
        "time" : "11:30",
        "quality" : "3D"
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm",
      },
      {
        "time" : "11:30",
        "quality" : "IMAX",
      },
      {
        "time" : "11:30",
        "quality" : "3D",
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm",
      },
      {
        "time" : "11:30",
        "quality" : "3D",
      },
      {
        "time" : "11:30",
        "quality" : "3D IMAX Atm",
      }
    ],
    age : "12+",
    img : "../../img/static/film/01.jpg",
  }
]

class Home extends Component {

  renderFilm(film,index){
    var qualities = film.qualities;
    const listFormat = qualities.map( (quality,index) => 
      <li key={index}>{quality.format}</li>
    )
    const listSession = film.sessionTime.map((session,index) => 
      <li key={index}>
        <Link to="#" className={"session-time " + session.status}>{session.time}</Link>
        <span className="quality">{session.quality}</span>
      </li>
    )
    return (
      <div key={index} className="film-item-container main">
        <div className="film-item">
          <div className="age">{film.age}</div>
          <div className="item-img">
            <Link to=""></Link>
            <img src={require("../../img/static/film/01.jpg")} alt="alt"/>
            <div className="item-hidden-block">
              <div className="watch-trailer">
                <Link to="" className="js-movie-trailer">
                  <span className="icon-player"></span>
                  Смотреть трейлер
                </Link>
              </div>
              <div className="more-about-movie">
                <Link to="" className="thunderbird-btn js-call-modal-popup-film">Подробно о фильме</Link>
              </div>
            </div>
          </div>
          <ul className="film-format">
            {listFormat}
          </ul>
          <h4 className="title"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
          <div className="view-all-sessions">
            <Link to="#" className="js-view-all-sessions">Смотреть все сеансы</Link>
          </div>
          <ul className="session-time-list">
            {listSession}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="content-end-sidebar">
        <div className="container">
          <Slider media="tablet" />
          <div className="row">
            <LeftSidebar />
            <div className="column-right">
              <div className="content">
                <Slider media="desktop" />
                <NewsBlock media="mobile"/>
                <div className="tabs-content">
                  <ul className="tabs-content-name">
                    <li className="tab active">Сегодня</li>
                    <li className="tab">Завтра</li>
                    <li className="tab">скоро</li>
                  </ul>
                  <div className="tabs-item-container">
                    <div className="tab-item">
                      <div className="films-content">
                        {films.map((film,index) => this.renderFilm(film,index))}
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="films-content">
                        {films.map((film,index) => this.renderFilm(film,index))}
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="films-content">
                        {films.map((film,index) => this.renderFilm(film,index))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
