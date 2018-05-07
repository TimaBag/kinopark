import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const cinemas = [
  {
    id : 1,
    img : require("../../img/static/movie-house/01.jpg"),
    title : "Kinopark 7 Keruencity",
    city : "Алматы",
    address: "ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4",
    phone_numbers :  [
      {
        phone_number : "+7 (713) 2777-030",
      },
      {
        phone_number : "+7 701 767 46 02",
      },
      {
        phone_number : "+7 713 277 70 25"
      },
    ],
    format_list : [
      {
        format : "IMAX",
      },
      {
        format : "DOLBY ATMOS LASER",
      }
    ],
    restaurants_list : [
      {
        restaurant_list : require("../../img/icons/restaurants/01.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/02.png")
      },
      {
        restaurant_list : require("../../img/icons/restaurants/03.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/04.png")
      }
    ]
  },
  {
    id : 2,
    img : require("../../img/static/movie-house/02.jpg"),
    title : "Kinopark 7 Keruencity",
    city : "Алматы",
    address: "ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4",
    phone_numbers :  [
      {
        phone_number : "+7 (713) 2777-030",
      },
      {
        phone_number : "+7 701 767 46 02",
      },
      {
        phone_number : "+7 713 277 70 25"
      },
    ],
    format_list : [
      {
        format : "IMAX",
      },
      {
        format : "DOLBY ATMOS LASER",
      }
    ],
    restaurants_list : [
      {
        restaurant_list : require("../../img/icons/restaurants/01.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/02.png")
      },
      {
        restaurant_list : require("../../img/icons/restaurants/03.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/04.png")
      }
    ]
  },
  {
    id : 3,
    img : require("../../img/static/movie-house/03.jpg"),
    title : "Kinopark 7 Keruencity",
    city : "Алматы",
    address: "ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4",
    phone_numbers :  [
      {
        phone_number : "+7 (713) 2777-030",
      },
      {
        phone_number : "+7 701 767 46 02",
      },
      {
        phone_number : "+7 713 277 70 25"
      },
    ],
    format_list : [
      {
        format : "IMAX",
      },
      {
        format : "DOLBY ATMOS LASER",
      }
    ],
    restaurants_list : [
      {
        restaurant_list : require("../../img/icons/restaurants/01.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/02.png")
      },
      {
        restaurant_list : require("../../img/icons/restaurants/03.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/04.png")
      }
    ]
  },
  {
    id : 4,
    img : require("../../img/static/movie-house/04.jpg"),
    title : "Kinopark 7 Keruencity",
    city : "Алматы",
    address: "ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4",
    phone_numbers :  [
      {
        phone_number : "+7 (713) 2777-030",
      },
      {
        phone_number : "+7 701 767 46 02",
      },
      {
        phone_number : "+7 713 277 70 25"
      },
    ],
    format_list : [
      {
        format : "IMAX",
      },
      {
        format : "DOLBY ATMOS LASER",
      }
    ],
    restaurants_list : [
      {
        restaurant_list : require("../../img/icons/restaurants/01.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/02.png")
      },
      {
        restaurant_list : require("../../img/icons/restaurants/03.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/04.png")
      }
    ]
  },
  {
    id : 5,
    img : require("../../img/static/movie-house/01.jpg"),
    title : "Kinopark 7 Keruencity",
    city : "Алматы",
    address: "ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4",
    phone_numbers :  [
      {
        phone_number : "+7 (713) 2777-030",
      },
      {
        phone_number : "+7 701 767 46 02",
      },
      {
        phone_number : "+7 713 277 70 25"
      },
    ],
    format_list : [
      {
        format : "IMAX",
      },
      {
        format : "DOLBY ATMOS LASER",
      }
    ],
    restaurants_list : [
      {
        restaurant_list : require("../../img/icons/restaurants/01.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/02.png")
      },
      {
        restaurant_list : require("../../img/icons/restaurants/03.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/04.png")
      }
    ]
  },
  {
    id : 6,
    img : require("../../img/static/movie-house/02.jpg"),
    title : "Kinopark 7 Keruencity",
    city : "Алматы",
    address: "ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4",
    phone_numbers :  [
      {
        phone_number : "+7 (713) 2777-030",
      },
      {
        phone_number : "+7 701 767 46 02",
      },
      {
        phone_number : "+7 713 277 70 25"
      },
    ],
    format_list : [
      {
        format : "IMAX",
      },
      {
        format : "DOLBY ATMOS LASER",
      }
    ],
    restaurants_list : [
      {
        restaurant_list : require("../../img/icons/restaurants/01.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/02.png")
      },
      {
        restaurant_list : require("../../img/icons/restaurants/03.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/04.png")
      }
    ]
  },
  {
    id : 7,
    img : require("../../img/static/movie-house/03.jpg"),
    title : "Kinopark 7 Keruencity",
    city : "Алматы",
    address: "ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4",
    phone_numbers :  [
      {
        phone_number : "+7 (713) 2777-030",
      },
      {
        phone_number : "+7 701 767 46 02",
      },
      {
        phone_number : "+7 713 277 70 25"
      },
    ],
    format_list : [
      {
        format : "IMAX",
      },
      {
        format : "DOLBY ATMOS LASER",
      }
    ],
    restaurants_list : [
      {
        restaurant_list : require("../../img/icons/restaurants/01.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/02.png")
      },
      {
        restaurant_list : require("../../img/icons/restaurants/03.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/04.png")
      }
    ]
  },
  {
    id : 8,
    img : require("../../img/static/movie-house/04.jpg"),
    title : "Kinopark 7 Keruencity",
    city : "Алматы",
    address: "ТРЦ «KeruenCity Актобе», 3 этаж, г. Актобе, ул. М.Маметовой, 4",
    phone_numbers :  [
      {
        phone_number : "+7 (713) 2777-030",
      },
      {
        phone_number : "+7 701 767 46 02",
      },
      {
        phone_number : "+7 713 277 70 25"
      },
    ],
    format_list : [
      {
        format : "IMAX",
      },
      {
        format : "DOLBY ATMOS LASER",
      }
    ],
    restaurants_list : [
      {
        restaurant_list : require("../../img/icons/restaurants/01.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/02.png")
      },
      {
        restaurant_list : require("../../img/icons/restaurants/03.png"),
      },
      {
        restaurant_list : require("../../img/icons/restaurants/04.png")
      }
    ]
  }
]

