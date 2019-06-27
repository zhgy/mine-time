import React, { Fragment } from 'react';

import { Banner, StartBar, CardContainer } from '../../components';
import { ColumnCard, PostCard } from '../../components/CardContainer';
import './style.css';


export class Home extends React.Component {
    render() {
        const columns = [0, 1, 2, 3, 4, 5];
        const posts = [0, 1, 2, 3, 4, 5];
        return (
            <Fragment>
                <Banner />
                <div className="Home">
                    <StartBar text={"分类 · 推荐"} />
                    <CardContainer card={ColumnCard} items={columns} />
                    <StartBar text={"文章 · 最新"} />
                    <CardContainer card={PostCard} items={posts} />
                </div>
            </Fragment >
        );
    }
};