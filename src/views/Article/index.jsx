import React from 'react';
import { connect } from 'react-redux';

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

const Article = () =>
    (<div className="Article">
        <div className="Article-header">
            <ArticleHeader />
        </div>
        <div className="Article-body container" >
            <div className="Article-content"><RichText /></div>
            <div className="Article-sidebar">Sidebar</div>
        </div>
    </div>)

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        article: state.article.items.filter(e => e.id === id)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)