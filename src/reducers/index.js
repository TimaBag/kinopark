import { combineReducers } from 'redux';
import cinemaReducer from './cinemaReducer';
import cityReducer from './cityReducer';
import movieReducer from './movieReducer';
import newsReducer from './newsReducer';
import scheduleReducer from './scheduleReducer';
import promotionReducer from './promotionReducer';
import hallReducer from './hallReducer';
import seanceReducer from './seanceReducer';

const mainReducer = combineReducers({
	cinema : cinemaReducer,
	city : cityReducer,
	movie : movieReducer,
	news : newsReducer,
	schedule : scheduleReducer,
	promotion : promotionReducer,
	hall : hallReducer,
	seance : seanceReducer,
});

export default mainReducer;
