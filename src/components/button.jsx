import React from 'react';
import { Link } from 'react-router-dom';

import './button.css';

export const Cat = props => {
    const { id, title, color = '#39BDB1' } = props;
    return (
        <span className="Cat">
            <Link
                to={`/category/${id}`}
                style={{ color: color }}>
                {title}
            </Link>
        </span >
    );
}