import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../extra/Filter';
import $ from 'jquery';

const films = [
  {
    cinema : "Кинопарк 6 Спутник",
    city : "Almaty",
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
  },
  {
    cinema : "Kinopark 6 Keruencity",
    city : "Almaty",
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
  },
]


class FilmList extends Component {

  constructor(props){
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    $(".tabs-content .tab-item").not(":first").hide();
    $(".tabs-content .tab").click(function() {
      if($(this).hasClass('active')){return false}
        else{
      $(".tabs-content .tab").removeClass('active');
      $(this).addClass('active')
      $(".tabs-content .tab-item").hide().eq($(this).index()).fadeIn();
    }
    }).eq(0).addClass('active');
  }

  renderTime(time,index){

    var prices = time.prices.map((price,index) => 
      <span key={index} className="table-column price">{price.price}</span>
    )

    return(
      <li key={index} className="table-row">
        <span className="table-column">
          <Link to="" className={time.status ? "session-time " + time.status : "session-time"}>{time.time}</Link>
        </span>
        <span className="table-column">
          {prices}
        </span>
        <span className="table-column"></span>
        <span className="table-column">
          <span className="auditorium"><strong>{time.hall_number}</strong>{time.hall_format}</span>
        </span>
        <span className="table-column"><span className="format">{time.format}</span></span>
        <span className="table-column"><Link to="" className="buy-ticket thunderbird-btn disabled">Купить билет</Link></span>
      </li>
    )
  }

  renderSchedule(schedule,index){
    return(
      <div key={index} className="cinema-item-container list">
        <div className="cinema-item">
          <div className="title-and-city">
            <h3 className="title">{schedule.cinema}</h3>
            <span className="city">{schedule.city}</span>
          </div>
          <div className="wrapper-table">
            <ul className="cinema-item-desc-table">
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
              {schedule.sessionTime.map((time,index) => this.renderTime(time,index))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {

    return (
      <div className="content">
        <div className="container">
          <h1 className="title-mod">Звёздные Войны: Последние джедаи</h1>
          <div className="film-detailed-container">
            <div className="film-detailed-img">
              <div className="age">12+</div>
              <div className="version">Original Ver</div>
              <img src={require("../../img/static/film-detailed/01.jpg")} alt="alt" />
              <div className="watch-trailer">
                <Link to="" className="js-movie-trailer">
                  <span className="icon-player"></span>
                  Смотреть трейлер
                </Link>
              </div>
            </div>
            <div className="film-detailed-desc">
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
                <span className="bold">Описание:</span> «Туған үйім - тірегім» ( «Love you family») фильмі отбасы құндылықтары туралы баяндайды. Үлгілі үнді отбасының шаңырағында туған Хуши есімді бойжеткен, ата-анасының қарсылығына қарамастан, биден <span className="text-hidden"> дәріс беретінРаджа есімді жігітке ғашық болады. Қос ғашық жасырын үйленіп, шаңырақ көтереді. Алайда, кенеттен бәрі де өзгереді. Сүйіп қосылған күйеуі танымастай өзгеріп, Хуши далада қалады. Уақыт өте жақындарының қолдауымен бойжеткен Алматыға келіп, жұмысқа орналасып, биіктерден көрінеді.</span>
              </p>
              <p className="text text-hidden">
                <span className="bold">Актерский состав:</span> Қос ғашық жасырын үйленіп, шаңырақ көтереді. Алайда, кенеттен бәрі де өзгереді. Сүйіп қосылған күйеуі танымастай өзгеріп, Хуши далада қалады. Уақыт өте жақындарының қолдауымен бойжеткен Алматыға келіп, жұмысқа орналасып, биіктерден көрінеді.
              </p>
              <p className="text text-hidden">
                <span className="bold">Режисерский состав::</span> Қос ғашық жасырын үйленіп, шаңырақ көтереді. Алайда, кенеттен бәрі де өзгереді. Сүйіп қосылған күйеуі танымастай өзгеріп, 
              </p>
              <div className="read-more">
                <Link to="">Читать дальше</Link>
              </div>
              <div className="buy-ticket-btn">
                <Link to="" className="thunderbird-btn">Купить билет</Link>
              </div>
              <div className="other-movies-btn">
                <Link to="">Другие фильмы</Link>
              </div>
            </div>
          </div>
          <div className="tabs-content">
            <h3 className="title">Расписание:</h3>
            <ul className="tabs-content-name schedule tabs-content-name-mod">
              <li className="tab active">сегодня</li>
              <li className="tab">Завтра</li>
              <li className="tab">скоро</li>
            </ul>
            <div className="tabs-item-container schedule tabs-item-container-mod">
              <div className="tab-item">
                <Filter activePanel={"list"} link={"film"} />
                <div className="cinemas-content">
                  {films.map((schedule,index) => this.renderSchedule(schedule,index))}
                </div>
              </div>
              <div className="tab-item">
                <Filter activePanel={"list"} link={"film"} />
                <div className="cinemas-content">
                  {films.map((schedule,index) => this.renderSchedule(schedule,index))}
                </div>
              </div>
              <div className="tab-item">
                <Filter activePanel={"list"} link={"film"} />
                <div className="cinemas-content">
                  {films.map((schedule,index) => this.renderSchedule(schedule,index))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FilmList;