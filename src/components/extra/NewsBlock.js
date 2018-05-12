import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SliderSlick from "react-slick";

const settings = {
  initialSlide: 0,
  slidesToShow: 1,
  dots: true,
  arrows: true,
  // infinite: false,
  autoplay: true,
  autoplaySpeed: 7000,
  slidesToScroll: 1
}

const news = [

  {
    id : 1,
    date : "09.12.2017",
    title : "Что такое залы Premium в кинотеатрах Kinopark!"
  },
  {
    id : 2,
    date : "09.12.2017",
    title : "Открыты продажи на фильм «Звёздные войны: Последние джедаи» в формате ..."
  },

]

class NewsBlock extends Component {

  static propTypes = {
    media : PropTypes.string.isRequired,
  }

  renderNews(data){
    return(
      data.map((item,index) => 
        <article key={index} className="news-item first" key={item.id}>
          <div className="item-img">
            <img src={require("../../img/static/news/01.jpg")} alt="alt" />
          </div>
          <div className="item-desc">
            <span className="date">{item.date}</span>
            <h5 className="item-title">
              <Link to="">{item.title}</Link>
            </h5>
          </div>
        </article> 
      )
    )
  }
  render() {
    return (
      <div className={"news-block " + this.props.media}>
        <h3 className="upper">новости</h3>
        {this.props.media === "mobile" ?
          <SliderSlick className={"news-block-content"} {...settings}>
            {this.renderNews(news)}
          </SliderSlick>
          :
          this.renderNews(news)
        }
      </div>
    )
  }
}

export default NewsBlock;