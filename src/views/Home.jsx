import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { PostList, Welcome } from '../components';
import { fetchArticleInfos } from '../redux/actions/article'

export const Feed = PostList;
class Home extends React.Component {

    componentDidMount() {
        this.loadArticles();
    }

    render() {
        const { articleList = [] } = this.props;
        const metas = articleList.map((meta, index) => ({
            id: meta.id,
            thumb: null,
            title: meta.title,
            meta: {
                date: meta.created,
                reads: meta.hits,
                comments: 0
            },
            intro: meta.excerpt
        }));
        return (
            <Fragment>
                <Welcome />
                <PostList metas={metas} />
            </Fragment >
        );
    }

    loadArticles(pageIndex = 1, pageSize = 20) {
        this.props.dispatch(fetchArticleInfos({ pageIndex, pageSize, type: 'latest' }))
    }
};

function mapStateToProps(state, ownProps) {
    return {
        ...state.article,
    };
}
export default connect(mapStateToProps)(Home);