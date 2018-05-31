import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftSidebar from '../extra/LeftSidebar';
import Slider from '../extra/Slider';
import NewsBlock from '../extra/NewsBlock';
import $ from 'jquery';
import * as actionsMovie from '../../actions/movieActions';


class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      showMore : false,
      dialogFilm : null,
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
    this.props.onGetMovie();
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
    /*const listFormat = dialogFilm.qualities.map( (quality) =>
      <li>{quality.format}</li>
    )*/
    return(
      <div className="modal-container">
        <div className="modal-popup-film">
          <h2 className="title">{dialogFilm.name}</h2>
          <div className="modal-popup-content">
            <div className="modal-popup-left">
              <div className="modal-popup-img">
                <div className="age">{dialogFilm.age_limitation}</div>
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
                <li><span className="bold">Премьера:</span> {dialogFilm.release_date}</li>
                <li><span className="bold">Продолжительность:</span> {dialogFilm.duration}</li>
                <li><span className="bold">Страна:</span> {dialogFilm.country}</li>
                <li><span className="bold">Жанр:</span> {dialogFilm.genre_text}</li>
                <li>
                  <span className="bold">Формат:</span>
                  <ul className="film-format">
                    {/*listFormat*/}
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
                <Link to="">Расписание</Link>
              </div>
            </div>
          </div>
          <div className="modal-close" onClick={this.handleCloseMoreDialog.bind(this)}>&#215;</div>
        </div>
      </div>
    )
  }

  renderFilm(film,index){
    /*var qualities = film.qualities;
    const listFormat = qualities.map( (quality,index) => 
      <li key={index}>{quality.format}</li>
    )
    const listSession = film.sessionTime.map((session,index) => 
      <li key={index}>
        <Link to="#" className={"session-time " + session.status}>{session.time}</Link>
        <span className="quality">{session.quality}</span>
      </li>
    )*/
    return (
      <div key={index} className="film-item-container main">
        <div className="film-item">
          <div className="age">{film.age_limitation}</div>
          <div className="item-img">
            <Link to=""></Link>
            <img src={require("../../img/static/film/01.jpg")} alt="alt"/>
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
          <ul className="film-format">
            {/*listFormat*/}
          </ul>
          <h4 className="title"><Link to="">{film.name}</Link></h4>
          <div className="view-all-sessions">
            <Link to="#" className="js-view-all-sessions">Смотреть все сеансы</Link>
          </div>
          <ul className="session-time-list">
            {/*listSession*/}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    return (
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
                        {this.props.movie && this.props.movie.map((film,index) => this.renderFilm(film,index))}
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="films-content">
                        {this.props.movie && this.props.movie.map((film,index) => this.renderFilm(film,index))}
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="films-content">
                        {this.props.movie && this.props.movie.map((film,index) => this.renderFilm(film,index))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showMore && this.renderMoreDialog()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie : state.movie.movie
})

const mapDispatchToProps = {
  onGetMovie : actionsMovie.getMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
