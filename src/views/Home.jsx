import React, { Fragment } from 'react';

import { Banner, StartBar, CardContainer } from '../components';


class Home extends React.Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <div className="Home">
                    <StartBar text={"分类 · 推荐"} />
                    <CardContainer />
                </div>
            </Fragment >
        );
    }
};

export default Home;