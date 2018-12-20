import { combineReducers } from "redux";
import addMessage from "./messageReducer";
import needPlayerReducer from './needPlayerReducer';
import eventListReducer from './eventListReducer';
import eventDetailReducer from './eventDetailReducer';

export default combineReducers({
	add: addMessage,
	needPlayerList: needPlayerReducer,
	eventList: eventListReducer,
	eventDetail: eventDetailReducer
});
