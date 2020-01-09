import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { ramdomUsers } from "./reducers";

const logger = createLogger({});
const middlewareConfig = applyMiddleware(thunk, logger);
const store = createStore(ramdomUsers, middlewareConfig);

window.store = store;

export default store;