import React, { Component } from 'react';
import '../Search/search.css';

class SearchMobile extends Component {
  render() {
    return (
      <div>
        <div className="head-mobile-search js-head-mobile-search">
          <i className="fa fa-search"></i>
          поиск
        </div>
        <div className="head-search mobile">
          <form action="#" className="head-form-search">
            <input type="text" className="text-input" placeholder="Поиск"/>
            <div className="wrapper-form-submit fa fa-search">
              <input type="submit" className="form-submit" value=""/>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default SearchMobile;