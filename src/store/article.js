const REQ_FIND_ARTICLE = 'REQ_FIND_ARTICLE';
const DONE_FIND_ARTICLE = 'DONE_FIND_ARTICLE';
const FAILED_FIND_ARTICLE = 'FAILED_FIND_ARTICLE';
function findArticle(id) {
    return (dispatch, getState) => {
        dispatch({ type: REQ_FIND_ARTICLE, id })
        fetch(`/api/article/${id}`)
            .then(res => res.json())
            .then(json => dispatch({ type: DONE_FIND_ARTICLE, payload: json }))
            .catch(err => dispatch({ type: FAILED_FIND_ARTICLE, err, id }))
    }
}


const REQ_LATEST_ARTICLE = "REQ_LATEST_ARTICLE";
const DONE_LATEST_ARTICLE = "DONE_LATEST_ARTICLE";
function fetchLatest({ pageIndex = 1, pageSize = 20 }) {
    return (dispatch, getState) => {
        dispatch({ type: REQ_LATEST_ARTICLE });
        fetch(`/api/article/latest?pageIndex=${pageIndex}&pageSize=${pageSize}`)
            .then(res => res.json())
            .then(json => dispatch({ type: DONE_LATEST_ARTICLE, payload: json }))
            .catch(console.error)
    }
}



export const articleActions = {
    findArticle,
    fetchLatest
};

export default function articleReducer(state = {}, action = {}) {
    switch (action.type) {
        case REQ_FIND_ARTICLE:
            return { ...state, loading: true, ...action }
        case DONE_FIND_ARTICLE:
            return { ...state, loading: false, articleDetails: action.payload }
        case FAILED_FIND_ARTICLE:
            return { ...state, loading: false, ...action }

        case REQ_LATEST_ARTICLE:
            return { ...state, loading: true, ...action }
        case DONE_LATEST_ARTICLE:
            return { ...state, loading: false, latest: action.payload }
        default:
            return state
    }
}