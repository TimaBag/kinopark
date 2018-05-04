import React, { Component } from 'react';
import '../Search/search.css';

class Search extends Component {
  render() {
    return (
      <div className="head-search desctop">
        <form action="#" className="head-form-search">
          <input type="text" className="text-input" placeholder="Поиск"/>
          <div className="wrapper-form-submit fa fa-search">
            <input type="submit" className="form-submit" value=""/>
          </div>
        </form>
      </div>
    )
  }
}

export default Search;