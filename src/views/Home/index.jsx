import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Banner, StartBar, CardContainer } from '../../components';
import { ColumnCard, PostCard } from '../../components/CardContainer';
import { categoryActions } from '../../store/category';
import { articleActions } from '../../store/article';
import './style.css';

const useLatest = (pageIndex, pageSize) => {
    const dispatch = useDispatch()
    const latest = useSelector(state => state.article.latest)
    useEffect(() => dispatch(articleActions.fetchLatest({ pageIndex, pageSize })), [dispatch])
    return latest
}

const HomePage = () => {
    const latest = useLatest(1, 20)

    return (<Fragment>
        <Banner />
        <div className="Home">
            {/* <StartBar text={"分类 · 推荐"} />
            <CardContainer card={ColumnCard} items={columns} /> */}
            <StartBar text={"文章 · 最新"} />
            <CardContainer card={PostCard} items={latest.data} />
        </div>
    </Fragment >)
}

export default HomePage