import React from 'react';
import './style.css';

import { Cat, Author } from '../button';

const ColumnCard = (props) => {
    const { id, title, cover, articleCount } = props;
    return (
        <a className="ColumnCard" href={`/category/${id}`}>
            <div>
                <img alt="" src={cover || '/static/img/default-avatar-56x56.png'} />
            </div>
            <div className="ColumnCard-info">
                <div className="">{title}</div>
                <div className=""></div>
            </div>
            <div className="ColumnCard-meta">12,45 人关注 | {articleCount} 篇文章</div>
        </a>
    );
}

const PostCard = props => {
    const { id, createdOn, category, title, author, excerpt, cover } = props;
    return (
        <div className="PostCard" >
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
        </div>
    );
}

const CardContainer = props => {
    const { card, items } = props;
    const Card = card;
    return (
        <div className="CardContainer">
            {items.map((value, index) => <Card key={index} {...value} />)}
        </div>
    );
}

export { ColumnCard, PostCard, CardContainer }