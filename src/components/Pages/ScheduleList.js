import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Filter from '../extra/Filter';
import $ from 'jquery';
import * as actions from '../../actions/scheduleActions';

class ScheduleList extends Component {

  constructor(props){
    super(props);
    this.state = {
      showMore : false,
      dialogFilm : null,
    };
  }

  componentDidMount() {
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

  renderFilmSession(session,index){
    var prices = session.prices.map((price,index) =>
      <span key={index} className="table-column price">{price.price}</span>
    )
    return (
      <li key={index} className="table-row">
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
  renderFilm(film,index){
    return (
      <div key={index} className="films-content">
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
                  <Link to="" className="thunderbird-btn" onClick={this.handleOpenMoreDialog.bind(this,film)}>Подробно о фильме</Link>
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
                { film.sessionTime.map((session,index) => this.renderFilmSession(session,index))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.props.schedule)
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
                <Filter activePanel={"list"} link={"schedule"}/>
                {this.props.schedule.map((film,index) => this.renderFilm(film,index))}
              </div>
              <div className="tab-item">
                <Filter activePanel={"list"} link={"schedule"}/>
                {this.props.schedule.map((film,index) => this.renderFilm(film,index))}
              </div>
              <div className="tab-item">
                <Filter activePanel={"list"} link={"schedule"}/>
                {this.props.schedule.map((film,index) => this.renderFilm(film,index))}
              </div>
            </div>
          </div>
        </div>
        {this.state.showMore && this.renderMoreDialog()}
      </div>
    )
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
)(ScheduleList);