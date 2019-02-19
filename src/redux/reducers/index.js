import { combineReducers } from 'redux'

import article from './article'
import category from './category'
import tag from './tag'

export const reducersToCombine = {
    article,
    category,
    tag
}

const rootReducer = combineReducers(reducersToCombine)
export default rootReducer