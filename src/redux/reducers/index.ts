import userReducer from "./userReducer";
import productReducer from "./productReducer";
import { combineReducers } from 'redux';
const rootReducer =  combineReducers({ user: userReducer , product:productReducer});
 
export default rootReducer;