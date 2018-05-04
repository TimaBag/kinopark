import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SpecialOffer extends Component {
  render() {
    return (
      <div className="global-wrapper">
        <div className="content">
          <div className="container">
            <h1>Мой кинопарк</h1>
            <ul className="my-kinopark-btn">
              <li><Link to="" className="active">Спец. предложения</Link></li>
              <li><Link to="">Продукция баров</Link></li>
            </ul>
            <div className="special-offer-content">
              <div className="special-offer-container">
                <div className="special-offer-item">
                  <div className="item-img">
                    <Link to=""><img src={require("../../img/static/special-offer/01.jpg")} alt="alt" /></Link>
                  </div>
                  <div className="item-desc">
                    <h4 className="title"><Link to="">Беспредельный понедельник</Link></h4>
                    <p className="text">
                      «Беспредельный понедельник» - беспредельные эмоции!
                    </p>
                  </div>
                </div>
              </div>
              <div className="special-offer-container">
                <div className="special-offer-item">
                  <div className="item-img">
                    <Link to=""><img src={require("../../img/static/special-offer/02.jpg")} alt="alt" /></Link>
                  </div>
                  <div className="item-desc">
                    <h4 className="title"><Link to="">Кино Охота</Link></h4>
                    <p className="text">
                      Каждую пятницу и субботу - специальные ночные сеансы после полуночи по супер-аппетитным тарифам!
                    </p>
                  </div>
                </div>
              </div>
              <div className="special-offer-container">
                <div className="special-offer-item">
                  <div className="item-img">
                    <Link to=""><img src={require("../../img/static/special-offer/03.jpg")} alt="alt" /></Link>
                  </div>
                  <div className="item-desc">
                    <h4 className="title"><Link to="">Super Вторник</Link></h4>
                    <p className="text">
                      "Super Вторник" – супер-выгодное предложение для всех!
                    </p>
                  </div>
                </div>
              </div>
              <div className="special-offer-container">
                <div className="special-offer-item">
                  <div className="item-img">
                    <Link to=""><img src={require("../../img/static/special-offer/01.jpg")} alt="alt" /></Link>
                  </div>
                  <div className="item-desc">
                    <h4 className="title"><Link to="">Беспредельный понедельник</Link></h4>
                    <p className="text">
                      «Беспредельный понедельник» - беспредельные эмоции!
                    </p>
                  </div>
                </div>
              </div>
              <div className="special-offer-container">
                <div className="special-offer-item">
                  <div className="item-img">
                    <Link to=""><img src={require("../../img/static/special-offer/02.jpg")} alt="alt" /></Link>
                  </div>
                  <div className="item-desc">
                    <h4 className="title"><Link to="">Кино Охота</Link></h4>
                    <p className="text">
                      Каждую пятницу и субботу - специальные ночные сеансы после полуночи по супер-аппетитным тарифам!
                    </p>
                  </div>
                </div>
              </div>
              <div className="special-offer-container">
                <div className="special-offer-item">
                  <div className="item-img">
                    <Link to=""><img src={require("../../img/static/special-offer/03.jpg")} alt="alt" /></Link>
                  </div>
                  <div className="item-desc">
                    <h4 className="title"><Link to="">Super Вторник</Link></h4>
                    <p className="text">
                      "Super Вторник" – супер-выгодное предложение для всех!
                    </p>
                  </div>
                </div>
              </div>
              <div className="special-offer-container">
                <div className="special-offer-item">
                  <div className="item-img">
                    <Link to=""><img src={require("../../img/static/special-offer/01.jpg")} alt="alt" /></Link>
                  </div>
                  <div className="item-desc">
                    <h4 className="title"><Link to="">Беспредельный понедельник</Link></h4>
                    <p className="text">
                      «Беспредельный понедельник» - беспредельные эмоции!
                    </p>
                  </div>
                </div>
              </div>
              <div className="special-offer-container">
                <div className="special-offer-item">
                  <div className="item-img">
                    <Link to=""><img src={require("../../img/static/special-offer/02.jpg")} alt="alt" /></Link>
                  </div>
                  <div className="item-desc">
                    <h4 className="title"><Link to="">Кино Охота</Link></h4>
                    <p className="text">
                      Каждую пятницу и субботу - специальные ночные сеансы после полуночи по супер-аппетитным тарифам!
                    </p>
                  </div>
                </div>
              </div>
              <div className="special-offer-container">
                <div className="special-offer-item">
                  <div className="item-img">
                    <Link to=""><img src={require("../../img/static/special-offer/03.jpg")} alt="alt" /></Link>
                  </div>
                  <div className="item-desc">
                    <h4 className="title"><Link to="">Super Вторник</Link></h4>
                    <p className="text">
                      "Super Вторник" – супер-выгодное предложение для всех!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default SpecialOffer;