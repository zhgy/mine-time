import React from 'react';

import './style.css';

const StartBar = (props) =>
    (<h3 className="StartBar">
        {props.text ? <div className="StartBar-text">{props.text}</div> : null}
        <div className="StartBar-line"></div>
    </h3>)


export { StartBar };