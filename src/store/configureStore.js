import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import article from './article';
import category from './category';
import tag from './tag';


const rootReducer = combineReducers({
    article,
    category,
    tag
});

const loggerMiddleware = createLogger();

export function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    )
}