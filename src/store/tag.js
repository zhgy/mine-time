const REQUEST_TAG_LIST = 'REQUEST_TAG_LIST';
const RECIVE_TAG_LIST = 'RECIVE_TAG_LIST';
const REQUEST_ADD_TAG = 'REQUEST_ADD_TAG';
const DONE_ADD_TAG = 'DONE_ADD_TAG';
const FAILED_ADD_TAG = 'FAILED_ADD_TAG';
const REQUEST_UPDATE_TAG = 'REQUEST_UPDATE_TAG';
const DONE_UPDATE_TAG = 'DONE_UPDATE_TAG';
const FAILED_UPDATE_TAG = 'FAILED_UPDATE_TAG';
const REQUEST_DELETE_TAG = 'REQUEST_DELETE_TAG';
const DONE_DELETE_TAG = 'DONE_DELETE_TAG';
const FAILED_DELETE_TAG = 'FAILED_DELETE_TAG';

//#region Fetch tag list
function requestTagList(start = 0, offset = 20) { return { type: REQUEST_TAG_LIST, start, offset } }

function reciveTagList(payload) { return { type: RECIVE_TAG_LIST, payload } }

function fetchTagList(start = 0, offset = 20) {
    return (dispatch, getState) => {
        dispatch(requestTagList(start, offset))
        fetch(`/api/tags?start=${start}&offset=${offset}`)
            .then(res => res.json(), err => console.log(err))
            .then(payload => dispatch(reciveTagList(payload)))
    }
}
//#endregion

//#region Create a tag
function requestAddTag(tag) { return { type: REQUEST_ADD_TAG, tag } }

function doneAddTag(id) { return { type: DONE_ADD_TAG, id } }

function failedAddTag(err, tag) { return { type: FAILED_ADD_TAG, err, tag } }

function addTag(tag) {
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
function requestUpdateTag(tag) { return { type: REQUEST_UPDATE_TAG, tag } }

function doneUpdateTag(tag) { return { type: DONE_UPDATE_TAG, tag } }

function failedUpdateTag(err, tag) { return { type: FAILED_UPDATE_TAG, err, tag } }

function updateTag(tag) {
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
function requestDeleteTag(tag) { return { type: REQUEST_DELETE_TAG, tag } }

function doneDeleteTag(tag) { return { type: DONE_DELETE_TAG, tag } }

function failedDeleteTag(err, tag) { return { type: FAILED_DELETE_TAG, err, tag } }

function deleteTag(tag) {
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



export const tagActions = {
    fetchTagList,
    addTag,
    updateTag,
    deleteTag
};

export default function tagReducer(state = {}, action = {}) {
    switch (action.type) {
        case REQUEST_TAG_LIST:
            return { ...state }
        case RECIVE_TAG_LIST:
            return { ...state, tagList: action.payload }
        case REQUEST_ADD_TAG:
            return { ...state, loading: true }
        case DONE_ADD_TAG:
            return { ...state, loading: false, tagList: null }
        case FAILED_ADD_TAG:
            return { ...state, loading: false, ...action }
        case REQUEST_UPDATE_TAG:
            return { ...state, loading: true }
        case DONE_UPDATE_TAG:
            return { ...state, loading: false, tagList: null }
        case FAILED_UPDATE_TAG:
            return { ...state, loading: false, ...action }
        case DONE_DELETE_TAG:
            const newTagList = state.tagList.filter(t => t.id !== action.tag.id)
            return { ...state, loading: false, tagList: newTagList }
        case FAILED_DELETE_TAG:
            return { ...state, loading: false, ...action }
        default:
            return state
    }
}