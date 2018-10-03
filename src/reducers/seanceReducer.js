import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const seance = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_SEANCE_SUCCEEDED:
      return action.seance;
    case actionTypes.ACTION_GET_SEANCE_STARTED:
    case actionTypes.ACTION_GET_SEANCE_FAILED:
    default:
      return state;
  }
};

const cityReducer = combineReducers({ 
  seance
});

export default cityReducer;