import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const bars = [
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "Хот-дог",  
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "2 Мини бургера",
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "Попкорн",
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "Хот-дог",  
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "2 Мини бургера",
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "Попкорн",
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "Хот-дог",  
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "2 Мини бургера",
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "Попкорн",
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "Хот-дог",  
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "2 Мини бургера",
  },
  {
    img : require("../../img/static/production-bars/01.jpg"),
    title : "Попкорн",
  },
]

class ProductionBar extends Component {

  renderBar(bar,index){
    return(
      <div key={index} className="production-bars-container">
        <div className="production-bars-item">
          <div className="item-img">
            <Link to=""><img src={bar.img} alt="alt" /></Link>
          </div>
          <div className="item-desc">
            <h4 className="title"><Link to="">{bar.title}</Link></h4>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          <h1>Мой кинопарк</h1>
          <ul className="my-kinopark-btn">
            <li><Link to="/special-offer" >Спец. предложения</Link></li>
            <li><Link to="/production-bars" className="active">Продукция баров</Link></li>
          </ul>
          <div className="production-bars-content">
            {bars.map((bar,index) => this.renderBar(bar,index))}
          </div>
          <div className="wrapper-pagination">
            <ul className="main-pagination clearfix">
              <li className="backward disabled"><Link to=""><em className="fa fa-angle-left"></em></Link></li>
              <li><Link to="" className="active">1</Link></li>
              <li><Link to="">2</Link></li>
              <li><Link to="">3</Link></li>
              <li><Link to="">4</Link></li>
              <li><Link to="">5</Link></li>
              <li className="forward"><Link to=""> <em className="fa fa-angle-right"></em></Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductionBar;