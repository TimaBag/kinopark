import { combineReducers } from 'redux';
import cinemaReducer from './cinemaReducer';

const mainReducer = combineReducers({
	cinema : cinemaReducer
});

export default mainReducer;
