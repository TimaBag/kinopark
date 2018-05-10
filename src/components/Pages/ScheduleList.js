import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const films = [
  {
    title : "Тайна Коко",
    cinema : "Кинопарк 6 Спутник",
    city : "Almaty",
    age : "12+",
    version : "Original Ver",
    sessionTime : [
      {
        status : "disabled",
        time : "10:00",
        prices : [
          {"price" : "1200 тт."},
          {"price" : "800 тт."},
          {"price" : "700 тт."}
        ],
        format : "LASER",
        hall_number : "Зал 6",
        hall_format : "COMFORT",
      },
      {
        time : "12:00",
        prices : [
          {"price" : "1200 тт."},
          {"price" : "800 тт."},
          {"price" : "700 тт."}
        ],
        format : "LASER",
        quality : "3D",
        hall_number : "Зал 6",
        hall_format : "COMFORT",
      },
      {
        time : "19:00",
        prices : [
          {"price" : "1200 тт."},
          {"price" : "800 тт."},
          {"price" : "700 тт."}
        ],
        format : "LASER",
        hall_number : "Зал 6",
        hall_format : "COMFORT",
      }
    ],
    qualities : [
      {"format" : "3D"},
      {"format" : "IMAX"},
      {"format"  : "Laser"},
    ],
    description : "«Туған үйім - тірегім» ( «Love you family») фильмі отбасы құндылықтары туралы баяндайды. Үлгілі үнді отбасының шаңырағында туған Хуши есімді бойжеткен, ата-анасының қарсылығына қарамастан, биден дәріс беретін Раджа есімді жігітке ғашық болады. Қос ғашық жасырын үйленіп, шаңырақ көтереді. Алайда, кенеттен бәрі де өзгереді. Сүйіп қосылған күйеуі танымастай өзгеріп, Хуши далада қалады. Уақыт өте жақындарының қолдауымен бойжеткен Алматыға келіп, жұмысқа орналасып, биіктерден көрінеді.",
    actors : "Қос ғашық жасырын үйленіп, шаңырақ көтереді. Алайда, кенеттен бәрі де өзгереді. Сүйіп қосылған күйеуі танымастай өзгеріп, Хуши далада қалады. Уақыт өте жақындарының қолдауымен бойжеткен Алматыға келіп, жұмысқа орналасып, биіктерден көрінеді.",
    director : "Қос ғашық жасырын үйленіп, шаңырақ",
    year : "2017",
    start : "14 дек. 2017 г.",
    continue : "94 мин.",
    country : "Индия",
    genre : "мелодрама",
  },
  {
    title : "Логово",
    cinema : "Кинопарк 6 Спутник",
    city : "Almaty",
    age : "12+",
    version : "Original Ver",
    sessionTime : [
      {
        status : "disabled",
        time : "10:00",
        prices : [
          {"price" : "1200 тт."},
          {"price" : "800 тт."},
          {"price" : "700 тт."}
        ],
        format : "LASER",
        hall_number : "Зал 6",
        hall_format : "COMFORT",
      },
      {
        time : "12:00",
        prices : [
          {"price" : "1200 тт."},
          {"price" : "800 тт."},
          {"price" : "700 тт."}
        ],
        format : "LASER",
        quality : "3D",
        hall_number : "Зал 6",
        hall_format : "COMFORT",
      },
      {
        time : "19:00",
        prices : [
          {"price" : "1200 тт."},
          {"price" : "800 тт."},
          {"price" : "700 тт."}
        ],
        format : "LASER",
        hall_number : "Зал 6",
        hall_format : "COMFORT",
      }
    ],
    qualities : [
      {"format" : "3D"},
      {"format" : "IMAX"},
      {"format"  : "Laser"},
    ],
    description : "«Туған үйім - тірегім» ( «Love you family») фильмі отбасы құндылықтары туралы баяндайды. Үлгілі үнді отбасының шаңырағында туған Хуши есімді бойжеткен, ата-анасының қарсылығына қарамастан, биден дәріс беретін Раджа есімді жігітке ғашық болады. Қос ғашық жасырын үйленіп, шаңырақ көтереді. Алайда, кенеттен бәрі де өзгереді. Сүйіп қосылған күйеуі танымастай өзгеріп, Хуши далада қалады. Уақыт өте жақындарының қолдауымен бойжеткен Алматыға келіп, жұмысқа орналасып, биіктерден көрінеді.",
    actors : "Қос ғашық жасырын үйленіп, шаңырақ көтереді. Алайда, кенеттен бәрі де өзгереді. Сүйіп қосылған күйеуі танымастай өзгеріп, Хуши далада қалады. Уақыт өте жақындарының қолдауымен бойжеткен Алматыға келіп, жұмысқа орналасып, биіктерден көрінеді.",
    director : "Қос ғашық жасырын үйленіп, шаңырақ",
    year : "2017",
    start : "14 дек. 2017 г.",
    continue : "94 мин.",
    country : "Индия",
    genre : "мелодрама",
  },
]

