import React from 'react';

import { RichText } from '../../components';
import './style.css';


export class Article extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Thinking in React</h3>
                <RichText />
            </React.Fragment >
        );
    }
};