import React, { Component } from 'react';
import { connect } from 'react-redux';
import *as actions from '../../../actions/newsActions';
import ReactHtmlParser from 'react-html-parser';

class NewsItem extends Component {

  constructor(props){
    super(props);
    this.state={};
  }

  componentDidMount(){
    this.props.onGetNewsById(this.props.match.params.id);
  }

  render() {
    return (
      <div className="content">
        <div className="container">
          {this.props.newsItem &&
            <article className="new-block">
              <div className="item-desc">
                <span className="date">{this.props.newsItem.date_created}</span>
                <h3 className="title">{this.props.newsItem.name}</h3>
                  { ReactHtmlParser(this.props.newsItem.description) }
              </div>
            </article>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  newsItem : state.news.newsItem,
})

const mapDispatchToProps = {
  onGetNewsById : actions.getNewsById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsItem);