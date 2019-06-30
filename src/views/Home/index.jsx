import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Banner, StartBar, CardContainer } from '../../components';
import { ColumnCard, PostCard } from '../../components/CardContainer';
import { fetchRecommendCategory } from '../../redux/actions/category';
import './style.css';


class HomePage extends React.Component {

    componentDidMount() {
        const { onLoad } = this.props;
        onLoad();
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

const mapStateToProps = (state, ownProps) => {
    return {
        columns: state.category.recommend,
        posts: state.article.latest
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoad: () => {
            dispatch(fetchRecommendCategory());
            console.log('fetchRecommendCategory');
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);