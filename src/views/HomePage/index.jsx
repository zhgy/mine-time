import React from 'react';
import { Banner, StartBar, CardGridView, ColumnCard, PostCard } from '../../components';
import { useLatest } from '../../api/PostAPI';
import { useAllCategories } from '../../api/CategoryAPI';
import './style.css';

export const HomePage = () => {
    const columns = useAllCategories();
    const latest = useLatest(1, 20)

    return (<>
        <Banner />
        <div className="Home">
            <StartBar text={"分类 · 推荐"} />
            <CardGridView
                items={columns.data}
                onRenderCard={(item) =>
                    <ColumnCard {...item} />}
            />
            <StartBar text={"文章 · 最新"} />
            <CardGridView
                items={latest.data}
                onRenderCard={(item) =>
                    <PostCard {...item}/>}
            />
        </div>
    </>)
}
