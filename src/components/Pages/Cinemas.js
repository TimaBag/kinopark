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
      selectedOption: localStorage.getItem("city") !== null ? localStorage.getItem("city") : "",
    };
    this.handleChangeCity = this.handleChangeCity.bind(this);
  }

  // спросить про меняющии uuid в городе

  componentDidMount(){
    if(localStorage.getItem("city") !== null){
      this.props.onGetCinemaWithCity(localStorage.getItem("city"));
    }else{
      this.props.onGetCinema();
    }
    this.props.onGetCity();
  }

  handleChangeCity(selectedOption){
    this.setState({ selectedOption });
    this.props.onGetCinemaWithCity(selectedOption.value);
  }

  renderCinemaList(cinema,index){
    return(
      <div key={index} className="movie-house-container">
        <div className="movie-house-item">
          <div className="item-img">
            <img src={cinema.photo_path} alt="alt" />
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
                <i className="fa fa-calendar"></i><Link to={"/cinemalist/city/"+cinema.city.uuid+"/id/"+cinema.uuid+"/"}>Сеансы</Link>
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
    let dataCity = [];
    this.props.city.map( city => dataCity.push({'label' : city.name,'value' : city.uuid}));
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
                onChange={this.handleChangeCity}
                options={ dataCity}
                placeholder="Выберите город"
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
  onGetCinemaWithCity : actions.getCinemaWithCity,
  onGetCity : actionsCity.getCity
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cinemas);