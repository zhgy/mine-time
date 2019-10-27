import React from 'react';

import './style.css';

export const BasicLabel = ({
    children,
    className = '',
    text,
    ...rest
}) =>
    (<span className={`tl-label ${className}`} {...rest}>
        <div>{children || text}</div>
    </span>)

export const Label = (props) =>
    (<BasicLabel {...props} />)