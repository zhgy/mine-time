import React from 'react';

import { RichText, Category, Author } from '../../components';
import { useSingleArticle } from '../../api/PostAPI';
import { useParams } from 'react-router-dom';
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
    const { id } = useParams();
    const {status, data: article} = useSingleArticle(id);
    return (status === 'DONE' ? <div className="Article">
        <div className="Article-header">
            <ArticleHeader {...article} />
        </div>
        <div className="Article-body container" >
            <div className="Article-content"><RichText content={article.content} /></div>
            <div className="Article-sidebar">Sidebar</div>
        </div>
    </div> : <p>Loading</p>)
}
