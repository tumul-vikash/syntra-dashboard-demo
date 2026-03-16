import {createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

const logger = createLogger();
const middleware = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
