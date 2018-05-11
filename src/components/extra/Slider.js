import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery'; 
import {is_mobile} from './js/main.js';
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
    $(window).resize(function() {
      if ($(window).width() > 1270) {
        $('.head-nav').removeAttr('style');
      }
    });
    if ($(window).width() > 1270) {
      $('.head-nav').removeAttr('style');
    }

    $('.choice-place-cinema td').on("click", function() {
      if ($(this).children(".fa").length > 0) {
        $(this).toggleClass('active')
      }
      if(is_mobile() && $(this).hasClass('active')){
        $('.prompt-window').hide();
         $(this).find('.prompt-window').fadeIn("slow").delay(3000).fadeOut("slow");
      }
    });
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