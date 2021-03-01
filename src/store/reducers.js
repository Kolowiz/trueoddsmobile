import {persistCombineReducers} from 'redux-persist';

import authReducer from './auth/reducers';

import {persistConfig} from '../config/persistConfig';

const rootReducer = {auth: authReducer};

const persistedReducer = persistCombineReducers(persistConfig, rootReducer);

export default persistedReducer;
