import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export const Cat = props => {
    const { id, title, color = '#39BDB1' } = props;
    return (
        <span className='Cat'>
            <Link
                to={`/category/${id}`}
                style={{ color: color }}>
                {title}
            </Link>
        </span >
    );
}

export const Author = props => {
    const { id, name } = props;
    return (
        <span className='Author'>
            <Link
                to={`/profile/${id}`}>
                {name}
            </Link>
        </span>
    );
}

export const Button = ({ title, link }) =>
    <span className='tl-button'>
        <Link title={title} to={link} >{title}</Link>
    </span>