import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { Cat, Author } from '../Button';

const ColumnCard = ({ id, title, cover, articleCount }) =>
    (<Link className="ColumnCard" to={`/category/${id}`}>
        <div>
            <img alt="" src={cover || '/static/img/default-avatar-56x56.png'} />
        </div>
        <div className="ColumnCard-info">
            <div className="">{title}</div>
            <div className=""></div>
        </div>
        <div className="ColumnCard-meta">12,45 人关注 | {articleCount} 篇文章</div>
    </Link>)

const PostCard = ({ id, createdOn, category, title, author, excerpt, cover }) =>
    (<div className="PostCard" >
        <div className="PostCard-img">
            <a href={`/article/${id}`}>
                <figure>
                    <img alt="" src={cover || '/static/img/default-cover.png'} />
                </figure>
            </a>
        </div>
        <div className="PostCard-content">
            <div className="PostCard-date-category-wrapper">
                <span className="PostCard-date">
                    <time dateTime={createdOn}>{new Date(createdOn).toLocaleDateString()}</time>
                </span>
                <Cat {...category} />
            </div>
            <div className="PostCard-title">
                <span>
                    <a href={`/article/${id}`}>
                        <h2>{title}</h2>
                    </a>
                </span>
            </div>
            <div className="PostCard-author">
                <div>
                    <span>By&nbsp;</span>
                    <Author {...author} />
                </div>
            </div>
            <p>{excerpt}</p>
        </div>
    </div>)

const CardContainer = ({ card: Card, items = [] }) =>
    (<div className="CardContainer">
        {items.map((value, index) => <Card key={index} {...value} />)}
    </div>)

export { ColumnCard, PostCard, CardContainer }