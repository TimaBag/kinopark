import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NewsBlock extends Component {

  static propTypes = {
    media : PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className={"news-block " + this.props.media}>
        <h3 className="upper">новости</h3>
        <article className="news-item first">
          <div className="item-img">
            <img src={require("../../img/static/news/01.jpg")} alt="alt" />
          </div>
          <div className="item-desc">
            <span className="date">09.12.2017</span>
            <h5 className="item-title">
              <Link to="">Что такое залы Premium в кинотеатрах Kinopark!</Link>
            </h5>
          </div>
        </article>
        <article className="news-item">
          <div className="item-img">
            <img src={require("../../img/static/news/02.jpg")} alt="alt" />
          </div>
          <div className="item-desc">
            <span className="date">09.12.2017</span>
            <h5 className="item-title">
              <Link to="">Открыты продажи на фильм «Звёздные войны: Последние джедаи» в формате...</Link>
            </h5>
          </div>
        </article>
        <div className="all-news-btn">
          <Link to="" className="js-all-news">Все новости</Link>
        </div>
      </div>
    )
  }
}

export default NewsBlock;