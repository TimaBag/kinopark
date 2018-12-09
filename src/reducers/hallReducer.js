import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const hall = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_HALL_SUCCEEDED:
      return action.hall;
    case actionTypes.ACTION_GET_HALL_STARTED:
    case actionTypes.ACTION_GET_HALL_FAILED:
    default:
      return state;
  }
};

const hallReducer = combineReducers({ 
  hall
});

export default hallReducer;