
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import *as actions from '../../../actions/newsActions'

class News extends Component {

  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount(){
    this.props.onGetNews();
  }

  renderPage(newsPages){
    const dataPages = [];
    for(let i = 1; i <= parseInt(newsPages, 10); i++){

      dataPages.push(<li><Link to="" className="active">{i}</Link></li>)
    }
    return dataPages;
  }

  renderNews(news,index){
    return(
      <article key={index} className="new-block">
        <div className="item-img">
          <Link to={"news/" + news.id}><img src={news.thumbnail_url} alt="alt" /></Link>
        </div>
        <div className="item-desc">
          <span className="date">{news.date_created}</span>
          <h3 className="title">{news.name}</h3>
          <p className="text">
            {news.preview}
          </p>
          <div className="more-info">
            <Link to={"news/" + news.id}>Подробнее...</Link>
          </div>
        </div>
      </article>
    )
  }

  render() {
    const news = this.props.news ? this.props.news : [];
    console.log(this.props.newsPages);
    return (
      <div className="content">
        <div className="container">
          <h1>Новости</h1>
          {news.map((news,index) => this.renderNews(news,index))}
          <div className="wrapper-pagination">
            <ul className="main-pagination clearfix">
              <li className="backward disabled"><Link to=""><em className="fa fa-angle-left"></em></Link></li>
              { 
                this.renderPage(this.props.newsPages)
              }
              <li className="forward"><Link to=""> <em className="fa fa-angle-right"></em></Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  news : state.news.news,
  newsPages : state.news.newsPages
})

const mapDispatchToProps = {
  onGetNews : actions.getNews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);