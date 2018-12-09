import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../extra/Filter';
import $ from 'jquery';
import * as actionsMovie from '../../actions/movieActions';
import * as actionsSchedule from '../../actions/scheduleActions';

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


class FilmTable extends Component {

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

    if(index <= 8){
      return(
        <li key={index}>
          <Link to="#" className={time.status ? "session-time " + time.status : "session-time "}>{time.time}</Link>
          {time.quality && <span className="quality">{time.quality}</span>}
        </li>
      )
    }else{
      return(
        <li key={index} className="hidden-block">
          <Link to="#" className={time.status ? "session-time " + time.status : "session-time "}>{time.time}</Link>
          {time.quality && <span className="quality">{time.quality}</span>}
        </li>
      )
    }
  }

  renderSchedule(schedule,index){
    return(
      <div key={index} class="cinema-item-container">
        <div class="cinema-item">
          <div class="title-and-city">
            <h3 class="title">{schedule.cinema}</h3>
            <span class="city">{schedule.city}</span>
          </div>
          <ul class="session-time-list">
            {schedule.sessionTime.map( (time,index) => this.renderTime(time,index))}
          </ul>
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
                <a href="" className="js-movie-trailer">
                  <span className="icon-player"></span>
                  Смотреть трейлер
                </a>
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
                <a href="">Читать дальше</a>
              </div>
              <div className="buy-ticket-btn">
                <a href="" className="thunderbird-btn">Купить билет</a>
              </div>
              <div className="other-movies-btn">
                <a href="">Другие фильмы</a>
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
                <Filter activePanel={"table"} link={"filmlist/"+this.props.match.params.uuid} />
                <div className="cinemas-content">
                  {films.map((schedule,index) => this.renderSchedule(schedule,index))}
                </div>
              </div>
              <div className="tab-item">
                <Filter activePanel={"table"} link={"filmlist/"+this.props.match.params.uuid} />
                <div className="cinemas-content">
                  {films.map((schedule,index) => this.renderSchedule(schedule,index))}
                </div>
              </div>
              <div className="tab-item">
                <Filter activePanel={"table"} link={"filmlist/"+this.props.match.params.uuid} />
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

const mapStateToProps = (state) => ({
  movie_show : state.movie.movie_show,
  schedule : state.schedule.schedule,
})

const mapDispatchToProps = {
  onGetMovieShow : actionsMovie.getMovieShow,
  onGetSchedule : actionsSchedule.getSchedule,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilmTable);