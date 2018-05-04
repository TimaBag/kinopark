import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FooterMenu from '../Footer/FooterMenu';
import SocialLink from '../../components/extra/SocialLink';
import '../Footer/footer.css';

class Footer extends Component {
  render(){
    return(
      <div className="global-wrapper">
        <footer className="main-footer">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 footer-left-block">
                <div className="footer-application">
                  <span className="text">Приложение «Кинопарк Бизнес»</span>
                  <ul className="apple-google-btn">
                    <li><Link to=""><img src={require("../../img/icons/google-btn.png")} alt="alt" /></Link></li>
                    <li><Link to=""><img src={require("../../img/icons/apple-btn.png")} alt="alt" /></Link></li>
                  </ul>
                </div>
                <div className="copyright">
                  &#169;Все права защищены
                  <span className="min">
                    made by <Link to="">inin.kz</Link>
                  </span>
                </div>
              </div>
              <div className="col-xl-6 footer-right-block">
                <FooterMenu />
                <SocialLink />
                <div className="footer-mail">
                  <Link to="mailto:">info@kinopark.kz</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;