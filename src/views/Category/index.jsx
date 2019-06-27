import React from 'react';

import { ArticleList, Banner } from '../../components';
import './style.css';


export class Category extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Banner />
                <ArticleList />
            </React.Fragment >
        );
    }
};