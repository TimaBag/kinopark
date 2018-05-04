import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchMobile from '../Header/Search/SearchMobile';
import Language from '../Header/Language/Language';
import BuyTicket from '../Header/BuyTicket/BuyTicket';

class Menu extends Component {
  render() {
    return (
      <div className="head-bottom-panel">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-8 col-sm-12 col-xs-12">
              <div className="head-menu-btn js-head-menu-btn">
                <button className="head-toggle-menu">
                  <span className="sandwich">
                    <span className="sw-topper"></span>
                    <span className="sw-bottom"></span>
                    <span className="sw-footer"></span>
                  </span>
                </button>
                <div className="head-menu-text">меню</div>
              </div>
              <SearchMobile />
              <Language media="mobile"/>
              <nav className="head-nav">
                <ul className="head-nav-menu">
                  <li><Link to="/scheduleList">РАСПИСАНИЕ</Link></li>
                  <li><Link to="/soon">СКОРО</Link></li>
                  <li><Link to="/cinemas">КИНОТЕАТРЫ</Link></li>
                  <li><Link to="/news">НОВОСТИ</Link></li>
                  <li><Link to="/speacial-offer">МОЙ KINOPARK</Link></li>
                  <li><Link to="">ORIGINAL VERSION</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
              <BuyTicket media="desktop"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Menu;