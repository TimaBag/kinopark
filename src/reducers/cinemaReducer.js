import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const cinema = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_CINEMA_SUCCEEDED:
    case actionTypes.ACTION_GET_CINEMA_WITH_CITY_SUCCEEDED:
      return action.cinema;
    case actionTypes.ACTION_GET_CINEMA_STARTED:
    case actionTypes.ACTION_GET_CINEMA_FAILED:
    default:
      return state;
  }
};

const cinema_show = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_CINEMA_SHOW_SUCCEEDED:
      return action.cinema_show;
    case actionTypes.ACTION_GET_CINEMA_STARTED:
    case actionTypes.ACTION_GET_CINEMA_FAILED:
    default:
      return state;
  }
};

const cinemaReducer = combineReducers({ 
  cinema,
  cinema_show
});

export default cinemaReducer;