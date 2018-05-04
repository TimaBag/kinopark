import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cinemas extends Component {
  render() {
    return (
      <div className="global-wrapper">
        <div className="content">
          <div className="container">
            <h1>Кинотеатры</h1>
            <div className="fiter-panel fiter-panel-mod">
              <div className="filter-select-option">
                <span className="filter-text">Выберите город:</span>
                <select className="selectpicker">
                  <option>Астана</option>
                  <option>Питер</option>
                  <option>Москва</option>
                </select>
              </div>
            </div>
            <div className="movie-house-content">
              <div className="movie-house-container">
                <div className="movie-house-item">
                  <div className="item-img">
                    <img src={require("../../img/static/movie-house/01.jpg")} alt="alt" />
                  </div>
                  <div className="item-desc">
                    <div className="title-and-city">
                      <h3 className="title">Kinopark 7 Keruencity</h3>
                      <span className="city">Алматы</span>
                    </div>
                    <ul className="item-desc-list">
                      <li>
                        <i className="fa fa-map-marker"></i><Link to="">ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4</Link>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i><span className="phone-number">+7 (713) 2777-030</span> (авт.), <span className="phone-number">+7 701 767 46 02</span> , <span className="phone-number">+7 713 277 70 25</span>
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i><Link to="">Сеансы</Link>
                      </li>
                      <li>
                        <ul className="format-list">
                          <li className="format">IMAX</li>
                          <li className="format">DOLBY ATMOS LASER</li>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
                      </li>
                      <li>
                        <ul className="restaurants-list">
                          <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="movie-house-container">
                <div className="movie-house-item">
                  <div className="item-img">
                    <img src={require("../../img/static/movie-house/02.jpg")} alt="alt" />
                  </div>
                  <div className="item-desc">
                    <div className="title-and-city">
                      <h3 className="title">Kinopark 7 IMAX Keruen</h3>
                      <span className="city">Алматы</span>
                    </div>
                    <ul className="item-desc-list">
                      <li>
                        <i className="fa fa-map-marker"></i><Link to="">ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4</Link>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i><span className="phone-number">+7 (713) 2777-030</span> (авт.), <span className="phone-number">+7 701 767 46 02</span> , <span className="phone-number">+7 713 277 70 25</span>
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i><Link to="">Сеансы</Link>
                      </li>
                      <li>
                        <ul className="format-list">
                          <li className="format">IMAX</li>
                          <li className="format">DOLBY ATMOS LASER</li>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
                      </li>
                      <li>
                        <ul className="restaurants-list">
                          <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="movie-house-container">
                <div className="movie-house-item">
                  <div className="item-img">
                    <img src={require("../../img/static/movie-house/03.jpg")} alt="alt" />
                  </div>
                  <div className="item-desc">
                    <div className="title-and-city">
                      <h3 className="title">Kinopark 5 Mega Planet</h3>
                      <span className="city">Алматы</span>
                    </div>
                    <ul className="item-desc-list">
                      <li>
                        <i className="fa fa-map-marker"></i><Link to="">ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4</Link>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i><span className="phone-number">+7 (713) 2777-030</span> (авт.), <span className="phone-number">+7 701 767 46 02</span> , <span className="phone-number">+7 713 277 70 25</span>
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i><Link to="">Сеансы</Link>
                      </li>
                      <li>
                        <ul className="format-list">
                          <li className="format">IMAX</li>
                          <li className="format">DOLBY ATMOS LASER</li>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
                      </li>
                      <li>
                        <ul className="restaurants-list">
                          <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="movie-house-container">
                <div className="movie-house-item">
                  <div className="item-img">
                    <img src={require("../../img/static/movie-house/04.jpg")} alt="alt" />
                  </div>
                  <div className="item-desc">
                    <div className="title-and-city">
                      <h3 className="title">Kinopark 6 Sputnik</h3>
                      <span className="city">Алматы</span>
                    </div>
                    <ul className="item-desc-list">
                      <li>
                        <i className="fa fa-map-marker"></i><Link to="">ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4</Link>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i><span className="phone-number">+7 (713) 2777-030</span> (авт.), <span className="phone-number">+7 701 767 46 02</span> , <span className="phone-number">+7 713 277 70 25</span>
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i><Link to="">Сеансы</Link>
                      </li>
                      <li>
                        <ul className="format-list">
                          <li className="format">IMAX</li>
                          <li className="format">DOLBY ATMOS LASER</li>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
                      </li>
                      <li>
                        <ul className="restaurants-list">
                          <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="movie-house-container">
                <div className="movie-house-item">
                  <div className="item-img">
                    <img src={require("../../img/static/movie-house/01.jpg")} alt="alt" />
                  </div>
                  <div className="item-desc">
                    <div className="title-and-city">
                      <h3 className="title">Kinopark 7 Keruencity</h3>
                      <span className="city">Алматы</span>
                    </div>
                    <ul className="item-desc-list">
                      <li>
                        <i className="fa fa-map-marker"></i><Link to="">ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4</Link>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i><span className="phone-number">+7 (713) 2777-030</span> (авт.), <span className="phone-number">+7 701 767 46 02</span> , <span className="phone-number">+7 713 277 70 25</span>
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i><Link to="">Сеансы</Link>
                      </li>
                      <li>
                        <ul className="format-list">
                          <li className="format">IMAX</li>
                          <li className="format">DOLBY ATMOS LASER</li>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
                      </li>
                      <li>
                        <ul className="restaurants-list">
                          <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="movie-house-container">
                <div className="movie-house-item">
                  <div className="item-img">
                    <img src={require("../../img/static/movie-house/02.jpg")} alt="alt" />
                  </div>
                  <div className="item-desc">
                    <div className="title-and-city">
                      <h3 className="title">Kinopark 7 IMAX Keruen</h3>
                      <span className="city">Алматы</span>
                    </div>
                    <ul className="item-desc-list">
                      <li>
                        <i className="fa fa-map-marker"></i><Link to="">ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4</Link>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i><span className="phone-number">+7 (713) 2777-030</span> (авт.), <span className="phone-number">+7 701 767 46 02</span> , <span className="phone-number">+7 713 277 70 25</span>
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i><Link to="">Сеансы</Link>
                      </li>
                      <li>
                        <ul className="format-list">
                          <li className="format">IMAX</li>
                          <li className="format">DOLBY ATMOS LASER</li>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
                      </li>
                      <li>
                        <ul className="restaurants-list">
                          <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="movie-house-container">
                <div className="movie-house-item">
                  <div className="item-img">
                    <img src={require("../../img/static/movie-house/03.jpg")} alt="alt" />
                  </div>
                  <div className="item-desc">
                    <div className="title-and-city">
                      <h3 className="title">Kinopark 5 Mega Planet</h3>
                      <span className="city">Алматы</span>
                    </div>
                    <ul className="item-desc-list">
                      <li>
                        <i className="fa fa-map-marker"></i><Link to="">ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4</Link>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i><span className="phone-number">+7 (713) 2777-030</span> (авт.), <span className="phone-number">+7 701 767 46 02</span> , <span className="phone-number">+7 713 277 70 25</span>
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i><Link to="">Сеансы</Link>
                      </li>
                      <li>
                        <ul className="format-list">
                          <li className="format">IMAX</li>
                          <li className="format">DOLBY ATMOS LASER</li>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
                      </li>
                      <li>
                        <ul className="restaurants-list">
                          <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="movie-house-container">
                <div className="movie-house-item">
                  <div className="item-img">
                    <img src={require("../../img/static/movie-house/04.jpg")} alt="alt" />
                  </div>
                  <div className="item-desc">
                    <div className="title-and-city">
                      <h3 className="title">Kinopark 6 Sputnik</h3>
                      <span className="city">Алматы</span>
                    </div>
                    <ul className="item-desc-list">
                      <li>
                        <i className="fa fa-map-marker"></i><Link to="">ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4</Link>
                      </li>
                      <li>
                        <i className="fa fa-phone"></i><span className="phone-number">+7 (713) 2777-030</span> (авт.), <span className="phone-number">+7 701 767 46 02</span> , <span className="phone-number">+7 713 277 70 25</span>
                      </li>
                      <li>
                        <i className="fa fa-calendar"></i><Link to="">Сеансы</Link>
                      </li>
                      <li>
                        <ul className="format-list">
                          <li className="format">IMAX</li>
                          <li className="format">DOLBY ATMOS LASER</li>
                        </ul>
                      </li>
                      <li>
                        <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
                      </li>
                      <li>
                        <ul className="restaurants-list">
                          <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                          <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Cinemas;