import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const offers = [
  {
    img : require("../../img/static/special-offer/02.jpg"),
    title : "Кино Охота",
    desc : "Каждую пятницу и субботу - специальные ночные сеансы после полуночи по супер-аппетитным тарифам!",
  },
  {
    img : require("../../img/static/special-offer/03.jpg"),
    title : "Super Вторник",
    desc : '"Super Вторник" – супер-выгодное предложение для всех!',
  },
  {
    img : require("../../img/static/special-offer/01.jpg"),
    title : "Беспредельный понедельник",
    desc : "«Беспредельный понедельник» - беспредельные эмоции!",
  },
  {
    img : require("../../img/static/special-offer/02.jpg"),
    title : "Кино Охота",
    desc : "Каждую пятницу и субботу - специальные ночные сеансы после полуночи по супер-аппетитным тарифам!",
  },
  {
    img : require("../../img/static/special-offer/03.jpg"),
    title : "Super Вторник",
    desc : '"Super Вторник" – супер-выгодное предложение для всех!',
  },
]

class SpecialOffer extends Component {

  renderOffer(offer,index){
    return(
      <div key={index} className="special-offer-container">
        <div className="special-offer-item">
          <div className="item-img">
            <Link to=""><img src={offer.img} alt="alt" /></Link>
          </div>
          <div className="item-desc">
            <h4 className="title"><Link to="">{offer.title}</Link></h4>
            <p className="text">
              {offer.desc}
            </p>
          </div>
        </div>
      </div>  
    )
  }

  render() {
    return (
      <div className="global-wrapper">
        <div className="content">
          <div className="container">
            <h1>Мой кинопарк</h1>
            <ul className="my-kinopark-btn">
              <li><Link to="/special-offer" className="active">Спец. предложения</Link></li>
              <li><Link to="/production-bars">Продукция баров</Link></li>
            </ul>
            <div className="special-offer-content">
              {offers.map((offer,index) => this.renderOffer(offer,index))}
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default SpecialOffer;