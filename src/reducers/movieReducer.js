import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const movie = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_MOVIE_SUCCEEDED:
      return action.movie;
    case actionTypes.ACTION_GET_MOVIE_STARTED:
    case actionTypes.ACTION_GET_MOVIE_FAILED:
    default:
      return state;
  }
};

const movieReducer = combineReducers({ 
  movie
});

export default movieReducer;