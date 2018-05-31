import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const city = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_CITY_SUCCEEDED:
      return action.city;
    case actionTypes.ACTION_GET_CITY_STARTED:
    case actionTypes.ACTION_GET_CITY_FAILED:
    default:
      return state;
  }
};

const cityReducer = combineReducers({ 
  city
});

export default cityReducer;