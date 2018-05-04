import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Footer/footer.css';

class FooterMenu extends Component {
  render(){
    return(
      <nav className="footer-nav">
        <ul className="footer-nav-menu">
          <li><Link to="">Главная</Link></li>
          <li><Link to="">Карта сайта</Link></li>
          <li><Link to="">Кинопарк бизнес</Link></li>
          <li><Link to="">О нас</Link></li>
        </ul>
      </nav>
    )
  }
}

export default FooterMenu;