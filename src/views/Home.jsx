import React, { Fragment } from 'react';

import { PostList, Welcome } from '../components';

export const Feed = PostList;
export const Home = (props) => {
    return (
        <Fragment>
            <Welcome />
            <PostList />
        </Fragment >
    );
};