import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewsBlock from '../extra/NewsBlock';

class LeftSidebar extends Component {
  render() {
    return (
      <div className="column-left">
        <div className="sidebar">
          <ul className="sidebar-menu">
            <li>
              <Link to=""><img src={require("../../img/static/category/01.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to=""><img src={require("../../img/static/category/02.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to=""><img src={require("../../img/static/category/03.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to=""><img src={require("../../img/static/category/04.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to=""><img src={require("../../img/static/category/05.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to=""><img src={require("../../img/static/category/06.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to=""><img src={require("../../img/static/category/07.jpg")} alt="alt" /></Link>
            </li>
            <li>
              <Link to=""><img src={require("../../img/static/category/06.jpg")} alt="alt" /></Link>
            </li>
          </ul>
          <NewsBlock media="desktop"/>
        
        </div>
      </div>
    )
  }
}

export default LeftSidebar;