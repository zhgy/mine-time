import actionTypes from '../actions'


// fetchCategoryList
export function fetchCategoryList(pid = 0) {
    return (dispatch, getState) => {
        dispatch({ type: actionTypes.REQUEST_CATEGORY_LIST, pid });
        fetch(`/api/category/${pid}/children`)
            .then(res => res.json(), err => console.log(err))
            .then(json => dispatch({ type: actionTypes.RECIVE_CATEGORY_LIST, payload: json }));
    }
}

// Show category on editor panel
export function showCategory(category) { return { type: actionTypes.SHOW_CATEGORY, selectedCategory: category } }

// Create a new category
export function requestAddCategory(category) { return { type: actionTypes.REQUEST_ADD_CATEGORY, category } }

export function doneAddCategory(location) { return { type: actionTypes.DONE_ADD_CATEGORY, location } }

export function failedAddCategory() {
    return {
        type: actionTypes.FAILED_ADD_CATEGORY
    }
}

export function addCategory(category) {
    return (dispatch, getState) => {
        if (!category || !category.title) {
            dispatch(failedAddCategory())
            return
        }
        dispatch(requestAddCategory(category))
        fetch('/api/category', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(category)
        })
            .then(res => {
                if (res.status === 201) {
                    dispatch(doneAddCategory(res.headers.get('location')))
                    dispatch(fetchCategoryList())
                } else {
                    dispatch(failedAddCategory())
                }
            })
    }
}

// Delete a category
export function requestDeleteCategory(category) { return { type: actionTypes.REQUEST_DELETE_CATEGORY, category } }

export function doneDeleteCategory(category) { return { type: actionTypes.DONE_DELETE_CATEGORY, category } }

export function failedDeleteCategory(category) { return { type: actionTypes.FAILED_DELETE_CATEGORY, category } }

export function deleteCategory(category) {
    const { id, title } = category
    return (dispatch, getState) => {
        dispatch(requestDeleteCategory(category))
        fetch(`/api/category/${id}`, { method: 'delete', headers: { 'Accept': '*/*' } })
            .then(res => {
                if (res.status === 202) {
                    dispatch(doneDeleteCategory(category))
                    dispatch(fetchCategoryList())
                } else {
                    dispatch(failedDeleteCategory(category))
                }
            })
    }
}

// Update a category
export function requestUpdateCategory(category) { return { type: actionTypes.REQUEST_UPDATE_CATEGORY, category } }

export function doneUpdateCategory(category) { return { type: actionTypes.DONE_UPDATE_CATEGORY, category } }

export function failedUpdateCategory(category) { return { type: actionTypes.FAILED_UPDATE_CATEGORY, category } }

export function updateCategory(category) {
    return (dispatch, getState) => {
        dispatch(requestUpdateCategory(category))
        fetch(`/api/category`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(category)
        })
            .then(res => {
                if (res.status === 200) {
                    dispatch(doneUpdateCategory(category))
                    dispatch(fetchCategoryList())
                } else {
                    dispatch(failedUpdateCategory(category))
                }
            })
    }
}

// fetchRecommendCategory
export function fetchRecommendCategory() {
    return (dispatch, getState) => {
        dispatch({ type: actionTypes.REQUEST_RECOMMEND_CATEGORY });
        fetch(`/api/category/recommend`)
            .then(res => res.json(), err => console.log(err))
            .then(json => dispatch({ type: actionTypes.DONE_RECOMMEND_CATEGORY, payload: json }));
    }
}