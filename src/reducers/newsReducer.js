import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const news = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_NEWS_SUCCEEDED:
      return action.news.data;
    case actionTypes.ACTION_GET_NEWS_STARTED:
    case actionTypes.ACTION_GET_NEWS_FAILED:
    default:
      return state;
  }
};

const newsPages = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_NEWS_SUCCEEDED:
      return action.newsPages;
    case actionTypes.ACTION_GET_NEWS_STARTED:
    case actionTypes.ACTION_GET_NEWS_FAILED:
    default:
      return state;
  }
};


const newsItem = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_NEWS_BY_ID_SUCCEEDED:
      return action.newsItem;
    case actionTypes.ACTION_GET_NEWS_BY_ID_STARTED:
    case actionTypes.ACTION_GET_NEWS_BY_ID_FAILED:
    default:
      return state;
  }
};

const newsReducer = combineReducers({ 
  news,
  newsItem,
  newsPages
});

export default newsReducer;