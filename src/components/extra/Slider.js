import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SliderSlick from "react-slick";

const settings = {
  initialSlide: 0,
  slidesToShow: 1,
  dots: true,
  arrows: true,
  // infinite: false,
  autoplay: true,
  autoplaySpeed: 7000,
  slidesToScroll: 1
}

class Slider extends Component {

  static propTypes = {
    media : PropTypes.string.isRequired,
  }
  componentWillMount(){  
    
  }
  render() {
    return (
      <SliderSlick className={"main-slider " + this.props.media} {...settings}>
        <div className="slide-item">
          <img src={require("../../img/static/main-slider/01.jpg")} alt="alt" />
        </div>
        <div className="slide-item">
          <img src={require("../../img/static/main-slider/01.jpg")} alt="alt" />
        </div>
      </SliderSlick>

    )
  }
}

export default Slider;