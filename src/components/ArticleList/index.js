import React from 'react';

import { StartBar } from '../StartBar';
import './style.css';

const ArticleItem = props => {
    return (
        <li className="ArticleItem">
            <a className="ArticleItem-title" href="/article/0" target="_blank">
                <h3>Thinking in React</h3>
            </a>
            <div className="AuthorInfo">
                <span className="AuthorInfo-avatar">
                    <a target="_blank" href="/">
                        <img width="24" height="24" src="" alt="" />
                    </a>
                </span>
                <span className="AuthorInfo-name">
                    <a target="_blank" href="/profile/0">Reactjs</a>
                </span>
                <span className="AuthorInfo-date">
                    <time dateTime="1559750400000">06 June 2019</time>
                </span>
            </div>
            <div className="ArticleItem-excerpt">
                <div className="ArticleItem-cover">
                    <img src="" alt="cover" />
                </div>
                <p className="ArticleItem-inner">
                    One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.
                    <small className="ArticleItem-Excerpt-more">More</small>
                </p>
            </div>
            <div className="ArticleItem-actions">
                <button>Vote</button>
                <button>Comment</button>
            </div>
        </li >
    );
}

export class ArticleList extends React.Component {

    render() {
        return (
            <section className="ArticleList">
                <nav className="ArticleList-nav">
                    <a href="/">Remo</a>
                    <a href="/">Latest</a>
                    <a href="/">Hot</a>
                </nav>
                <ul className="ArticleList-items">
                    {[0, 1, 2, 3, 4, 5].map((value, index) => <ArticleItem key={index} />)}

                </ul>
            </section >
        );
    }
}