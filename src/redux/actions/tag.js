import actionTypes from '../actions'

//#region Fetch tag list
export function requestTagList(start = 0, offset = 20) { return { type: actionTypes.REQUEST_TAG_LIST, start, offset } }

export function reciveTagList(payload) { return { type: actionTypes.RECIVE_TAG_LIST, payload } }

export function fetchTagList(start = 0, offset = 20) {
    return (dispatch, getState) => {
        dispatch(requestTagList(start, offset))
        fetch(`/api/tags?start=${start}&offset=${offset}`)
            .then(res => res.json(), err => console.log(err))
            .then(payload => dispatch(reciveTagList(payload)))
    }
}
//#endregion

//#region Create a tag
export function requestAddTag(tag) { return { type: actionTypes.REQUEST_ADD_TAG, tag } }

export function doneAddTag(id) { return { type: actionTypes.DONE_ADD_TAG, id } }

export function failedAddTag(err, tag) { return { type: actionTypes.FAILED_ADD_TAG, err, tag } }

export function addTag(tag) {
    return (dispatch, getState) => {
        dispatch(requestAddTag(tag))
        fetch('/api/tag', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(tag)
        })
            .then(res => {
                if (res.status === 201) {
                    const uri = res.headers.get('location')
                    const id = parseInt(uri.substring(uri.lastIndexOf('/') + 1))
                    dispatch(doneAddTag(id))
                }
            })
            .catch(err => dispatch(failedAddTag(err, tag)))
    }
}
//#endregion

//#region Update a tag
export function requestUpdateTag(tag) { return { type: actionTypes.REQUEST_UPDATE_TAG, tag } }

export function doneUpdateTag(tag) { return { type: actionTypes.DONE_UPDATE_TAG, tag } }

export function failedUpdateTag(err, tag) { return { type: actionTypes.FAILED_UPDATE_TAG, err, tag } }

export function updateTag(tag) {
    return (dispatch, getState) => {
        dispatch(requestUpdateTag(tag))
        fetch(`/api/tag`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(tag)
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch(doneUpdateTag(tag))
                }
            })
            .catch(err => dispatch(failedUpdateTag(err, tag)))
    }
}
//#endregion

//#region Delete a tag
export function requestDeleteTag(tag) { return { type: actionTypes.REQUEST_DELETE_TAG, tag } }

export function doneDeleteTag(tag) { return { type: actionTypes.DONE_DELETE_TAG, tag } }

export function failedDeleteTag(err, tag) { return { type: actionTypes.FAILED_DELETE_TAG, err, tag } }

export function deleteTag(tag) {
    const { id } = tag
    return (dispatch, getState) => {
        dispatch(requestDeleteTag(tag))
        fetch(`/api/tag/${id}`, { method: 'delete' })
            .then(res => {
                if (res.status === 202) {
                    dispatch(doneDeleteTag(tag))
                }
            })
            .catch(err => dispatch(failedDeleteTag(err, tag)))
    }
}
//#endregion