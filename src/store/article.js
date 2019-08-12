const REQ_ARTICLEINFOS = 'REQ_ARTICLEINFOS';
const RECIVE_ARTICLEINFOS = 'RECIVE_ARTICLEINFOS';
const REQ_ADD_ARTICLE = 'REQ_ADD_ARTICLE';
const DONE_ADD_ARTICLE = 'DONE_ADD_ARTICLE';
const FAILED_ADD_ARTICLE = 'FAILED_ADD_ARTICLE';
const REQ_DEL_ARTICLE = 'REQ_DEL_ARTICLE';
const DONE_DEL_ARTICLE = 'DONE_DEL_ARTICLE';
const FAILED_DEL_ARTICLE = 'FAILED_DEL_ARTICLE';
const REQ_FIND_ARTICLE = 'REQ_FIND_ARTICLE';
const DONE_FIND_ARTICLE = 'DONE_FIND_ARTICLE';
const FAILED_FIND_ARTICLE = 'FAILED_FIND_ARTICLE';
const REQ_EDIT_ARTICLE = 'REQ_EDIT_ARTICLE';
const DONE_EDIT_ARTICLE = 'DONE_EDIT_ARTICLE';
const FAILED_EDIT_ARTICLE = 'FAILED_EDIT_ARTICLE';


//#region Create a article
function reqAddArticle(article) { return { type: REQ_ADD_ARTICLE, article } }

function doneAddArticle(article) { return { type: DONE_ADD_ARTICLE, article } }

function failedAddArticle(err, article) { return { type: FAILED_ADD_ARTICLE, article, err } }

function addArticle(article) {
    return (dispatch, getState) => {
        dispatch(reqAddArticle(article))
        fetch('/api/article', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(article)
        })
            .then(res => {
                if (res.status === 201) {
                    const uri = res.headers.get('location')
                    const id = parseInt(uri.substring(uri.lastIndexOf('/') + 1))
                    article.id = id
                    dispatch(doneAddArticle(article))
                }
            })
            .catch(err => dispatch(failedAddArticle(err, article)))
    }
}
//#endregion

//#region Delete a article
function reqDelArticle(article) { return { type: REQ_DEL_ARTICLE, article } }
function doneDelArticle(article) { return { type: DONE_DEL_ARTICLE, article } }
function failedDelArticle(err, article) { return { type: FAILED_DEL_ARTICLE, err, article } }
function delArticle(article) {
    const { id } = article
    return (dispatch, getState) => {
        dispatch(reqDelArticle(article))
        fetch(`/api/article/${id}`, { method: 'delete' })
            .then(res => {
                if (res.status === 202) {
                    dispatch(doneDelArticle(article))
                }
            })
            .catch(err => dispatch(failedDelArticle(err, article)))
    }
}
//#endregion

//#region Find a article
function reqFindArticle(id) { return { type: REQ_FIND_ARTICLE, id } }
function doneFindArticle(article) { return { type: DONE_FIND_ARTICLE, article } }
function failedFindArticle(err, id) { return { type: FAILED_FIND_ARTICLE, err, id } }
function findArticle(id) {
    return (dispatch, getState) => {
        dispatch(reqFindArticle(id))
        fetch(`/api/article/${id}`)
            .then(res => res.json())
            .then(json => dispatch(doneFindArticle(json)))
            .catch(err => dispatch(failedFindArticle(err, id)))
    }
}
//#endregion

//#region Edit a article
function reqEditArticle(article) { return { type: REQ_EDIT_ARTICLE, article } }

function doneEditArticle(article) { return { type: DONE_EDIT_ARTICLE, article } }

function failedEditArticle(article) { return { type: FAILED_EDIT_ARTICLE, article } }

function editArticle(article) {
    return (dispatch, getState) => {
        dispatch(reqEditArticle(article))
        fetch(`/api/article`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(article)
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch(doneEditArticle(article))
                    dispatch(fetchArticleInfos())
                } else {
                    dispatch(failedEditArticle(article))
                }
            })
    }
}
//#endregion

//#region Fetch articles
function requestArticleInfos(paging) { return { type: REQ_ARTICLEINFOS, paging } }

function reciveArticleInfos(paging, payload) { return { type: RECIVE_ARTICLEINFOS, paging, payload } }

function fetchArticleInfos(paging = { pageIndex: 1, pageSize: 20, type: "latest" }) {
    return (dispatch, getState) => {
        dispatch(requestArticleInfos(paging));
        fetch(`/api/articles?pageIndex=${paging.pageIndex}&pageSize=${paging.pageSize}&type=${paging.type}`)
            .then(res => res.json(), console.log)
            .then(json => dispatch(reciveArticleInfos(paging, json)));
    }
}
//#endregion



export const articleActions = {
    addArticle,
    delArticle,
    findArticle,
    editArticle,
    fetchArticleInfos
};

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