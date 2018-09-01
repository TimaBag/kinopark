import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewsBlock from '../extra/NewsBlock';
/*
sozdat site skopirovat kazhdi iz ni*/

class LeftSidebar extends Component {
  render() {
    return (
      <div className="column-left">
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li>
              <Link to="/imax"><img src={require("../../img/static/category/01.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to="/dolby"><img src={require("../../img/static/category/02.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to="/premium"><img src={require("../../img/static/category/03.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to="/online-sales"><img src={require("../../img/static/category/05.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to="/park-restoranov"><img src={require("../../img/static/category/06.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to="/about"><img src={require("../../img/static/category/07.jpg")} alt="alt" /></Link>
            </li>
          </ul>
        
        </div>
      </div>
    )
  }
}

export default LeftSidebar;