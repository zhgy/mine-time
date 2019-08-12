import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Banner, StartBar, CardContainer } from '../../components';
import { ColumnCard, PostCard } from '../../components/CardContainer';
import { categoryActions } from '../../store/category';
import './style.css';
import { bindActionCreators } from 'redux';


class HomePage extends React.Component {

    componentDidMount() {
        this.props.fetchRecommendCategory();
    }

    render() {
        const { columns = [], posts = [] } = this.props;
        return (
            <Fragment>
                <Banner />
                <div className="Home">
                    <StartBar text={"分类 · 推荐"} />
                    <CardContainer card={ColumnCard} items={columns} />
                    <StartBar text={"文章 · 最新"} />
                    <CardContainer card={PostCard} items={posts} />
                </div>
            </Fragment >
        );
    }
};


export default connect(
    state => ({ columns: state.category.recommend, posts: state.article.latest }),
    dispatch => bindActionCreators(categoryActions, dispatch)
)(HomePage);