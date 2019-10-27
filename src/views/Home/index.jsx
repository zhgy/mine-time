import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Banner, StartBar, CardContainer } from '../../components';
import { ColumnCard, PostCard } from '../../components/CardContainer';
import { categoryActions } from '../../store/category';
import './style.css';


const HomePage = () => {
    const dispatch = useDispatch()
    const columns = useSelector(state => state.category.recommend)
    const posts = useSelector(state => state.article.latest)

    useEffect(() => {
        dispatch(categoryActions.fetchRecommendCategory())
    }, [])

    return (<Fragment>
        <Banner />
        <div className="Home">
            <StartBar text={"分类 · 推荐"} />
            <CardContainer card={ColumnCard} items={columns} />
            <StartBar text={"文章 · 最新"} />
            <CardContainer card={PostCard} items={posts} />
        </div>
    </Fragment >)
}

export default HomePage