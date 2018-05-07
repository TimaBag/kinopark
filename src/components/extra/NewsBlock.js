import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

  render() {
    return (
      <div className={"news-block " + this.props.media}>
        <h3 className="upper">новости</h3>
        {
          news.map((news) => 
                   <article className="news-item first" key={news.id}>
                    <div className="item-img">
                      <img src={require("../../img/static/news/01.jpg")} alt="alt" />
                    </div>
                    <div className="item-desc">
                      <span className="date">{news.date}</span>
                      <h5 className="item-title">
                        <Link to="">{news.title}</Link>
                      </h5>
                    </div>
                  </article>
          )
        }
        <div className="all-news-btn">
          <Link to="" className="js-all-news">Все новости</Link>
        </div>
      </div>
    )
  }
}

export default NewsBlock;