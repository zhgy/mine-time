import React from 'react';

import './style.css';

const StartBar = ({ text }) =>
    (<h3 className="StartBar">
        {text ? <div className="StartBar-text">{text}</div> : null}
        <div className="StartBar-line"></div>
    </h3>)


export { StartBar };