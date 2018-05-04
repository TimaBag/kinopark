import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Slider extends Component {

  static propTypes = {
    media : PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className={"main-slider " + this.props.media}>
        <div className="slide-item">
          <img src={require("../../img/static/main-slider/01.jpg")} alt="alt" />
        </div>
        <div className="slide-item">
          <img src={require("../../img/static/main-slider/01.jpg")} alt="alt" />
        </div>
      </div>
    )
  }
}

export default Slider;