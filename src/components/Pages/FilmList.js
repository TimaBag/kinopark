import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Filter from '../extra/Filter';
import $ from 'jquery';
import * as actionsMovie from '../../actions/movieActions';
import * as actionsSchedule from '../../actions/scheduleActions';

class FilmList extends Component {

  constructor(props){
    super(props);
    this.state = {
      showTrailer : false,
      trailerUrl : ""
    };
    this.handleOpenTrailer = this.handleOpenTrailer.bind(this);
    this.handleCloseTrailer = this.handleCloseTrailer.bind(this);
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
    this.props.onGetSchedule();
    this.props.onGetMovieShow(this.props.match.params.uuid);
  }

  handleOpenTrailer(e,url){
    e.preventDefault();
    this.setState({
      trailerUrl : url,
      showTrailer : true
    })
  }

  handleCloseTrailer(e){
    e.preventDefault();
    this.setState({
      trailerUrl : "",
      showTrailer : false
    })
  }

  renderTime(time,hallName,index){
    var sessionTime = new Date(time.start_time).toTimeString().split(' ')[0].substring(0,5);
    var is_2d = "";
    var is_3d = "";
    var is_imax = ""; 
    if(time.seance_format.is_2d === true){
      is_2d = "2D"
    }
    if(time.seance_format.is_3d === true){
      is_3d = " 3D "
    }
    if(time.seance_format.is_imax === true){
      is_imax = "IMAX"
    }

    return(
      <li key={index} className="table-row">
        <span className="table-column">
          <Link to="" className={time.status ? "session-time " + time.status : "session-time"}>{sessionTime}</Link>
        </span>
        <span className="table-column">
          {time.base_price}
        </span>
        <span className="table-column"></span>
        <span className="table-column">
          <span className="auditorium"><strong>{hallName}</strong>{time.hall_format}</span>
        </span>
        <span className="table-column"><span className="format">{time.format}</span></span>
        <span className="table-column"><Link to={"/reservation/"+time.uuid} className="buy-ticket thunderbird-btn">Купить билет</Link></span>
      </li>
    )
  }

  renderSchedule(schedule,cityName,cinemaName,hallName,index){
    var newData = [];
    var SeancesData = Object.keys(schedule.Seances).map(function(key) {
      newData.push(schedule.Seances[key]);
    });
    newData.sort(function(a,b){
      return a.start_time.localeCompare(b.start_time);
    });
    return(
      <div key={index} className="cinema-item-container list">
        <div className="cinema-item">
          <div className="title-and-city">
            <h3 className="title">{cinemaName}</h3>
            <span className="city">{cityName}</span>
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
              {newData.map((data,index) => this.renderTime(data,hallName,index))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderHalls(items,cityName,cinemaName,hallName){
    var newData = [];
    var hallData = Object.keys(items).map(function(key) {
      newData.push(items[key]);
    });
    return(
      <div>
        {newData.map((data,index) => this.renderSchedule(data,cityName,cinemaName,hallName,index))}
      </div>
    )
  }
  renderCinema(items,cityName,cinemaName){
    var newData = [];
    var hallNames = [];
    var cinemaData = Object.keys(items).map(function(key) {
      hallNames.push(items[key].name);
      newData.push(items[key].Movies);
    });
    return(
      <div>
        {newData.map((data,index) => this.renderHalls(data,cityName,cinemaName,hallNames[index]))}
      </div>
    )
  }
  renderCity(items,cityName){
    var newData = [];
    var cinemaNames = [];
    var cityData = Object.keys(items).map(function(key) {
      cinemaNames.push(items[key].name);
      newData.push(items[key].Halls);
    });
    return(
      <div>
        {newData.map((data,index) => this.renderCinema(data,cityName,cinemaNames[index]))}
      </div>
    )
  }

  renderFilmTrailer(){
    var trailerLink = this.state.trailerUrl.replace("watch?v=", "embed/");
    return(
      <div className="modal-container modal-container-2">
        <div className="modal-popup-movie-trailer">
          <iframe width={520} height={340} src={trailerLink} frameBorder="0" allowFullScreen></iframe>
          <div className="modal-close" onClick={(e) => this.handleCloseTrailer(e)}>&#215;</div>
        </div>
      </div>
    )
  }

  render() {
    const schedule = this.props.schedule;
    const movieFilm = this.props.movie_show;
    var newData = [];
    var cityNames = []
    var scheduleCinema = Object.keys(schedule).map(function(key) {
      newData.push(schedule[key].Cinemas);
      cityNames.push(schedule[key].name);
    });
    let date  = new Date(movieFilm.release_date);
    let year = date.toLocaleDateString("ru-RU",{year: 'numeric'});
    let release_date = date.toLocaleDateString("ru-RU",{year: 'numeric', day: 'numeric', month: 'long'});
    return (
      <div className="content">
        <div className="container">
          <h1 className="title-mod">{movieFilm.name}</h1>
          <div className="film-detailed-container">
            <div className="film-detailed-img">
              {movieFilm.age_limitation && <div className="age">{movieFilm.age_limitation}</div>}
              <img src={movieFilm.poster_path} alt="alt" />
              <div className="watch-trailer">
                <div className="js-movie-trailer" onClick={(e) => this.handleOpenTrailer(e,movieFilm.trailer_link_ru)}>
                  <span className="icon-player"></span>
                  Смотреть трейлер
                </div>
              </div>
            </div>
            <div className="film-detailed-desc">
              <ul className="film-characteristics">
                <li><span className="bold">Год:</span> {year}</li>
                <li><span className="bold">Премьера:</span> {release_date}</li>
                <li><span className="bold">Продолжительность:</span> {movieFilm.duration} мин.</li>
                <li><span className="bold">Страна:</span> {movieFilm.country}</li>
                <li><span className="bold">Жанр:</span> {movieFilm.genre_text}</li>
                <li><span className="bold">Ограничение по возрасту:</span> {movieFilm.age_limitation}</li>
              </ul>
              <p className="text">
                <span className="bold">Описание:</span> {movieFilm.description}
              </p>
              <p className="text text-hidden">
                <span className="bold">Актерский состав:</span> {movieFilm.actors}
              </p>
              <p className="text text-hidden">
                <span className="bold">Режисерский состав:</span> {movieFilm.directors}
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
                <Filter activePanel={"list"} link={"filmtable/"+this.props.match.params.uuid} />
                <div className="cinemas-content">
                  {newData.map((data,index) => this.renderCity(data,cityNames[index]))}
                </div>
              </div>
              <div className="tab-item">
                <Filter activePanel={"list"} link={"filmtable/"+this.props.match.params.uuid}/>
                <div className="cinemas-content">
                  {newData.map((data,index) => this.renderCity(data,cityNames[index]))}
                </div>
              </div>
              <div className="tab-item">
                <Filter activePanel={"list"} link={"filmtable/"+this.props.match.params.uuid}/>
                <div className="cinemas-content">
                  {newData.map((data,index) => this.renderCity(data,cityNames[index]))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showTrailer && this.renderFilmTrailer()}
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
)(FilmList);