import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const cinema = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_CINEMA_SUCCEEDED:
      return action.cinema;
    case actionTypes.ACTION_GET_CINEMA_STARTED:
    case actionTypes.ACTION_GET_CINEMA_FAILED:
    default:
      return state;
  }
};

const cinemaReducer = combineReducers({ 
  cinema
});

export default cinemaReducer;