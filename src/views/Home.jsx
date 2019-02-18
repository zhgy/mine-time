import React, { Fragment } from 'react';

import { Header, PostList, Welcome, Footer } from '../components';

export default class Home extends React.Component {

    render() {
        return (
            <Fragment>
                <Header />

                <div className="main-wrapper">
                    <Welcome />
                    <PostList />
                </div>

                <Footer />
            </Fragment >
        );
    }
}