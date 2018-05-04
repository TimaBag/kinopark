import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Header/Banner';
import CityChooser from '../Header/CityChooser';
import Search from '../Header/Search/Search';
import Language from '../Header/Language/Language';
import BuyTicket from '../Header/BuyTicket/BuyTicket';
import Menu from '../Header/Menu';

class Header extends Component {
  render() {
    return (
      <header className="ui-head">
        <Banner />
        <div className="head-top-panel">
          <div className="container">
            <div className="row">
              <div className="wrapper-head-logo">
                <div className="head-logo">
                  <Link to="/"><img src={require('../../img/static/logo.png')} alt="alt"/></Link>
                </div>
              </div>
              <div className="wrapper-head-kinoplex">
                <div className="head-kinoplex">
                  <Link to=""><img src={require('../../img/static/kinoplexx-logo.png')} alt="alt"/></Link>
                </div>
              </div>
              <div className="clear"></div>
              <div className="head-city-and-search">
                <CityChooser />
                <Search />
                <BuyTicket media="mobile"/>
              </div>
              <Language media="desktop"/>
            </div>
          </div>
        </div>
        <Menu />
      </header>
    );
  }
}

export default Header;
