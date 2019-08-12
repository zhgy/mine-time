const REQUEST_CATEGORY_LIST = 'REQUEST_CATEGORY_LIST';
const RECIVE_CATEGORY_LIST = 'RECIVE_CATEGORY_LIST';
const SHOW_CATEGORY = 'SHOW_CATEGORY';
const REQUEST_ADD_CATEGORY = 'REQUEST_ADD_CATEGORY';
const DONE_ADD_CATEGORY = 'DONE_ADD_CATEGORY';
const FAILED_ADD_CATEGORY = 'FAILED_ADD_CATEGORY';
const REQUEST_DELETE_CATEGORY = 'REQUEST_DELETE_CATEGORY';
const DONE_DELETE_CATEGORY = 'DONE_DELETE_CATEGORY';
const FAILED_DELETE_CATEGORY = 'FAILED_DELETE_CATEGORY';
const REQUEST_UPDATE_CATEGORY = 'REQUEST_UPDATE_CATEGORY';
const DONE_UPDATE_CATEGORY = 'DONE_UPDATE_CATEGORY';
const FAILED_UPDATE_CATEGORY = 'FAILED_UPDATE_CATEGORY';
const REQUEST_RECOMMEND_CATEGORY = 'RREQUEST_RECOMMEND_CATEGORY';
const DONE_RECOMMEND_CATEGORY = 'DONE_RECOMMEND_CATEGORY';


// fetchCategoryList
function fetchCategoryList(pid = 0) {
    return (dispatch, getState) => {
        dispatch({ type: REQUEST_CATEGORY_LIST, pid });
        fetch(`/api/category/${pid}/children`)
            .then(res => res.json(), err => console.log(err))
            .then(json => dispatch({ type: RECIVE_CATEGORY_LIST, payload: json }));
    }
}

// Show category on editor panel
function showCategory(category) { return { type: SHOW_CATEGORY, selectedCategory: category } }

// Create a new category
function requestAddCategory(category) { return { type: REQUEST_ADD_CATEGORY, category } }

function doneAddCategory(location) { return { type: DONE_ADD_CATEGORY, location } }

function failedAddCategory() {
    return {
        type: FAILED_ADD_CATEGORY
    }
}

function addCategory(category) {
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
function requestDeleteCategory(category) { return { type: REQUEST_DELETE_CATEGORY, category } }

function doneDeleteCategory(category) { return { type: DONE_DELETE_CATEGORY, category } }

function failedDeleteCategory(category) { return { type: FAILED_DELETE_CATEGORY, category } }

function deleteCategory(category) {
    return (dispatch, getState) => {
        dispatch(requestDeleteCategory(category))
        fetch(`/api/category/${category.id}`, { method: 'delete', headers: { 'Accept': '*/*' } })
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
function requestUpdateCategory(category) { return { type: REQUEST_UPDATE_CATEGORY, category } }

function doneUpdateCategory(category) { return { type: DONE_UPDATE_CATEGORY, category } }

function failedUpdateCategory(category) { return { type: FAILED_UPDATE_CATEGORY, category } }

function updateCategory(category) {
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
function fetchRecommendCategory() {
    return (dispatch, getState) => {
        dispatch({ type: REQUEST_RECOMMEND_CATEGORY });
        fetch(`/api/category/recommend`)
            .then(res => res.json(), err => console.log(err))
            .then(json => dispatch({ type: DONE_RECOMMEND_CATEGORY, payload: json }));
    }
}


export const categoryActions = {
    fetchCategoryList,
    showCategory,
    addCategory,
    deleteCategory,
    updateCategory,
    fetchRecommendCategory
};

export default function categoryReducer(state = {}, action = {}) {
    switch (action.type) {
        case REQUEST_CATEGORY_LIST:
            return { ...state, loading: true }
        case RECIVE_CATEGORY_LIST:
            return { ...state, loading: false, categoryList: action.payload };
        case REQUEST_ADD_CATEGORY:
            return { ...state, loading: true }
        case DONE_ADD_CATEGORY:
            return { ...state, loading: false }
        case REQUEST_DELETE_CATEGORY:
            return { ...state, loading: true }
        case DONE_DELETE_CATEGORY:
            return { ...state, loading: false, categoryList: state.categoryList.filter(cat => cat.id !== action.category.id) }
        case REQUEST_UPDATE_CATEGORY:
            return { ...state, loading: true }
        case DONE_UPDATE_CATEGORY:
            state.categoryList.filter(cat => cat.id !== action.category.id).push(action.category)
            return { ...state, loading: false }
        case DONE_RECOMMEND_CATEGORY:
            state.recommend = action.payload
            return { ...state }

        default:
            return state;
    }
}