import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const schedule = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_SCHEDULE_SUCCEEDED:
      return action.schedule.data;
    case actionTypes.ACTION_GET_SCHEDULE_STARTED:
    case actionTypes.ACTION_GET_SCHEDULE_FAILED:
    default:
      return state;
  }
};

const scheduleReducer = combineReducers({ 
  schedule
});

export default scheduleReducer;