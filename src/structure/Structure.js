import React,{Component} from 'react';
import Main from '../components/Main';
import Social from '../components/extra/Social';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import $ from 'jquery';

class AppRouter extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    $('.scroll-to-top').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });
  }

  handleScroll(event) {
    var heightTopHead = $('.ui-head').outerHeight();
    if ($(window).scrollTop() > heightTopHead && $(window).width() > 767) {
      $('.head-bottom-panel').addClass('fixed-menu');
        $('.global-wrapper').addClass("global-pad");
        setTimeout(function() {
        $('.head-bottom-panel').addClass("ui-head-transform");
      }, 100);
    } else {
      $('.head-bottom-panel').removeClass("ui-head-transform");
      $('.head-bottom-panel').removeClass('fixed-menu');
      $('.global-wrapper').removeClass("global-pad");
    }
    if ($(window).scrollTop() > $(window).height()) {
      $('.scroll-to-top').addClass('scroll-to-top-visible');
    } else {
      $('.scroll-to-top').removeClass('scroll-to-top-visible');
    }
  }

  render(){
    return(
      <div className="global-wrapper">
        <div className="overlay" />
        <Social />
        <Header />
        <Main />
        <Footer />
        <div className="scroll-to-top"></div>
      </div>
    )
  }
}

export default AppRouter;