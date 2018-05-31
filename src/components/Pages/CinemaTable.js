import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilterFilm from '../extra/FilterFilm';
import $ from 'jquery';
import SliderSlick from "react-slick";

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

class CinemaTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      showMore : false,
      dialogFilm : null,
    };
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
    if(index <= 8){
      return(
        <li key={index}>
          <Link to="#" className={session.status ? "session-time " + session.status : "session-time "}>{session.time}</Link>
          {session.quality && <span className="quality">{session.quality}</span>}
        </li>
      )
    }else{
      return(
        <li key={index} className="hidden-block">
          <Link to="#" className={session.status ? "session-time " + session.status : "session-time "}>{session.time}</Link>
          {session.quality && <span className="quality">{session.quality}</span>}
        </li>
      )
    }
  }

  renderFilm(film,index){
    return(
      <div key={index} className="film-item-container table">
        <div className="film-item">
          <div className="item-img">
            <Link to=""></Link>
            <div className="age">{film.age}</div>
            <div className="version">{film.version}</div>
            <img src={require("../../img/static/film/01.jpg")} alt="alt"/>
            <div className="title-and-cinema-city">
              <h4 className="title"><Link to="#">{film.title}</Link></h4>
              <ul className="cinema-city">
                <li className="cinema">{film.cinema}</li>
                <li className="city">{film.city}</li>
              </ul>
            </div>
            <div className="item-hidden-block">
              <div className="watch-trailer">
                <Link to="#" className="js-movie-trailer">
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
            <h4 className="title mobile"><Link to="#">{film.title}</Link></h4>
            <div className="view-all-sessions mobile">
              <Link to="" className="js-view-all-sessions">Смотреть все сеансы</Link>
            </div>
            <ul className="cinema-city mobile">
              <li className="cinema">{film.cinema}</li>
              <li className="city">{film.city}</li>
            </ul>

            <ul className="session-time-list">
              {film.sessionTime.map( (session,index) => this.renderFilmSession(session,index))}
            </ul>
            { film.sessionTime.length > 9 &&
              <div className="view-all-sessions desktop">
                <Link to="" className="js-view-all-sessions">Смотреть все сеансы</Link>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <div className="cinena-title-and-city">
            <h1 className="title">Kinopark 7 Keruencity</h1>
            <span className="city">Алматы</span>
          </div>
          <div className="cinema-detailed-container">
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
                  <i className="fa fa-map-marker"></i><a href="">ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4</a>
                </li>
                <li className="list-item-icon">
                  <i className="fa fa-phone"></i><span className="phone-number">+7 (713) 2777-030</span> (авт.), <span className="phone-number">+7 701 767 46 02</span> , <span className="phone-number">+7 713 277 70 25</span>
                </li>
                <li className="list-item-icon">
                  <i className="fa fa-calendar"></i><a href="">Сеансы</a>
                </li>
                <li>
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
                </li>
                <li className="list-item-icon">
                  <i className="fa fa-star"></i><a href="">Спец. предложения</a>
                </li>
                <li>
                  <ul className="restaurants-list">
                    <li><img src={require("../../img/icons/restaurants/01.png")} alt="alt" /></li>
                    <li><img src={require("../../img/icons/restaurants/02.png")} alt="alt" /></li>
                    <li><img src={require("../../img/icons/restaurants/03.png")} alt="alt" /></li>
                    <li><img src={require("../../img/icons/restaurants/04.png")} alt="alt" /></li>
                  </ul>
                </li>
              </ul>
              <ul className="item-desc-list">
                <li>
                  <strong>Описание:</strong>
                  Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации модели развития. 
                </li>
                <li><strong>Количество залов: </strong>7</li>
                <li><strong>Количество посадочных мест: </strong>978</li>
                <li><strong>1 зал </strong>- 179</li>
                <li><strong>2 зал </strong>- 140</li>
                <li><strong>3 зал </strong>- 140</li>
                <li><strong>4 зал </strong>- 140</li>
                <li><strong>5 зал </strong>- 140</li>
                <li><strong>6 зал </strong>- 188</li>
                <li><strong>7 зал </strong>- 51 (Comfort)</li>
                <li><strong>Дата открытия:</strong> 18 октября 2009 г.</li>
                <li><strong>Проекторы: </strong> NEC (3D, 2D)</li>
                <li><strong>Звуковая система: </strong>JBL</li>
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
                <FilterFilm activePanel={"table"}/>
                <div className="films-content">
                  {films.map( (film,index) => this.renderFilm(film,index) )}
                </div>
              </div>
              <div className="tab-item">
                <FilterFilm activePanel={"table"}/>
                <div className="films-content">
                  {films.map( (film,index) => this.renderFilm(film,index) )}               
                </div>
              </div>
              <div className="tab-item">
                <FilterFilm activePanel={"table"}/>
                <div className="films-content">
                  {films.map( (film,index) => this.renderFilm(film,index) )}
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

export default CinemaTable;