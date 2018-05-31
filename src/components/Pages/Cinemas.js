import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import $ from 'jquery';
import 'react-select/dist/react-select.css';
import * as actions from '../../actions/cinemaActions';
import * as actionsCity from '../../actions/cityActions';

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
    this.props.onGetCity();
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
    const options = this.props.city.map( city => city.name);
    console.log(options);
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
                options={ options}
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
  cinema : state.cinema.cinema,
  city : state.city.city
})

const mapDispatchToProps = {
  onGetCinema : actions.getCinema,
  onGetCity : actionsCity.getCity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cinemas);