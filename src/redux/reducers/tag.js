import actionTypes from '../actions'

export default function tagReducer(state = {}, action = {}) {
    switch (action.type) {
        case actionTypes.REQUEST_TAG_LIST:
            return { ...state }
        case actionTypes.RECIVE_TAG_LIST:
            return { ...state, tagList: action.payload }
        case actionTypes.REQUEST_ADD_TAG:
            return { ...state, loading: true }
        case actionTypes.DONE_ADD_TAG:
            return { ...state, loading: false, tagList: null }
        case actionTypes.FAILED_ADD_TAG:
            return { ...state, loading: false, ...action }
        case actionTypes.REQUEST_UPDATE_TAG:
            return { ...state, loading: true }
        case actionTypes.DONE_UPDATE_TAG:
            return { ...state, loading: false, tagList: null }
        case actionTypes.FAILED_UPDATE_TAG:
            return { ...state, loading: false, ...action }
        case actionTypes.DONE_DELETE_TAG:
            const newTagList = state.tagList.filter(t => t.id !== action.tag.id)
            return { ...state, loading: false, tagList: newTagList }
        case actionTypes.FAILED_DELETE_TAG:
            return { ...state, loading: false, ...action }
        default:
            return state
    }
}