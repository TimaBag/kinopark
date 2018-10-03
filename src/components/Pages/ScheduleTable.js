import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../extra/Filter';
import $ from 'jquery';
import _ from 'lodash';
import * as actions from '../../actions/scheduleActions';

class ScheduleTable extends Component {

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
    if($(window).width() < 768){
      $('.js-view-all-sessions').text("Сеансы");
    }
    $('.js-view-all-sessions').on("click", function() {
      if($(window).width() > 768){
         if ($(this).html() == 'Свернуть сеансы') {
          $(this).parents('.film-item').find('.hidden-block').removeClass('visible-block')
          $(this).text('Смотреть все сеансы');
        } else {
          $(this).parents('.film-item').find('.hidden-block').addClass('visible-block')
          $(this).text('Свернуть сеансы');
        }
      } else{
          $('.film-item-container .session-time-list').slideUp()
          $(this).parents('.film-item-container').siblings().find('.view-all-sessions a').text('Сеансы');
          $(this).parents('.film-item-container').siblings().find('.view-all-sessions').css('backgroundColor','#C42121');
         if ($(this).html() == 'Спрятать сеансы') {
          $(this).parents('.film-item-container').find('.session-time-list').slideUp()
          $(this).text('Сеансы');
          $(this).parent().css('backgroundColor','#C42121')
        } else {
          $(this).parents('.film-item-container').find('.session-time-list').slideDown()
          $(this).text('Спрятать сеансы');
          $(this).parent().css('backgroundColor','#000')
        }
      }
     
      return false;
    });
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

  renderFilmSession(session,hallName,index){
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
    if(index <= 8){
      return(
        <li key={index}>
          <Link to="#" className={session.status ? "session-time " + session.status : "session-time "}>{sessionTime}</Link>
          {session.quality && <span className="quality">{session.quality}</span>}
        </li>
      )
    }else{
      return(
        <li key={index} className="hidden-block">
          <Link to="#" className={session.status ? "session-time " + session.status : "session-time "}>{sessionTime}</Link>
          {session.quality && <span className="quality">{session.quality}</span>}
        </li>
      )
    }
  }

  renderFilm(film,cityName,cinemaName,hallName){
    var newData = [];
    var SeancesData = Object.keys(film.Seances).map(function(key) {
      newData.push(film.Seances[key]);
    });

    newData.sort(function(a,b){
      return a.start_time.localeCompare(b.start_time);
    });
    
    return(
      <div className="film-item-container table">
        <div className="film-item">
          <div className="item-img">
            <Link to=""></Link>
            {film.age_limitation && film.age_limitation.length !== 0 && <div className="age">{film.age_limitation}</div>}
            {film.version &&film.version.length !== 0 && <div className="version">{film.version}</div>}
            <img src={film.poster_path} alt="alt"/>
            <div className="title-and-cinema-city">
              <h4 className="title"><Link to={"filmlist/"+film.uuid}>{film.name}</Link></h4>
              <ul className="cinema-city">
                <li className="cinema">{cinemaName}</li>
                <li className="city">{cityName}</li>
              </ul>
            </div>
            <div className="item-hidden-block">
              <div className="watch-trailer">
                <div className="js-movie-trailer" onClick={(e) => this.handleOpenTrailer(e,film.trailer_link_ru)}>
                  <span className="icon-player"></span>
                  Смотреть трейлер
                </div>
              </div>
              <div className="more-about-movie">
                <button to="" className="thunderbird-btn" onClick={this.handleOpenMoreDialog.bind(this,film)}>Подробно о фильме</button>
              </div>
            </div>
          </div>
          <div className="item-desc">
            <h4 className="title mobile"><Link to={"filmlist/"+film.uuid}>{film.name}</Link></h4>
            <div className="view-all-sessions mobile">
              <div className="js-view-all-sessions">Смотреть все сеансы</div>
            </div>
            <ul className="cinema-city mobile">
              <li className="cinema">{cinemaName}</li>
              <li className="city">{cityName}</li>
            </ul>

            <ul className="session-time-list">
              {newData.map((data,index) => this.renderFilmSession(data,hallName,index))}
            </ul>
            { newData.length > 9 &&
              <div className="view-all-sessions desktop">
                <div className="js-view-all-sessions">Смотреть все сеансы</div>
              </div>
            }
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
    return newData.map((data,index) => this.renderFilm(data,cityName,cinemaName,hallName))
  }
  renderCinema(items,cityName,cinemaName){
    var newData = [];
    var hallNames = [];
    var cinemaData = Object.keys(items).map(function(key) {
      hallNames.push(items[key].name);
      newData.push(items[key].Movies);
    });
    return(
      <div className="cinema_block films-content">
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
      <div className="city_block">
        {newData.map((data,index) => this.renderCinema(data,cityName,cinemaNames[index]))}
      </div>
    )
  }
  render() {
    if(this.props.schedule.length !== 0){
      const schedule = this.props.schedule;
      var newData = [];
      var cityNames = []
      var scheduleCinema = Object.keys(schedule).map(function(key) {
        newData.push(schedule[key].Cinemas);
        cityNames.push(schedule[key].name);
      });
      return (
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
                  <Filter activePanel={"table"} link={"schedulelist"}/>
                  <div className="films-content">
                    {newData.map( (data,index) => this.renderCity(data,cityNames[index]) )}
                  </div>
                </div>
                <div className="tab-item">
                  <Filter activePanel={"table"} link={"schedulelist"}/>
                  <div className="films-content">
                    {newData.map( (data,index) => this.renderCity(data,cityNames[index]) )}               
                  </div>
                </div>
                <div className="tab-item">
                  <Filter activePanel={"table"} link={"schedulelist"}/>
                  <div className="films-content">
                    {newData.map( (data,index) => this.renderCity(data,cityNames[index]) )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.showMore && this.renderMoreDialog()}
          {this.state.showTrailer && this.renderFilmTrailer()}
        </div>
      )
    }else{
      return(
        <div className="content">
          <div className="container">
            <h1>Расписание загружается</h1> 
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  schedule : state.schedule.schedule,
})

const mapDispatchToProps = {
  onGetSchedule : actions.getSchedule,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleTable);