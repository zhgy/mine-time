import React from 'react';

import './style.css';

const StartBar = (props) =>
    (<h3 className="StartBar">
        <div className="StartBar-text">{props.text}</div>
        <div className="StartBar-line"></div>
    </h3>)


export { StartBar };