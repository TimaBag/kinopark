import { combineReducers } from 'redux';
import cinemaReducer from './cinemaReducer';
import cityReducer from './cityReducer';
import movieReducer from './movieReducer';

const mainReducer = combineReducers({
	cinema : cinemaReducer,
	city : cityReducer,
	movie : movieReducer,
});

export default mainReducer;
