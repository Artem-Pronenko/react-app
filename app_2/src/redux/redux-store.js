import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogsReducer
});


let store = createStore(reducers);

export default store;