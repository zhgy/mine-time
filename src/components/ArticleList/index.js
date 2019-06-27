import React from 'react';

import './style.css';

const ArticleListItem = props => {
    return (
        <div className="">
            <li className="ArticleListItem">
                <a href="/" target="_blank">
                    <h3 className="ArticleListItem-title">Thinking in React</h3>
                </a>
                <div className="AuthorInfo">
                    <span className="AuthorInfo-avatar">
                        <a className="UserLink-link" target="_blank" href="/">
                            <img width="24" height="24" src="" alt="" />
                        </a>
                    </span>
                    <span className="AuthorInfo-name">
                        <a target="_blank" href="/">Reactjs</a>
                    </span>
                    <span className="AuthorInfo-date">
                        <time dateTime="1559750400000">06 June 2019</time>
                    </span>
                </div>
                <a className="ArticleListItem-Excerpt" href="/" target="_blank">
                    <div className="ArticleListItem-cover">
                        <img src="" alt="cover" />
                    </div>
                    <p className="ArticleListItem-inner">One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React.
                            <small className="ArticleItem-Excerpt-more">More</small>
                    </p>
                </a>
                <div className="ArticleListItem-actions">
                    <button>Vote</button>
                    <button>Comment</button>
                </div>
            </li >
        </div >
    );
}

export class ArticleList extends React.Component {

    render() {
        return (
            <section className="ArticleList">
                <h2 className="ArticleList-title">Latest</h2>
                <ArticleListItem />
            </section >
        );
    }
}