import userReducer from "./userReducer";
import productReducer from "./productReducer";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

const rootReducer =  combineReducers({ user: userReducer , product:productReducer});

export default persistReducer(persistConfig, rootReducer);
