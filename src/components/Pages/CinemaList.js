import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FilterFilm from '../extra/FilterFilm';
import SliderSlick from "react-slick";
import $ from 'jquery';
import _ from 'lodash';
import Loader from 'react-loader';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import * as actions from '../../actions/cinemaActions';
import * as actionsCity from '../../actions/cityActions';
import * as actionsSchedule from '../../actions/scheduleActions';

const settings = {
  initialSlide: 0,
  slidesToShow: 1,
  dots: false,
  arrows: true,
  // infinite: false,
  autoplay: true,
  autoplaySpeed: 7000,
  slidesToScroll: 1
}

class CinemaList extends Component {

  constructor(props){
    super(props);
    this.state = {
      showMore : false,
      dialogFilm : null,
      showTrailer : false,
      trailerUrl : "",
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

    let data = {
      city : this.props.match.params.city_uuid,
      cinema : this.props.match.params.uuid,
    }
    this.props.onGetScheduleFilter(data);
    this.props.onGetCinemaShow(this.props.match.params.uuid);
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

  renderMoreDialog(){
    const {dialogFilm} = this.state;
    var seanceFormat = [];
    var hallFormat = []
    let date  = new Date(dialogFilm.release_date);
    let year = date.toLocaleDateString("ru-RU",{year: 'numeric'});
    let release_date = date.toLocaleDateString("ru-RU",{year: 'numeric', day: 'numeric', month: 'long'});
    /*if(dialogFilm.seance_format !== undefined){
      console.log(dialogFilm.seance_format);
      seanceFormat = dialogFilm.seance_format.map( (format) =>
        {format.is_2d && <li>2D</li>}
      )
    }
    if(dialogFilm.hall_format !== undefined){
      hallFormat = dialogFilm.hall_format.map( (format) =>
        {format.is_laser && <li>Laser</li>}
      )
    }*/
    return(
      <div className="modal-container">
        <div className="modal-popup-film">
          <h2 className="title">{dialogFilm.name}</h2>
          <div className="modal-popup-content">
            <div className="modal-popup-left">
              <div className="modal-popup-img">
                {dialogFilm.age_limitation.length !== 0 && <div className="age">{dialogFilm.age_limitation}</div>}
                <img src={dialogFilm.poster_path} alt="alt" />
                <div className="watch-trailer">
                  <div className="js-movie-trailer" onClick={(e) => this.handleOpenTrailer(e,dialogFilm.trailer_link_ru)}>
                    <span className="icon-player"></span>
                    Смотреть трейлер
                  </div>
                </div>
              </div>
              <div className="modal-popup-buy-ticket">
                <Link to={"filmlist/"+dialogFilm.uuid} className="thunderbird-btn">Купить билет</Link>
              </div>
            </div>
            <div className="modal-popup-desc">
              <ul className="film-characteristics">
                <li><span className="bold">Год:</span> {year}</li>
                <li><span className="bold">Премьера:</span> {release_date}</li>
                <li><span className="bold">Продолжительность:</span> {dialogFilm.duration}</li>
                <li><span className="bold">Страна:</span> {dialogFilm.country}</li>
                <li><span className="bold">Жанр:</span> {dialogFilm.genre_text}</li>
                <li>
                  <span className="bold">Формат:</span>
                  <ul className="film-format">
                    {seanceFormat}
                    {hallFormat}
                  </ul>
                </li>
                <li><span className="bold">Ограничение по возрасту:</span> до {dialogFilm.age_limitation}</li>
                <li><span className="bold">Индекс фильма:</span> "БА" - фильмы, разрешенные для показа детям, достигшим двенадцати лет</li>
              </ul>
              <p className="text">
                <span className="bold">Описание:</span> {dialogFilm.description}
              </p>
              <p className="text">
                <span className="bold">Актерский состав:</span> {dialogFilm.actors}
              </p>
              <p className="text">
                <span className="bold">Режисерский состав::</span> {dialogFilm.directors}
              </p>
              <div className="schedule-btn">
                <Link to={"filmlist/"+dialogFilm.uuid}>Расписание</Link>
              </div>
            </div>
          </div>
          <div className="modal-close" onClick={this.handleCloseMoreDialog.bind(this)}>&#215;</div>
        </div>
      </div>
    )
  }

  renderFilmSession(session,hallName){
    var sessionTime = new Date(session.start_time).toTimeString().split(' ')[0].substring(0,5);
    var is_2d = "";
    var is_3d = "";
    var is_imax = ""; 
    if(session.seance_format.is_2d === true){
      is_2d = "2D"
    }
    if(session.seance_format.is_3d === true){
      is_3d = " 3D "
    }
    if(session.seance_format.is_imax === true){
      is_imax = "IMAX"
    }
    /*создать hallFormat session-time.hall_format;*/
    return (
      <li className="table-row">
        <span className="table-column">
          <Link to="" className={session.status ? "session-time " + session.status : "session-time"}>{sessionTime}</Link>
          {session.quality !== undefined && <span className="quality">{session.quality}</span>}
        </span>
        <span className="table-column">
          <span className="table-column price">{session.base_price}</span>
        </span>
        <span className="table-column"></span>
        <span className="table-column">
          <span className="auditorium"><strong>{hallName}</strong></span>
        </span>
        <span className="table-column"><span className="format">{is_2d + is_3d + is_imax }</span></span>
        <span className="table-column"><Link to={"/reservation/"+session.uuid} className={session.status ? "buy-ticket thunderbird-btn " + session.status : "buy-ticket thunderbird-btn"} >Купить билет</Link></span>
    </li>

    )
  }

  renderFilm(film,cityName,cinemaName,hallName){
    var newData = [];
    var SeancesData = Object.keys(film.Seances).map(function(key) {
      newData.push(film.Seances[key]);
    });
    newData.sort(function(a,b){
      return a.start_time.localeCompare(b.start_time);
    });
    return (
      <div className="films-content">
        <div className="film-item-container list">
          <div className="film-item">
            <div className="item-top-panel">
              <h4 className="title"><Link to={`/filmlist/${film.uuid}`}>{film.name}</Link></h4>
            </div>
            <div className="item-img">
              <h4 className="title mobile"><Link to={`/filmlist/${film.uuid}`}>{film.name}</Link></h4>
              {film.age_limitation && <div className="age">{film.age_limitation}</div>}
              {film.version && <div className="version">{film.version}</div>}
              <img src={film.poster_path} alt="alt" />
              <div className="item-hidden-block">
                <div className="watch-trailer">
                  <div className="js-movie-trailer" onClick={(e) => this.handleOpenTrailer(e,film.trailer_link_ru)}>
                    <span className="icon-player"></span>
                    Смотреть трейлер
                  </div>
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
                {newData.map((data) => this.renderFilmSession(data,hallName))}
              </ul>
            </div>
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
        {newData.map((data,index) => this.renderFilm(data,cityName,cinemaName,hallName))}
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

  render() {
    const cinema = this.props.cinema_show;
    console.log(cinema);
    const schedule = this.props.schedule;
    const city_uuid = this.props.match.params.city_uuid;
    const cinema_uuid = this.props.match.params.uuid;
    var newData = [];
    var cityNames = []
    var scheduleCinema = Object.keys(schedule).map(function(key) {
      newData.push(schedule[key].Cinemas);
      cityNames.push(schedule[key].name);
    });
    return (
      <div className="content">
        <div className="container">
          <div className="cinena-title-and-city">
            <h1 className="title">{cinema.name}</h1>
            {cinema.city && <span className="city">{cinema.city.name}</span>}
          </div>
          <div className="cinema-detailed-container">
            {/*фотки для слайдер*/}
            <SliderSlick className="cinema-img-slider" {...settings}>
              <div className="slide-item">
                <img src={require("../../img/static/movie-house/big/01.jpg")} alt="alt" />
              </div>
              <div className="slide-item">
                <img src={require("../../img/static/movie-house/big/01.jpg")} alt="alt" />
              </div>
            </SliderSlick>

            <div className="cinema-detailed-desc">
              <ul className="item-desc-list">
                <li className="list-item-icon">
                  <i className="fa fa-map-marker"></i><a href="">{cinema.address}</a>
                </li>
                <li className="list-item-icon">
                  <i className="fa fa-phone"></i><span className="phone-number">{cinema.phone}</span>
                </li>
                <li className="list-item-icon">
                  <i className="fa fa-calendar"></i><a href="">Сеансы</a>
                </li>
                {/*<li>
                  <ul className="format-list">
                    <li>
                      <img src={require("../../img/static/format/01.jpg")} alt="alt" />
                    </li>
                    <li>
                      <img src={require("../../img/static/format/02.jpg")} alt="alt" />
                    </li>
                    <li>
                      <img src={require("../../img/static/format/03.jpg")} alt="alt" />
                    </li>
                    <li>
                      <img src={require("../../img/static/format/04.jpg")} alt="alt" />
                    </li>
                  </ul>
                </li>*/}
                <li className="list-item-icon">
                  <i className="fa fa-star"></i><a href="">Спец. предложения</a>
                </li>
                {/*<li>
                  <ul className="restaurants-list">
                    <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                    <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                    <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                    <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                  </ul>
                </li>*/}
              </ul>
              <ul className="item-desc-list">
                <li>
                  <strong>Описание:</strong>
                  { ReactHtmlParser(cinema.description) }
                </li>
                
              </ul>
              
            </div>
          </div>
          <h2>Расписание</h2>
          <div className="tabs-content">
            <ul className="tabs-content-name schedule">
              <li className="tab active">сегодня</li>
              <li className="tab">Завтра</li>
              <li className="tab">скоро</li>
            </ul>
            <div className="tabs-item-container schedule">
              <div className="tab-item">
                <FilterFilm cinema={cinema_uuid} city={city_uuid} activePanel="list" link={"cinematable/city/"+city_uuid+"/id/"+cinema_uuid+"/"}/>
                <Loader loaded={schedule.length !== 0}>
                  {Object.keys(schedule).length === 0 ?
                    <h1>Расписание нету</h1> 
                    :
                    newData.map((data,index) => this.renderCity(data,cityNames[index]))
                  }
                </Loader>
              </div>
              <div className="tab-item">
                <FilterFilm cinema={cinema_uuid} city={city_uuid} activePanel="list" link={"cinematable/city/"+city_uuid+"/id/"+cinema_uuid+"/"}/>
                <Loader loaded={schedule.length !== 0}>
                  {Object.keys(schedule).length === 0 ?
                    <h1>Расписание нету</h1> 
                    :
                    newData.map((data,index) => this.renderCity(data,cityNames[index]))
                  }
                </Loader>
              </div>
              <div className="tab-item">
                <FilterFilm cinema={cinema_uuid} city={city_uuid} activePanel="list" link={"cinematable/city/"+city_uuid+"/id/"+cinema_uuid+"/"}/>
                <Loader loaded={schedule.length !== 0}>
                  {Object.keys(schedule).length === 0 ?
                    <h1>Расписание нету</h1> 
                    :
                    newData.map((data,index) => this.renderCity(data,cityNames[index]))
                  }
                </Loader>
              </div>
            </div>
          </div>
        </div>
        {this.state.showMore && this.renderMoreDialog()}
        {this.state.showTrailer && this.renderFilmTrailer()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cinema_show : state.cinema.cinema_show,
  schedule : state.schedule.schedule
})

const mapDispatchToProps = {
  onGetCinemaShow : actions.getCinemaShow,
  onGetScheduleFilter : actionsSchedule.getScheduleFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CinemaList); 