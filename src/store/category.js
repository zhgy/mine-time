const REQUEST_CATEGORY_LIST = 'REQUEST_CATEGORY_LIST';
const RECIVE_CATEGORY_LIST = 'RECIVE_CATEGORY_LIST';
const SHOW_CATEGORY = 'SHOW_CATEGORY';



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


const REQUEST_RECOMMEND_CATEGORY = 'RREQUEST_RECOMMEND_CATEGORY';
const DONE_RECOMMEND_CATEGORY = 'DONE_RECOMMEND_CATEGORY';
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
    fetchRecommendCategory
};

export default function categoryReducer(state = {}, action = {}) {
    switch (action.type) {
        case REQUEST_CATEGORY_LIST:
            return { ...state, loading: true }
        case RECIVE_CATEGORY_LIST:
            return { ...state, loading: false, categoryList: action.payload };
        case DONE_RECOMMEND_CATEGORY:
            state.recommend = action.payload
            return { ...state }

        default:
            return state;
    }
}