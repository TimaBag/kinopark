import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LeftSidebar from '../extra/LeftSidebar';
import Slider from '../extra/Slider';
import NewsBlock from '../extra/NewsBlock';
const films = [
  {
    title : "Тайна Коко",
    quality : {
      "3D" : "3D",
      "IMAX" : "IMAX",
      "Laser"  : "Laser", 
    },
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
    format : {
      "3D" : "3D",
      "IMAX" : "IMAX",
      "Laser"  : "Laser", 
    },
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
    quality : {
      "3D" : "3D",
      "IMAX" : "IMAX",
      "Laser"  : "Laser", 
    },
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
  render() {
    return (
      <div className="global-wrapper">
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
                          <div className="film-item-container main">
                            <div className="film-item">
                              <div className="age">12+</div>
                              <div className="item-img">
                                <Link to=""></Link>
                                <img src={require('../../img/static/film/01.jpg')} alt="alt"/>
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
                                <li>3D</li>
                                <li>IMAX</li>
                                <li>Laser</li>
                              </ul>
                              <h4 className="title"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                              <div className="view-all-sessions">
                                <Link to="#" className="js-view-all-sessions">Смотреть все сеансы</Link>
                              </div>
                              <ul className="session-time-list">
                                <li>
                                  <Link to="#" className="session-time disabled">10:00</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time disabled">11:30</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="film-item-container main">
                            <div className="film-item">
                              <div className="age">12+</div>
                              <div className="version">Original Ver</div>
                              <div className="item-img">
                                <Link to=""></Link>
                                <img src={require('../../img/static/film/02.jpg')} alt="alt"/>
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
                                <li>3D</li>
                                <li>IMAX</li>
                                <li>Laser</li>
                              </ul>
                              <h4 className="title"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                              <div className="view-all-sessions">
                                <Link to="#" className="js-view-all-sessions">Смотреть все сеансы</Link>
                              </div>
                              <ul className="session-time-list">
                                <li>
                                  <Link to="#" className="session-time disabled">10:00</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time disabled">11:30</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-item">
                        <div className="films-content">
                          <div className="film-item-container main">
                            <div className="film-item">
                              <div className="age">12+</div>
                              <div className="item-img">
                                <Link to=""></Link>
                                <img src={require('../../img/static/film/01.jpg')} alt="alt"/>
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
                                <li>3D</li>
                                <li>IMAX</li>
                                <li>Laser</li>
                              </ul>
                              <h4 className="title"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                              <div className="view-all-sessions">
                                <Link to="#" className="js-view-all-sessions">Смотреть все сеансы</Link>
                              </div>
                              <ul className="session-time-list">
                                <li>
                                  <Link to="#" className="session-time disabled">10:00</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time disabled">11:30</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="film-item-container main">
                            <div className="film-item">
                              <div className="age">12+</div>
                              <div className="version">Original Ver</div>
                              <div className="item-img">
                                <Link to=""></Link>
                                <img src={require('../../img/static/film/02.jpg')} alt="alt"/>
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
                                <li>3D</li>
                                <li>IMAX</li>
                                <li>Laser</li>
                              </ul>
                              <h4 className="title"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                              <div className="view-all-sessions">
                                <Link to="#" className="js-view-all-sessions">Смотреть все сеансы</Link>
                              </div>
                              <ul className="session-time-list">
                                <li>
                                  <Link to="#" className="session-time disabled">10:00</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time disabled">11:30</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tab-item">
                        <div className="films-content">
                          <div className="film-item-container main">
                            <div className="film-item">
                              <div className="age">12+</div>
                              <div className="item-img">
                                <Link to=""></Link>
                                <img src={require('../../img/static/film/01.jpg')} alt="alt"/>
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
                                <li>3D</li>
                                <li>IMAX</li>
                                <li>Laser</li>
                              </ul>
                              <h4 className="title"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                              <div className="view-all-sessions">
                                <Link to="#" className="js-view-all-sessions">Смотреть все сеансы</Link>
                              </div>
                              <ul className="session-time-list">
                                <li>
                                  <Link to="#" className="session-time disabled">10:00</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time disabled">11:30</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="film-item-container main">
                            <div className="film-item">
                              <div className="age">12+</div>
                              <div className="version">Original Ver</div>
                              <div className="item-img">
                                <Link to=""></Link>
                                <img src={require('../../img/static/film/02.jpg')} alt="alt"/>
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
                                <li>3D</li>
                                <li>IMAX</li>
                                <li>Laser</li>
                              </ul>
                              <h4 className="title"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                              <div className="view-all-sessions">
                                <Link to="#" className="js-view-all-sessions">Смотреть все сеансы</Link>
                              </div>
                              <ul className="session-time-list">
                                <li>
                                  <Link to="#" className="session-time disabled">10:00</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time disabled">11:30</Link>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">IMAX</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D</span>
                                </li>
                                <li>
                                  <Link to="#" className="session-time">11:30</Link>
                                  <span className="quality">3D IMAX Atm</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
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
