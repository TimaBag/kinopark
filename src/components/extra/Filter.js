import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-select/dist/react-select.css';
import * as actions from '../../actions/cinemaActions';
import * as actionsCity from '../../actions/cityActions';
import * as actionsSchedule from '../../actions/scheduleActions';
import * as actionsMovie from '../../actions/movieActions';
import * as actionsHall from '../../actions/hallActions';

class Filter extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedCity: localStorage.getItem("city") ? localStorage.getItem("city") : "",
      selectedCinema: "",
      selectedFilm: "",
      selectedFormat: "",
      selectedHall: "",
      selectedTime: "",
    };

    this.handleClickFilter = this.handleClickFilter.bind(this);
  }
  componentDidMount(){
    this.props.onGetHall();
    this.props.onGetMovie();
    if(localStorage.getItem("city")){
      this.props.onGetCinemaWithCity(localStorage.getItem("city"));
    }else{
      this.props.onGetCinema();
    }
  }
  handleChangeCity = (selectedCity) => {
    if(selectedCity === null){
      this.setState({ 
        selectedCity : ""
      });
    }else{
      this.setState({ 
        selectedCity : selectedCity.value
      });
      this.props.onGetCinemaWithCity(selectedCity.value)
    }
  }
  handleChangeCinema = (selectedCinema) => {
    if(selectedCinema === null){
      this.setState({ 
        selectedCinema : ""
      });
    }else{
      this.setState({ 
        selectedCinema : selectedCinema.value
      });
      this.props.onGetMovieWithCinema(selectedCinema.value)
    }
  }
  handleChangeFilm = (selectedFilm) => {
    if(selectedFilm === null){
      this.setState({ 
        selectedFilm : ""
      });
    }else{
      this.setState({ 
        selectedFilm : selectedFilm.value
      });
    }
  }
  handleChangeFormat = (selectedFormat) => {
    this.setState({ selectedFormat });
  }
  handleChangeHall = (selectedHall) => {
    if(selectedHall === null){
      this.setState({ 
        selectedHall : ""
      });
    }else{
      this.setState({ 
        selectedHall : selectedHall.value
      });
    }
  }
  handleChangeTime = (selectedTime) => {
    this.setState({ selectedTime });
  }
  handleCancelFilter = () => {

  }
  handleClickFilter(){
    let data = {
      city : this.state.selectedCity,
      cinema : this.state.selectedCinema,
      movie : this.state.selectedFilm,
      hall : this.state.selectedHall,
      time : this.state.selectedTime
    }
    this.props.onGetScheduleFilter(data);
  }
  render() {
    let dataCity = [];
    this.props.city.map( city => dataCity.push({'label' : city.name,'value' : city.uuid}));
    let dataCinema = [];
    this.props.cinema.map( cinema => dataCinema.push({'label' : cinema.name,'value' : cinema.uuid}));
    let dataHall = [];
    this.props.hall.map( hall => dataHall.push({'label' : hall.name,'value' : hall.uuid}));
    let dataFilm = [];
    this.props.movie.map( film => dataFilm.push({'label' : film.name,'value' : film.uuid}));
    return (
      <div>
        <div className="fiter-panel">
          <div className="filter-panel-left">
            <div className="filter-select-option">
              <span className="filter-text">Город:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedCity}
                onChange={this.handleChangeCity}
                options={dataCity}
                placeholder="Выберите город"
              />
            </div>
            <div className="filter-select-option">
              <span className="filter-text">Кинотеатр:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedCinema}
                onChange={this.handleChangeCinema}
                options={dataCinema}
                placeholder="Выберите кинотеатр"
              />
            </div>
          </div>
          <div className="filter-panel-right">
            <div className="filter-select-option">
              <span className="filter-text">Фильм:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedFilm}
                onChange={this.handleChangeFilm}
                options={dataFilm}
              />
            </div>
            {/*<div className="filter-select-option">
              <span className="filter-text">Формат:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedFormat}
                onChange={this.handleChangeFormat}
                options={[
                  { value: 1, label: 'One' },
                  { value: 2, label: 'Two' },
                ]}
              />
            </div>*/}
            <div className="filter-select-option">
              <span className="filter-text">Зал:</span>
              <Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedHall}
                onChange={this.handleChangeHall}
                options={dataHall}
              />
            </div>
            <div className="filter-select-option">
              <span className="filter-text">Время:</span>
              {/*<Select className="selectpicker"
                name="form-field-name"
                value={this.state.selectedOption5}
                onChange={this.handleChangeTime}
                options={[
                  { value: 1, label: 'One' },
                  { value: 2, label: 'Two' },
                ]}
              />*/}
              <input type="time" className="text-input-time" onChange={(e) => this.handleChangeTime(e.target.value)}/>
            </div>
          </div>
          <div className="filter-open-hide-btn">
            фильтры <i className="fa fa-angle-down"></i>
          </div>
        </div>
        <button to="" className="thunderbird-btn" onClick={this.handleClickFilter}>Фильтровать</button>
        <div className="row selection-results-category-list">
          <div className="col-md-9 col-sm-8 col-xs-12">
            <div className="reset-filter-btn">
              <i className="fa fa-close"></i>
              <Link to="" onClick={this.handleCancelFilter}>Отменить фильтры</Link>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-xs-12">
            <ul className="category-list-switch">
              <li className={this.props.activePanel === "list"  ? "category-view-list active" : "category-view-list"}>
                <Link to={"/"+ this.props.link} className="fa fa-th-list"></Link>
              </li>
              <li className={this.props.activePanel === "table" ? "category-view-table active" : "category-view-table"}>
                <Link to={"/"+ this.props.link} className="fa fa-th"></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cinema : state.cinema.cinema,
  city : state.city.city,
  hall : state.hall.hall,
  movie : state.movie.movie,
})

const mapDispatchToProps = {
  onGetCinema : actions.getCinema,
  onGetCinemaWithCity : actions.getCinemaWithCity,
  onGetMovieWithCinema : actionsMovie.getMovieWithCinema,
  onGetCity : actionsCity.getCity,
  onGetScheduleFilter : actionsSchedule.getScheduleFilter,
  onGetMovie : actionsMovie.getMovie,
  onGetHall : actionsHall.getHall,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);