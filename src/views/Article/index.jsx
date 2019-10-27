import React from 'react';
import { useSelector } from 'react-redux';

import { RichText } from '../../components';
import { Cat, Author } from '../../components/Button';
import './style.css';

const ArticleHeader = props =>
    (<div className="ArticleHeader container">
        <span className="ArticleHeader-date">
            <time dateTime="1558382520000">2019年5月21日</time>
        </span>

        <Cat id={0} title={'news'} color={'white'} />

        <div className="ArticleHeader-title">
            <h1 className="">Thinking in react</h1>
        </div>

        <div className="ArticleHeader-author">
            <span className="">Author&nbsp;</span>
            <Author id={0} name={'Reactjs'} />
        </div>

    </div>)

const Article = (props) => {
    const { id } = props.match.params;
    const article = useSelector(state => state.article.items.filter(e => e.id === id))
    return (<div className="Article">
        <div className="Article-header">
            <ArticleHeader />
        </div>
        <div className="Article-body container" >
            <div className="Article-content"><RichText /></div>
            <div className="Article-sidebar">Sidebar</div>
        </div>
    </div>)
}

export default Article