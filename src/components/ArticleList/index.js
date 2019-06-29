import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const ArticleItem = props => {
    const { id, title, createdOn, excerpt, author } = props.article;
    return (
        <li className="ArticleItem">
            <a className="ArticleItem-title" href={`/article/${id}`} target="_blank" rel="noopener noreferrer">
                <h3>{title}</h3>
            </a>
            <div className="AuthorInfo">
                <span className="AuthorInfo-avatar">
                    <a target="_blank" href="/" rel="noopener noreferrer">
                        <img width="24" height="24" src="" alt="" />
                    </a>
                </span>
                <span className="AuthorInfo-name">
                    <a target="_blank" href={`/profile/${author.id}`} rel="noopener noreferrer">{author.name}</a>
                </span>
                <span className="AuthorInfo-date">
                    <time dateTime={createdOn}>{new Date(createdOn).toLocaleDateString()}</time>
                </span>
            </div>
            <div className="ArticleItem-excerpt">
                <div className="ArticleItem-cover">
                    <img src="" alt="cover" />
                </div>
                <p className="ArticleItem-inner">
                    {excerpt}
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
        const { items = [], navButtons = [] } = this.props;

        return (
            <section className="ArticleList">
                <nav className="ArticleList-nav">
                    {navButtons.map((value, index) => <Link to={value.to}>{value.title}</Link>)}
                </nav>
                <ul className="ArticleList-items">
                    {items.map((value, index) => <ArticleItem key={index} article={value} />)}

                </ul>
            </section >
        );
    }
}