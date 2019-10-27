import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ArticleList, Banner } from '../../components';
import './style.css';
import { categoryActions } from '../../store/category';


const Category = ({ match }) => {
    const { id, type = 'recommend' } = match.params;
    const articles = useSelector(state => state.article.cats.get(id - 0));
    const basePath = `/category/${id}`
    const buttons = [
        { to: `${basePath}/recommend`, title: '推荐' },
        { to: `${basePath}/latest`, title: '最新' },
        { to: `${basePath}/hot`, title: '热门' }
    ];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(categoryActions.fetchRecommendCategory())
    }, [dispatch])
    return (<React.Fragment>
        <Banner />
        <ArticleList navButtons={buttons} items={articles ? articles[type] : []} />
    </React.Fragment >)
}

export default Category