class ScheduleList extends Component {

  constructor(props){
    super(props);
    this.state = {
      showMore : false,
      dialogFilm : null,
      selectedOption: ''
    };
  }

  componentDidMount() {
  }

  handleOpenMoreDialog(film){
    console.log(film)
    this.setState({
      showMore : true,
      dialogFilm : film,
    })
  }
  handleCloseMoreDialog(){
    this.setState({
      showMore : false,
      dialogFilm : null,
    })
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // console.log(`Selected: ${selectedOption.label}`);
  }

  renderMoreDialog(){
    const {dialogFilm} = this.state;
    const listFormat = dialogFilm.qualities.map( (quality) =>
      <li>{quality.format}</li>
    )
    return(
      <div className="modal-container">
        <div className="modal-popup-film">
          <h2 className="title">{dialogFilm.title}</h2>
          <div className="modal-popup-content">
            <div className="modal-popup-left">
              <div className="modal-popup-img">
                <div className="age">{dialogFilm.age}</div>
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
                <li><span className="bold">Год:</span> {dialogFilm.year}</li>
                <li><span className="bold">Премьера:</span> {dialogFilm.start}</li>
                <li><span className="bold">Продолжительность:</span> {dialogFilm.continue}</li>
                <li><span className="bold">Страна:</span> {dialogFilm.country}</li>
                <li><span className="bold">Жанр:</span> {dialogFilm.genre}</li>
                <li>
                  <span className="bold">Формат:</span>
                  <ul className="film-format">
                    {listFormat}
                  </ul>
                </li>
                <li><span className="bold">Ограничение по возрасту:</span> до {dialogFilm.age}</li>
                <li><span className="bold">Индекс фильма:</span> "БА" - фильмы, разрешенные для показа детям, достигшим двенадцати лет</li>
              </ul>
              <p className="text">
                <span className="bold">Описание:</span> {dialogFilm.description}
              </p>
              <p className="text">
                <span className="bold">Актерский состав:</span> {dialogFilm.actors}
              </p>
              <p className="text">
                <span className="bold">Режисерский состав::</span> {dialogFilm.director}
              </p>
              <div className="schedule-btn">
                <Link to="">Расписание</Link>
              </div>
            </div>
          </div>
          <div className="modal-close" onClick={this.handleCloseMoreDialog.bind(this)}>&#215;</div>
        </div>
      </div>
    )
  }

  renderFilmSession(session){
    var prices = session.prices.map((price) =>
      <span className="table-column price">{price.price}</span>
    )
    return (
      <li className="table-row">
        <span className="table-column">
          <Link to="" className={session.status ? "session-time " + session.status : "session-time"}>{session.time}</Link>
          {session.quality !== undefined && <span className="quality">{session.quality}</span>}
        </span>
        <span className="table-column">
          {prices}
        </span>
        <span className="table-column"></span>
        <span className="table-column">
          <span className="auditorium"><strong>{session.hall_number}</strong>{session.hall_format}</span>
        </span>
        <span className="table-column"><span className="format">{session.format}</span></span>
        <span className="table-column"><Link to="" className={session.status ? "buy-ticket thunderbird-btn " + session.status : "buy-ticket thunderbird-btn"} >Купить билет</Link></span>
    </li>

    )
  }
  renderFilm(film){
    return (
      <div className="films-content">
        <div className="film-item-container list">
          <div className="film-item">
            <div className="item-top-panel">
              <h4 className="title"><Link to="">{film.title}</Link></h4>
              <ul className="cinema-city">
                <li className="cinema">{film.cinema}</li>
                <li className="city">{film.city}</li>
              </ul>
            </div>
            <div className="item-img">
              <h4 className="title mobile"><Link to="">{film.title}</Link></h4>
              <div className="age">{film.age}</div>
              <div className="version">{film.version}</div>
              <img src={require("../../img/static/film/01.jpg")} alt="alt" />
              <div className="item-hidden-block">
                <div className="watch-trailer">
                  <Link to="" className="js-movie-trailer">
                    <span className="icon-player"></span>
                    Смотреть трейлер
                  </Link>
                </div>
                <div className="more-about-movie">
                  <div className="thunderbird-btn" onClick={this.handleOpenMoreDialog.bind(this,film)}>Подробно о фильме</div>
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
                { film.sessionTime.map((session) => this.renderFilmSession(session))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    let tabFilter =
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
            <Select className="selectpicker"
              name="form-field-name"
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' },
              ]}
            />
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


    let filterResult =
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
                  {tabFilter}
                  {filterResult}
                  {films.map((film) => this.renderFilm(film))}
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

                  {films.map((film) => this.renderFilm(film))}
                </div>
                <div className="tab-item">
                  {tabFilter}
                  {filterResult}
                  {films.map((film) => this.renderFilm(film))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showMore && this.renderMoreDialog()}
      </div>
      )
  }
}

export default ScheduleList;
