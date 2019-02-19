import {
    REQ_ADD_ARTICLE, DONE_ADD_ARTICLE, FAILED_ADD_ARTICLE,
    REQ_DEL_ARTICLE, DONE_DEL_ARTICLE, FAILED_DEL_ARTICLE,
    REQ_FIND_ARTICLE, DONE_FIND_ARTICLE, FAILED_FIND_ARTICLE,
    REQ_EDIT_ARTICLE, DONE_EDIT_ARTICLE, FAILED_EDIT_ARTICLE,
    REQ_ARTICLEINFOS, RECIVE_ARTICLEINFOS
} from '.'


//#region Create a article
export function reqAddArticle(article) { return { type: REQ_ADD_ARTICLE, article } }

export function doneAddArticle(article) { return { type: DONE_ADD_ARTICLE, article } }

export function failedAddArticle(err, article) { return { type: FAILED_ADD_ARTICLE, article, err } }

export function addArticle(article) {
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
export function reqDelArticle(article) { return { type: REQ_DEL_ARTICLE, article } }
export function doneDelArticle(article) { return { type: DONE_DEL_ARTICLE, article } }
export function failedDelArticle(err, article) { return { type: FAILED_DEL_ARTICLE, err, article } }
export function delArticle(article) {
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
export function reqFindArticle(id) { return { type: REQ_FIND_ARTICLE, id } }
export function doneFindArticle(article) { return { type: DONE_FIND_ARTICLE, article } }
export function failedFindArticle(err, id) { return { type: FAILED_FIND_ARTICLE, err, id } }
export function findArticle(id) {
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
export function reqEditArticle(article) { return { type: REQ_EDIT_ARTICLE, article } }

export function doneEditArticle(article) { return { type: DONE_EDIT_ARTICLE, article } }

export function failedEditArticle(article) { return { type: FAILED_EDIT_ARTICLE, article } }

export function editArticle(article) {
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
export function requestArticleInfos(paging) { return { type: REQ_ARTICLEINFOS, paging } }

export function reciveArticleInfos(paging, payload) { return { type: RECIVE_ARTICLEINFOS, paging, payload } }

export function fetchArticleInfos(paging = { pageIndex: 1, pageSize: 20, type: "latest" }) {
    return (dispatch, getState) => {
        dispatch(requestArticleInfos(paging));
        fetch(`/api/articles?pageIndex=${paging.pageIndex}&pageSize=${paging.pageSize}&type=${paging.type}`)
            .then(res => res.json(), console.log)
            .then(json => dispatch(reciveArticleInfos(paging, json)));
    }
}
//#endregion