class Cinemas extends Component {

  renderCinemaList(cinema,index){
    return(
      <div key={index} className="movie-house-container">
        <div className="movie-house-item">
          <div className="item-img">
            <img src={cinema.img} alt="alt" />
          </div>
          <div className="item-desc">
            <div className="title-and-city">
              <h3 className="title">{cinema.title}</h3>
              <span className="city">{cinema.city}</span>
            </div>
            <ul className="item-desc-list">
              <li>
                <i className="fa fa-map-marker"></i><Link to="">{cinema.address}</Link>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                { cinema.phone_numbers.map((phone_number,index) => <span key={index} className="phone-number">{phone_number.phone_number},</span>)}
              </li>
              <li>
                <i className="fa fa-calendar"></i><Link to="/cinemalist">Сеансы</Link>
              </li>
              <li>
                <ul className="format-list">
                  { cinema.format_list.map((format,index) => <li key={index} className="format">{format.format}</li>)}
                </ul>
              </li>
              <li>
                <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
              </li>
              <li>
                <ul className="restaurants-list">
                  {cinema.restaurants_list.map((restaurant,index) => <li key={index}><img src={restaurant.restaurant_list} alt="alt" /></li>)}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="global-wrapper">
        <div className="content">
          <div className="container">
            <h1>Кинотеатры</h1>
            <div className="fiter-panel fiter-panel-mod">
              <div className="filter-select-option">
                <span className="filter-text">Выберите город:</span>
                <select className="selectpicker">
                  <option>Астана</option>
                  <option>Питер</option>
                  <option>Москва</option>
                </select>
              </div>
            </div>
            <div className="movie-house-content">
              {cinemas.map((cinema,index) => this.renderCinemaList(cinema,index))}
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Cinemas;