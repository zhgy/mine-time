import React from 'react';
import './style.css';

const ColumnCard = (props) => {
    const { id, title, articleCount } = props;
    return (
        <a className="ColumnCard" href={`/category/${id}`}>
            <svg className="Avatar" height="56" viewBox="0 0 16 16" version="1.1" width="56" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
            <div className="ColumnCard-info">
                <div className="">{title}</div>
                <div className=""></div>
            </div>
            <div className="ColumnCard-meta">12,45 人关注 | {articleCount} 篇文章</div>
        </a>
    );
}

const PostCard = props => {
    const { id, createdOn, category, title, author, excerpt } = props;
    return (
        <div className="PostCard" >
            <div className="PostCard-img">
                <a href={`/article/${id}`}>
                    <figure>
                        <img alt="" src="https://static-www.elastic.co/v3/assets/bltefdd0b53724fa2ce/bltc9f848c854106dc1/5c57ed31c0eac4f70b57ad75/blog-training-thumb.png" />
                    </figure>
                </a>
            </div>
            <div className="PostCard-content">
                <div className="PostCard-date-category-wrapper">
                    <span className="PostCard-date">
                        <time dateTime={createdOn}>{new Date(createdOn).toLocaleDateString()}</time>
                    </span>
                    <span className="PostCard-category">
                        <a href={`/category/${category.id}`} >{category.title}</a>
                    </span>
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
                        <span>By</span>
                        <span>
                            <a href={`/profile/${author.id}`}>{author.name}</a>
                        </span>
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