import React from 'react';

import './style.css';

export class Banner extends React.Component {

    render() {
        return (
            <div className="Banner">
                <h1 className="Banner-logo">ZHGY</h1>
                <h2 className="Banner-subTitle">风沙星辰，风沙星辰</h2>
            </div>
        );
    }
}