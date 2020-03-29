import React from 'react';
import { Banner, StartBar, CardGridView, ColumnCard, PostCard } from '../../components';
import './style.css';
import { useQuery } from '../../core/useFetch';

const useLatest = (initPageIndex, initPageSize) => {
    const [data, doFetch] = useQuery(`/api/posts/latest?pageIndex=${initPageIndex}&pageSize=${initPageSize}`, []);
    const doUpdate = (pageIndex, pageSize) => doFetch(`/api/article/latest?pageIndex=${pageIndex}&pageSize=${pageSize}`);
    return [data.data, doUpdate]
}

const useCategories = () => {
    const [data, doFetch] = useQuery(`/api/categories`, []);
    return [data.data, doFetch];
}

export const HomePage = () => {
    const [columns] = useCategories();
    const [latest] = useLatest(1, 20)

    return (<>
        <Banner />
        <div className="Home">
            <StartBar text={"分类 · 推荐"} />
            <CardGridView
                items={columns}
                onRenderCard={(item) =>
                    <ColumnCard {...item} />}
            />
            <StartBar text={"文章 · 最新"} />
            <CardGridView
                items={latest}
                onRenderCard={(item) =>
                    <PostCard {...item}/>}
            />
        </div>
    </>)
}
