import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export const Cat = ({ id, title, color = '#39BDB1' }) =>
    (<span className='Cat'>
        <Link
            to={`/category/${id}`}
            style={{ color: color }}>
            {title}
        </Link>
    </span>)

export const Author = ({ id, name }) =>
    (<span className='Author'>
        <Link
            to={`/profile/${id}`}>
            {name}
        </Link>
    </span>)

export const Button = ({ title, link }) =>
    (<span className='tl-button'>
        <Link title={title} to={link} >{title}</Link>
    </span>)