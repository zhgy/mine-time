import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RichText } from '../../components';
import { Category, Author } from '../../components/Button';
import './style.css';
import { articleActions } from '../../store/article';

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

const Article = (props) => {
    const { id } = props.match.params;
    const dispatch = useDispatch()
    const article = useSelector(state => state.article.articleDetails)
    useEffect(() => dispatch(articleActions.findArticle(id)), [id, dispatch])
    return (article ? <div className="Article">
        <div className="Article-header">
            <ArticleHeader {...article} />
        </div>
        <div className="Article-body container" >
            <div className="Article-content"><RichText content={article.content} /></div>
            <div className="Article-sidebar">Sidebar</div>
        </div>
    </div> : <p>Loading</p>)
}

export default Article