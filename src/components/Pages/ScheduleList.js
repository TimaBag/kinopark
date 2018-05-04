import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ScheduleList extends Component {
  render() {
    return (
      <div className="global-wrapper">
        <div className="content">
          <div className="container">
            <h1>Расписание</h1>
            <div className="tabs-content">
              <ul className="tabs-content-name schedule">
                <li className="tab active">сегодня</li>
                <li className="tab">Завтра</li>
                <li className="tab">скоро</li>
              </ul>
              <div className="tabs-item-container schedule">
                <div className="tab-item">
                  <div className="fiter-panel">
                    <div className="filter-panel-left">
                      <div className="filter-select-option">
                        <span className="filter-text">Город:</span>
                        <select className="selectpicker">
                          <option>Астана</option>
                          <option>Питер</option>
                          <option>Москва</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Кинотеатр:</span>
                        <select className="selectpicker">
                          <option>Kinopark 11 IMAX Esentai</option>
                          <option>Kinopark 11 IMAX Esentai</option>
                          <option>Kinopark 11 IMAX Esentai</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-panel-right">
                      <div className="filter-select-option">
                        <span className="filter-text">Фильм:</span>
                        <select className="selectpicker">
                          <option>Все фильмы</option>
                          <option>Все фильмы</option>
                          <option>Все фильмы</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Формат:</span>
                        <select className="selectpicker">
                          <option>Все форматы</option>
                          <option>Все форматы</option>
                          <option>Все форматы</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Зал:</span>
                        <select className="selectpicker">
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Время:</span>
                        <select className="selectpicker">
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-open-hide-btn">
                      фильтры <i className="fa fa-angle-down"></i>
                    </div>
                  </div>
                  <div className="row selection-results-category-list">
                    <div className="col-md-9 col-sm-8 col-xs-12">
                      <ul className="selection-results-film">
                        <li><i className="fa fa-close"></i>Алматы</li>
                        <li><i className="fa fa-close"></i>Kinopark 11 IMAX Esentai</li>
                      </ul>
                      <div className="reset-filter-btn">
                        <i className="fa fa-close"></i>
                        <Link to="">Отменить фильтры</Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                      <ul className="category-list-switch">
                        <li className="category-view-list active"><Link to="/scheduleList" className="fa fa-th-list"></Link></li>
                        <li className="category-view-table "><Link to="/scheduleTab" className="fa fa-th"></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="films-content">
                    <div className="film-item-container list">
                      <div className="film-item">
                        <div className="item-top-panel">
                          <h4 className="title"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                          <ul className="cinema-city">
                            <li className="cinema">Кинопарк 6 Спутник</li>
                            <li className="city">Алматы  </li>
                          </ul>
                        </div>
                        <div className="item-img">
                          <h4 className="title mobile"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                          <div className="age">12+</div>
                          <div className="version">Original Ver</div>
                          <img src={require("../../img/static/film/01.jpg")} alt="alt" />
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
                        <div className="item-desc">
                          <ul className="film-item-desc-table">
                            <li className="table-row">
                              <span className="table-column">Время</span>
                              <span className="table-column">
                                <span className="table-column price">Взрослый</span>
                                <span className="table-column price">Студенческий</span>
                                <span className="table-column price">Детский</span>
                              </span>
                              <span className="table-column"></span>
                              <span className="table-column">Зал</span>
                              <span className="table-column">Формат</span>
                              <span className="table-column"></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time disabled">10:00</Link></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <span className="table-column"></span>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">LASER</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn disabled" >Купить билет</Link></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time">12.00</Link><span className="quality">3D</span></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <span className="table-column"></span>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">3D IMAX Atmos</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn">Купить билет</Link></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time">19.00</Link></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <span className="table-column"></span>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">LASER</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn">Купить билет</Link></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-item">
                  <div className="fiter-panel">
                    <div className="filter-panel-left">
                      <div className="filter-select-option">
                        <span className="filter-text">Город:</span>
                        <select className="selectpicker">
                          <option>Астана</option>
                          <option>Питер</option>
                          <option>Москва</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Кинотеатр:</span>
                        <select className="selectpicker">
                          <option>Kinopark 11 IMAX Esentai</option>
                          <option>Kinopark 11 IMAX Esentai</option>
                          <option>Kinopark 11 IMAX Esentai</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-panel-right">
                      <div className="filter-select-option">
                        <span className="filter-text">Фильм:</span>
                        <select className="selectpicker">
                          <option>Все фильмы</option>
                          <option>Все фильмы</option>
                          <option>Все фильмы</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Формат:</span>
                        <select className="selectpicker">
                          <option>Все форматы</option>
                          <option>Все форматы</option>
                          <option>Все форматы</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Зал:</span>
                        <select className="selectpicker">
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Время:</span>
                        <select className="selectpicker">
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-open-hide-btn">
                      фильтры <i className="fa fa-angle-down"></i>
                    </div>
                  </div>
                  <div className="row selection-results-category-list">
                    <div className="col-md-9 col-sm-8 col-xs-12">
                      <ul className="selection-results-film">
                        <li><i className="fa fa-close"></i>Алматы</li>
                        <li><i className="fa fa-close"></i>Kinopark 11 IMAX Esentai</li>
                      </ul>
                      <div className="reset-filter-btn">
                        <i className="fa fa-close"></i>
                        <Link to="">Отменить фильтры</Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                      <ul className="category-list-switch">
                        <li className="category-view-list active"><Link to="/scheduleList" className="fa fa-th-list"></Link></li>
                        <li className="category-view-table "><Link to="/scheduleTab" className="fa fa-th"></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="films-content">
                    <div className="film-item-container list">
                      <div className="film-item">
                        <div className="item-top-panel">
                          <h4 className="title"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                          <ul className="cinema-city">
                            <li className="cinema">Кинопарк 6 Спутник</li>
                            <li className="city">Алматы  </li>
                          </ul>
                        </div>
                        <div className="item-img">
                          <h4 className="title mobile"><Link to="">Звёздные Войны: Последние джедаи</Link></h4>
                          <div className="age">12+</div>
                          <div className="version">Original Ver</div>
                          <img src={require("../../img/static/film/01.jpg")} alt="alt" />
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
                        <div className="item-desc">
                          <ul className="film-item-desc-table">
                            <li className="table-row">
                              <span className="table-column">Время</span>
                              <span className="table-column">
                                <span className="table-column price">Взрослый</span>
                                <span className="table-column price">Студенческий</span>
                                <span className="table-column price">Детский</span>
                              </span>
                              <span className="table-column"></span>
                              <span className="table-column">Зал</span>
                              <span className="table-column">Формат</span>
                              <span className="table-column"></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time disabled">10:00</Link></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <span className="table-column"></span>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">LASER</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn disabled" >Купить билет</Link></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time">12.00</Link><span className="quality">3D</span></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <span className="table-column"></span>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">3D IMAX Atmos</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn">Купить билет</Link></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time">19.00</Link></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <span className="table-column"></span>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">LASER</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn">Купить билет</Link></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-item">
                  <div className="fiter-panel">
                    <div className="filter-panel-left">
                      <div className="filter-select-option">
                        <span className="filter-text">Город:</span>
                        <select className="selectpicker">
                          <option>Астана</option>
                          <option>Питер</option>
                          <option>Москва</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Кинотеатр:</span>
                        <select className="selectpicker">
                          <option>Kinopark 11 IMAX Esentai</option>
                          <option>Kinopark 11 IMAX Esentai</option>
                          <option>Kinopark 11 IMAX Esentai</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-panel-right">
                      <div className="filter-select-option">
                        <span className="filter-text">Фильм:</span>
                        <select className="selectpicker">
                          <option>Все фильмы</option>
                          <option>Все фильмы</option>
                          <option>Все фильмы</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Формат:</span>
                        <select className="selectpicker">
                          <option>Все форматы</option>
                          <option>Все форматы</option>
                          <option>Все форматы</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Зал:</span>
                        <select className="selectpicker">
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                        </select>
                      </div>
                      <div className="filter-select-option">
                        <span className="filter-text">Время:</span>
                        <select className="selectpicker">
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                          <option>Выбрать</option>
                        </select>
                      </div>
                    </div>
                    <div className="filter-open-hide-btn">
                      фильтры <i className="fa fa-angle-down"></i>
                    </div>
                  </div>
                  <div className="row selection-results-category-list">
                    <div className="col-md-9 col-sm-8 col-xs-12">
                      <ul className="selection-results-film">
                        <li><i className="fa fa-close"></i>Алматы</li>
                        <li><i className="fa fa-close"></i>Kinopark 11 IMAX Esentai</li>
                      </ul>
                      <div className="reset-filter-btn">
                        <i className="fa fa-close"></i>
                        <Link to="">Отменить фильтры</Link>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                      <ul className="category-list-switch">
                        <li className="category-view-list active"><Link to="/scheduleList" className="fa fa-th-list"></Link></li>
                        <li className="category-view-table "><Link to="/scheduleTab" className="fa fa-th"></Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="films-content">
                    <div className="film-item-container list">
                      <div className="film-item">
                        <div className="item-top-panel">
                          <h4 className="title"><Link to="">Пираты карибского моря: мертвецы не рассказывают сказки</Link></h4>
                          <ul className="cinema-city">
                            <li className="cinema">Кинопарк 6 Спутник</li>
                            <li className="city">Алматы  </li>
                          </ul>
                        </div>
                        <div className="item-img">
                          <h4 className="title mobile"><Link to="">Пираты карибского моря: мертвецы не рассказывают сказки</Link></h4>
                          <div className="age">12+</div>
                          <img src={require("../../img/static/film/01.jpg")} alt="alt" />
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
                        <div className="item-desc">
                          <ul className="film-item-desc-table">
                            <li className="table-row">
                              <span className="table-column">Время</span>
                              <span className="table-column">
                                <span className="table-column price">Взрослый</span>
                                <span className="table-column price">Студенческий</span>
                                <span className="table-column price">Детский</span>
                              </span>
                              <div className="table-column"></div>
                              <span className="table-column">Зал</span>
                              <span className="table-column">Формат</span>
                              <span className="table-column"></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time disabled">10:00</Link></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <div className="table-column"></div>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">LASER</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn disabled" >Купить билет</Link></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time disabled">10:00</Link></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <div className="table-column"></div>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">LASER</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn disabled" >Купить билет</Link></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time">12.00</Link><span className="quality">3D</span></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <div className="table-column"></div>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">3D IMAX Atmos</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn">Купить билет</Link></span>
                            </li>
                            <li className="table-row">
                                <span className="table-column"><Link to="" className="session-time">19.00</Link></span>
                                <span className="table-column">
                                  <span className="table-column price">1200 тт.</span>
                                  <span className="table-column price">800 тт.</span>
                                  <span className="table-column price">700 тт.</span>
                                </span>
                                <div className="table-column"></div>
                                <span className="table-column">
                                  <span className="auditorium"><strong>Зал 6</strong>COMFORT</span>
                                </span>
                                <span className="table-column"><span className="format">LASER</span></span>
                                <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn">Купить билет</Link></span>
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
        <div id="modalWindow" className="modal-container">
          <div className="modal-popup-film">
            <h2 className="title">Звёздные Войны: Последние джедаи</h2>
            <div className="modal-popup-content">
              <div className="modal-popup-left">
                <div className="modal-popup-img">
                  <div className="age">12+</div>
                  <img src={require("../../img/static/modal-popup/01.jpg")} alt="alt" />
                    <div className="watch-trailer">
                      <Link to="" className="js-movie-trailer">
                        <span className="icon-player"></span>
                        Смотреть трейлер
                      </Link>
                    </div>
                  </div>
                  <div className="modal-popup-buy-ticket">
                    <Link to="" className="thunderbird-btn">Купить билет</Link>
                  </div>
              </div>
              <div className="modal-popup-desc">
                <ul className="film-characteristics">
                  <li><span className="bold">Год:</span> 2017</li>
                  <li><span className="bold">Премьера:</span> 14 дек. 2017 г.</li>
                  <li><span className="bold">Продолжительность:</span> 94 мин.</li>
                  <li><span className="bold">Страна:</span> Индия</li>
                  <li><span className="bold">Жанр:</span> мелодрама</li>
                  <li>
                    <span className="bold">Формат:</span>
                    <ul className="film-format">
                      <li>3D</li>
                      <li>IMAX</li>
                      <li>Laser</li>
                    </ul>
                  </li>
                  <li><span className="bold">Ограничение по возрасту:</span> до 12 лет</li>
                  <li><span className="bold">Индекс фильма:</span> "БА" - фильмы, разрешенные для показа детям, достигшим двенадцати лет</li>
                </ul>
                <p className="text">
                  <span className="bold">Описание:</span> «Туған үйім - тірегім» ( «Love you family») фильмі отбасы құндылықтары туралы баяндайды. Үлгілі үнді отбасының шаңырағында туған Хуши есімді бойжеткен, ата-анасының қарсылығына қарамастан, биден дәріс беретін Раджа есімді жігітке ғашық болады. Қос ғашық жасырын үйленіп, шаңырақ көтереді. Алайда, кенеттен бәрі де өзгереді. Сүйіп қосылған күйеуі танымастай өзгеріп, Хуши далада қалады. Уақыт өте жақындарының қолдауымен бойжеткен Алматыға келіп, жұмысқа орналасып, биіктерден көрінеді.
                </p>
                <p className="text">
                  <span className="bold">Актерский состав:</span> Қос ғашық жасырын үйленіп, шаңырақ көтереді. Алайда, кенеттен бәрі де өзгереді. Сүйіп қосылған күйеуі танымастай өзгеріп, Хуши далада қалады. Уақыт өте жақындарының қолдауымен бойжеткен Алматыға келіп, жұмысқа орналасып, биіктерден көрінеді.
                </p>
                <p className="text">
                  <span className="bold">Режисерский состав::</span> Қос ғашық жасырын үйленіп, шаңырақ 
                </p>
                <div className="schedule-btn">
                  <Link to="">Расписание</Link>
                </div>
              </div>
            </div>
            <div className="modal-close">&#215;</div>
          </div>
        </div>
      </div>
      )
  }
}

export default ScheduleList;