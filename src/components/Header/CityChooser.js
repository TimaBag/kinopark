import React, { Component } from 'react';

class CityChooser extends Component {
  render() {
    return (
      <div className="head-city-select">
        <i className="fa fa-map-marker"></i>
        <div className="city-select js-city-select"><span className="text">Выбрать город:</span> <span className="city">Москва</span></div>
      </div>
    )
  }
}

export default CityChooser;