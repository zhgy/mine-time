import {
    REQ_ADD_ARTICLE, DONE_ADD_ARTICLE, FAILED_ADD_ARTICLE,
    REQ_DEL_ARTICLE, DONE_DEL_ARTICLE, FAILED_DEL_ARTICLE,
    REQ_FIND_ARTICLE, DONE_FIND_ARTICLE, FAILED_FIND_ARTICLE,
    REQ_EDIT_ARTICLE, DONE_EDIT_ARTICLE, FAILED_EDIT_ARTICLE,
    REQ_ARTICLEINFOS, RECIVE_ARTICLEINFOS
} from '../actions'


export default function articleReducer(state = {}, action = {}) {
    switch (action.type) {
        case REQ_ARTICLEINFOS:
            return { ...state }
        case RECIVE_ARTICLEINFOS:
            return { ...state, articleList: action.payload.data, total: action.payload.total }

        case REQ_ADD_ARTICLE:
            return { ...state, loading: true }
        case DONE_ADD_ARTICLE:
            return { ...state, loading: false, articleList: null }
        case FAILED_ADD_ARTICLE:
            return { ...state, loading: false, ...action }

        case REQ_EDIT_ARTICLE:
            return { ...state, loading: true }
        case DONE_EDIT_ARTICLE:
            return { ...state, loading: false, articleList: null }
        case FAILED_EDIT_ARTICLE:
            return { ...state, loading: false, ...action }

        case REQ_DEL_ARTICLE:
            return { ...state, loading: true, ...action }
        case DONE_DEL_ARTICLE:
            const newList = state.articleList.filter(x => x.id !== action.article.id)
            return { ...state, loading: false, articleList: newList }
        case FAILED_DEL_ARTICLE:
            return { ...state, loading: false, ...action }

        case REQ_FIND_ARTICLE:
            return { ...state, loading: true, ...action }
        case DONE_FIND_ARTICLE:
            return { ...state, loading: false, article: action.article }
        case FAILED_FIND_ARTICLE:
            return { ...state, loading: false, ...action }
        default:
            return state
    }
}