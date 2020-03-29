import React from 'react';

import { RichText, Category, Author } from '../../components';
import { useQuery } from '../../core/useFetch';
import './style.css';

const ArticleHeader = ({ createdOn, category, title, author }) =>
    (<div className="ArticleHeader container">
        <span className="ArticleHeader-date">
            <time>{createdOn}</time>
        </span>

        <Category {...category} style={{ color: 'white' }} />

        <div className="ArticleHeader-title">
            <h1 className="">{title}</h1>
        </div>

        <div className="ArticleHeader-author">
            <span className="">Author&nbsp;</span>
            <Author {...author} />
        </div>

    </div>)

export const Article = (props) => {
    const { id } = props.match.params;
    const [data] = useQuery(`/api/posts/${id}`);
    const article = data.data;
    return (article ? <div className="Article">
        <div className="Article-header">
            <ArticleHeader {...article.data} />
        </div>
        <div className="Article-body container" >
            <div className="Article-content"><RichText content={article.content} /></div>
            <div className="Article-sidebar">Sidebar</div>
        </div>
    </div> : <p>Loading</p>)
}
