import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const promotion = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_PROMOTION_SUCCEEDED:
      return action.promotion;
    case actionTypes.ACTION_GET_PROMOTION_STARTED:
    case actionTypes.ACTION_GET_PROMOTION_FAILED:
    default:
      return state;
  }
};

const promotionReducer = combineReducers({ 
  promotion
});

export default promotionReducer;