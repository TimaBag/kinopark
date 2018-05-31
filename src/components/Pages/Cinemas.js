import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import $ from 'jquery';
import 'react-select/dist/react-select.css';
import * as actions from '../../actions/cinemaActions';

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

  constructor(props){
    super(props);
    this.state = {
      selectedOption: 1,
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
    this.props.onGetCinema();
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  }

  renderCinemaList(cinema,index){
    return(
      <div key={index} className="movie-house-container">
        <div className="movie-house-item">
          <div className="item-img">
            <img src={cinema.img} alt="alt" />
          </div>
          <div className="item-desc">
            <div className="title-and-city">
              <h3 className="title">{cinema.name}</h3>
              <span className="city">{cinema.city.name}</span>
            </div>
            <ul className="item-desc-list">
              <li>
                <i className="fa fa-map-marker"></i><Link to="">{cinema.address}</Link>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <span key={index} className="phone-number">{cinema.phone}</span>
              </li>
              <li>
                <i className="fa fa-calendar"></i><Link to="/cinemalist">Сеансы</Link>
              </li>
              <li>
                <i className="fa fa-star"></i><Link to="">Спец. предложения</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.props.cinema)
    return (
      <div className="content">
        <div className="container">
          <h1>Кинотеатры</h1>
          <div className="fiter-panel fiter-panel-mod">
            <div className="filter-select-option">
              <span className="filter-text">Выберите город:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedOption}
                onChange={this.handleChange}
                options={[
                  { value: 1, label: 'Астана' },
                  { value: 2, label: 'Питер' },
                ]}
              />
            </div>
          </div>
          <div className="movie-house-content">
            {this.props.cinema && this.props.cinema.map((cinema,index) => this.renderCinemaList(cinema,index))}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cinema : state.cinema.cinema
})

const mapDispatchToProps = {
  onGetCinema : actions.getCinema
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cinemas);