import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionsMovie from '../../actions/movieActions';

class Soon extends Component {

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
    this.props.onGetMovieSoon();
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
    let date  = new Date(dialogFilm.release_date);
    let year = date.toLocaleDateString("ru-RU",{year: 'numeric'});
    let release_date = date.toLocaleDateString("ru-RU",{year: 'numeric', day: 'numeric', month: 'long'});
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
                {dialogFilm.age_limitation.length !== 0 && <div className="age">{dialogFilm.age_limitation}</div>}
                <img src={require("../../img/static/modal-popup/01.jpg")} alt="alt" />
                  <div className="watch-trailer">
                    <Link to="" className="js-movie-trailer" onClick={(e) => this.handleOpenTrailer(e,dialogFilm.trailer_link_ru)}>
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
                <li><span className="bold">Год:</span> {year}</li>
                <li><span className="bold">Премьера:</span> {release_date}</li>
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

  renderFilm(film){
    /*const listFormat = film.qualities.map( (quality) => 
      <li>{quality.format}</li>
    )*/
    let date  = new Date(film.release_date);
    let release_date = date.toLocaleDateString("ru-RU",{year: 'numeric', day: 'numeric', month: 'long'});
    return(
      <div className="film-item-container table container-mod">
        <div className="film-item">
          {film.age_limitation.length !== 0 && <div className="age">{film.age_limitation}</div>}
          <div className="item-img">
            <img src={require("../../img/static/film/01.jpg")} alt="alt" />
            <div className="item-hidden-block">
              <div className="watch-trailer">
                <Link to="" className="js-movie-trailer" onClick={(e) => this.handleOpenTrailer(e,film.trailer_link_ru)}>
                  <span className="icon-player"></span>
                  Смотреть трейлер
                </Link>
              </div>
              <div className="more-about-movie">
                <button className="thunderbird-btn" onClick={this.handleOpenMoreDialog.bind(this,film)}>Подробно о фильме</button>
              </div>
            </div>
          </div>
          <ul className="film-format">
            {/*listFormat*/}
          </ul>
          <h4 className="title"><Link to="">{film.name}</Link></h4>
          <div className="date">{release_date}</div>
        </div>
      </div>
    )
  }

  render() {
    return (
        <div className="content">
          <div className="container">
            <h1>Скоро</h1>
            <div className="films-content">
              {this.props.movie_soon.map((film) => this.renderFilm(film))}
            </div>
          </div>
          {this.state.showMore && this.renderMoreDialog()}
          {this.state.showTrailer && this.renderFilmTrailer()}
        </div>
      )
  }
}

const mapStateToProps = (state) => ({
  movie_soon : state.movie.movie_soon,
  movieSoonPages : state.movie.movieSoonPages,
  movieSoonCurrentPage : state.movie.movieSoonCurrentPage,
})

const mapDispatchToProps = {
  onGetMovieSoon : actionsMovie.getMovieSoon,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Soon);