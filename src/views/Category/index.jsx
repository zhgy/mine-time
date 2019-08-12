import React from 'react';
import { connect } from 'react-redux';

import { ArticleList, Banner } from '../../components';
import './style.css';
import { categoryActions } from '../../store/category';
import { bindActionCreators } from 'redux';


class Category extends React.Component {
    render() {
        const { categoryArticles } = this.props;
        const { id, type = 'recommend' } = this.props.match.params;
        const articles = categoryArticles.get(id - 0);
        const basePath = `/category/${id}`
        const buttons = [
            { to: `${basePath}/recommend`, title: '推荐' },
            { to: `${basePath}/latest`, title: '最新' },
            { to: `${basePath}/hot`, title: '热门' }
        ];
        return (
            <React.Fragment>
                <Banner />
                <ArticleList navButtons={buttons} items={articles[type]} />
            </React.Fragment >
        );
    }
};


export default connect(
    state => ({ categoryArticles: state.article.cats }),
    dispatch => bindActionCreators(categoryActions, dispatch)
)(Category);