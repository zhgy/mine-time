import actionTypes from '../actions'

export default function categoryReducer(state = {}, action = {}) {
    switch (action.type) {
        case actionTypes.REQUEST_CATEGORY_LIST:
            return { ...state, loading: true }
        case actionTypes.RECIVE_CATEGORY_LIST:
            return { ...state, loading: false, categoryList: action.payload };
        case actionTypes.REQUEST_ADD_CATEGORY:
            return { ...state, loading: true }
        case actionTypes.DONE_ADD_CATEGORY:
            return { ...state, loading: false }
        case actionTypes.REQUEST_DELETE_CATEGORY:
            return { ...state, loading: true }
        case actionTypes.DONE_DELETE_CATEGORY:
            return { ...state, loading: false, categoryList: state.categoryList.filter(cat => cat.id !== action.category.id) }
        case actionTypes.REQUEST_UPDATE_CATEGORY:
            return { ...state, loading: true }
        case actionTypes.DONE_UPDATE_CATEGORY:
            state.categoryList.filter(cat => cat.id !== action.category.id).push(action.category)
            return { ...state, loading: false }
        default:
            return state;
    }
}