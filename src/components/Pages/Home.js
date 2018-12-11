import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftSidebar from '../extra/LeftSidebar';
import Slider from '../extra/Slider';
import moment from 'moment';
import $ from 'jquery';

import * as actionsMovie from '../../actions/movieActions';


const today = moment().format("YYYY-MM-DD");
const tomorrow = moment().add(1,"day").format("YYYY-MM-DD");

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      showMore : false,
      dialogFilm : null,
      showTrailer : false,
      trailerUrl : "",
    };
    this.handlePrevPageClick = this.handlePrevPageClick.bind(this);
    this.handleNextPageClick = this.handleNextPageClick.bind(this);
    this.handleTomorrowPrevPageClick = this.handleTomorrowPrevPageClick.bind(this);
    this.handleTomorrowNextPageClick = this.handleTomorrowNextPageClick.bind(this);
    this.handleSoonPrevPageClick = this.handleSoonPrevPageClick.bind(this);
    this.handleSoonNextPageClick = this.handleSoonNextPageClick.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleTomorrowPageClick = this.handleTomorrowPageClick.bind(this);
    this.handleSoonPageClick = this.handleSoonPageClick.bind(this);
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

    this.props.onGetMovie(1,today);
    this.props.onGetMovieTomorrow(1,tomorrow);
    this.props.onGetMovieSoon(1);
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

  handlePageClick(e,page){
    e.preventDefault();
    this.props.onGetMovie(page,"");
  }

  handleTomorrowPageClick(e,page){
    e.preventDefault();
    this.props.onGetMovieTomorrow(page,"");
  }

  handleSoonPageClick(e,page){
    e.preventDefault();
    this.props.onGetMovieSoon(page);
  }

  handleNextPageClick(e,page){
    e.preventDefault();
    this.props.onGetMovie(page+1,"");
  }
  handlePrevPageClick(e,page){
    e.preventDefault();
    this.props.onGetMovie(page-1,"");
  }
  handleTomorrowNextPageClick(e,page){
    e.preventDefault();
    this.props.onGetMovieTomorrow(page+1,"");
  }

  handleTomorrowPrevPageClick(e,page){
    e.preventDefault();
    this.props.onGetMovieTomorrow(page-1,"");
  }
  handleSoonNextPageClick(e,page){
    e.preventDefault();
    this.props.onGetMovieSoon(page+1);
  }

  handleSoonPrevPageClick(e,page){
    e.preventDefault();
    this.props.onGetMovieSoon(page-1);
  }

  renderFilmTrailer(){
    var trailerLink = this.state.trailerUrl.replace("watch?v=", "embed/");
    return(
      <div className="modal-container modal-container-2">
        <div className="modal-popup-movie-trailer">
          <iframe title="movie iframe" width={520} height={340} src={trailerLink} frameBorder="0" allowFullScreen></iframe>
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
                {(dialogFilm.age_limitation && dialogFilm.age_limitation.length !== 0) && <div className="age">{dialogFilm.age_limitation}</div>}
                <img src={dialogFilm.image} alt="alt" />
                <div className="watch-trailer">
                  <Link to="" className="js-movie-trailer" onClick={(e) => this.handleOpenTrailer(e,dialogFilm.trailer_link)}>
                    <span className="icon-player"></span>
                    Смотреть трейлер
                  </Link>
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

  renderPage(pages,cur_pages){
    const dataPages = [];
    for(let i = 1; i <= parseInt(pages, 10); i++){

      dataPages.push(<li key={i}>
        <Link to="" 
          className={cur_pages === i ? "active" : ""} 
          onClick={(e) =>this.handlePageClick(e,i)}
        >{i}</Link>
      </li>)
    }
    return dataPages;
  }

  renderPageTomorrow(pages,cur_pages){
    const dataPages = [];
    for(let i = 1; i <= parseInt(pages, 10); i++){

      dataPages.push(<li key={i}>
        <Link to="" 
          className={cur_pages === i ? "active" : ""} 
          onClick={(e) =>this.handleTomorrowPageClick(e,i)}
        >{i}</Link>
      </li>)
    }
    return dataPages;
  }

  renderPageSoon(pages,cur_pages){
    const dataPages = [];
    for(let i = 1; i <= parseInt(pages, 10); i++){

      dataPages.push(<li key={i}>
        <Link to="" 
          className={cur_pages === i ? "active" : ""} 
          onClick={(e) =>this.handleSoonPageClick(e,i)}
        >{i}</Link>
      </li>)
    }
    return dataPages;
  }

  renderFilm(film,index){
    return (
      <div key={index} className="film-item-container main">
        <div className="film-item" data-uuid={film.uuid}>
          {(film.age_limitation && film.age_limitation.length !== 0) && <div className="age">{film.age_limitation}</div>}
          {film.seance_format && film.seance_format.is_original_version && <div className="version">Original Ver</div>}
          <div className="item-img">
            <Link to=""></Link>
            <img src={film.image} alt="alt"/>
            <div className="item-hidden-block">
              <div className="watch-trailer">
                <Link to="" className="js-movie-trailer" onClick={(e) => this.handleOpenTrailer(e,film.trailer_link)}>
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
          <h4 className="title"><Link to={"filmlist/"+film.uuid}>{film.name}</Link></h4>
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
    console.log(tomorrow);
    return (
      <div className="content-end-sidebar">
        <div className="container">
          <Slider media="tablet" />
          <div className="row">
            <LeftSidebar />
            <div className="column-right">
              <div className="content">
                <Slider media="desktop" />
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
                      <div className="wrapper-pagination">
                        <ul className="main-pagination clearfix">
                          <li className={"backward " + (this.props.movieCurrentPage !== 1 ? "" : "disabled")}>
                            <Link to="" onClick={(e) => this.handlePrevPageClick(e,this.props.movieCurrentPage)}>
                              <em className="fa fa-angle-left"></em>
                            </Link>
                          </li>
                          { 
                            this.renderPage(this.props.moviePages,this.props.movieCurrentPage)
                          }
                          <li className={"forward " + (this.props.movieCurrentPage !== this.props.moviePages ? "" : "disabled")}>
                            <Link to="" onClick={(e) => this.handleNextPageClick(e,this.props.movieCurrentPage)}> 
                              <em className="fa fa-angle-right"></em>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="films-content">
                        {this.props.movie_tomorrow && this.props.movie_tomorrow.map((film,index) => this.renderFilm(film,index))}
                      </div>
                      <div className="wrapper-pagination">
                        <ul className="main-pagination clearfix">
                          <li className={"backward " + (this.props.movieTomorrowCurrentPage !== 1 ? "" : "disabled")}>
                            <Link to="" onClick={(e) => this.handleTomorrowPrevPageClick(e,this.props.movieTomorrowCurrentPage)}>
                              <em className="fa fa-angle-left"></em>
                            </Link>
                          </li>
                          { 
                            this.renderPageTomorrow(this.props.movieTomorrowPages,this.props.movieTomorrowCurrentPage)
                          }
                          <li className={"forward " + (this.props.movieTomorrowCurrentPage !== this.props.movieTomorrowPages ? "" : "disabled")}>
                            <Link to="" onClick={(e) => this.handleTomorrowNextPageClick(e,this.props.movieTomorrowCurrentPage)}> 
                              <em className="fa fa-angle-right"></em>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tab-item">
                      <div className="films-content">
                        {this.props.movie_soon && this.props.movie_soon.map((film,index) => this.renderFilm(film,index))}
                      </div>
                      <div className="wrapper-pagination">
                        <ul className="main-pagination clearfix">
                          <li className={"backward " + (this.props.movieSoonCurrentPage !== 1 ? "" : "disabled")}>
                            <Link to="" onClick={(e) => this.handleSoonPrevPageClick(e,this.props.movieSoonCurrentPage)}>
                              <em className="fa fa-angle-left"></em>
                            </Link>
                          </li>
                          { 
                            this.renderPageSoon(this.props.movieSoonPages,this.props.movieSoonCurrentPage)
                          }
                          <li className={"forward " + (this.props.movieSoonCurrentPage !== this.props.movieSoonPages ? "" : "disabled")}>
                            <Link to="" onClick={(e) => this.handleSoonNextPageClick(e,this.props.movieSoonCurrentPage)}> 
                              <em className="fa fa-angle-right"></em>
                            </Link>
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
        {this.state.showMore && this.renderMoreDialog()}
        {this.state.showTrailer && this.renderFilmTrailer()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie : state.movie.movie,
  movie_tomorrow : state.movie.movie_tomorrow,
  movie_soon : state.movie.movie_soon,
  movieSoonPages : state.movie.movieSoonPages,
  movieTomorrowPages : state.movie.movieTomorrowPages,
  moviePages : state.movie.moviePages,
  movieCurrentPage : state.movie.movieCurrentPage,
  movieTomorrowCurrentPage : state.movie.movieTomorrowCurrentPage,
  movieSoonCurrentPage : state.movie.movieSoonCurrentPage,
})

const mapDispatchToProps = {
  onGetMovie : actionsMovie.getMovie,
  onGetMovieTomorrow : actionsMovie.getMovieTomorrow,
  onGetMovieSoon : actionsMovie.getMovieSoon,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);