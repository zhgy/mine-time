import React from 'react';
import { connect } from 'react-redux';

import { ArticleList, Banner } from '../../components';
import './style.css';


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

const mapStateToProps = (state, ownProps) => {
    return {
        categoryArticles: state.article.cats
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoad: () => {
            dispatch({ type: 'FETCH_Recommend_Category' });
            dispatch({ type: 'FETCH_Latest_Article' });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);