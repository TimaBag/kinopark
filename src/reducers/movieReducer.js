import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const moviePages = (state = 1, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_SUCCEEDED:
      return action.movie.last_page;
    case actionTypes.ACTION_GET_MOVIE_STARTED:
    case actionTypes.ACTION_GET_MOVIE_FAILED:
    default:
      return state;
  }
};

const movieCurrentPage = (state = 1, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_SUCCEEDED:
      return action.movie.current_page;
    case actionTypes.ACTION_GET_MOVIE_STARTED:
    case actionTypes.ACTION_GET_MOVIE_FAILED:
    default:
      return state;
  }
};

const movie = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_SUCCEEDED:
    case actionTypes.ACTION_GET_MOVIE_WITH_CINEMA_SUCCEEDED:
      return action.movie.data;
    case actionTypes.ACTION_GET_MOVIE_STARTED:
    case actionTypes.ACTION_GET_MOVIE_FAILED:
    default:
      return state;
  }
};

const movieTomorrowPages = (state = 1, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_TOMORROW_SUCCEEDED:
      return action.movie_tomorrow.last_page;
    case actionTypes.ACTION_GET_MOVIE_TOMORROW_STARTED:
    case actionTypes.ACTION_GET_MOVIE_TOMORROW_FAILED:
    default:
      return state;
  }
};

const movieTomorrowCurrentPage = (state = 1, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_TOMORROW_SUCCEEDED:
      return action.movie_tomorrow.current_page;
    case actionTypes.ACTION_GET_MOVIE_TOMORROW_STARTED:
    case actionTypes.ACTION_GET_MOVIE_TOMORROW_FAILED:
    default:
      return state;
  }
};

const movie_tomorrow = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_TOMORROW_SUCCEEDED:
      return action.movie_tomorrow.data;
    case actionTypes.ACTION_GET_MOVIE_TOMORROW_STARTED:
    case actionTypes.ACTION_GET_MOVIE_TOMORROW_FAILED:
    default:
      return state;
  }
};

const movieSoonPages = (state = 1, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_SOON_SUCCEEDED:
      return action.movie_soon.last_page;
    case actionTypes.ACTION_GET_MOVIE_SOON_STARTED:
    case actionTypes.ACTION_GET_MOVIE_SOON_FAILED:
    default:
      return state;
  }
};

const movieSoonCurrentPage = (state = 1, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_SOON_SUCCEEDED:
      return action.movie_soon.current_page;
    case actionTypes.ACTION_GET_MOVIE_SOON_STARTED:
    case actionTypes.ACTION_GET_MOVIE_SOON_FAILED:
    default:
      return state;
  }
};

const movie_soon = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_SOON_SUCCEEDED:
      return action.movie_soon.data;
    case actionTypes.ACTION_GET_MOVIE_SOON_STARTED:
    case actionTypes.ACTION_GET_MOVIE_SOON_FAILED:
    default:
      return state;
  }
};

const movie_show = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_SHOW_SUCCEEDED:
      return action.movie_show;
    case actionTypes.ACTION_GET_MOVIE_SHOW_STARTED:
    case actionTypes.ACTION_GET_MOVIE_SHOW_FAILED:
    default:
      return state;
  }
};

const movieReducer = combineReducers({ 
  movie,
  moviePages,
  movieCurrentPage,
  movie_tomorrow,
  movieTomorrowPages,
  movieTomorrowCurrentPage,
  movie_soon,
  movieSoonPages,
  movieSoonCurrentPage,
  movie_show
});

export default movieReducer;