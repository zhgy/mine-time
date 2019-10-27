import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


export const BasicButton = ({ title, href, children, onClick, ...rest }) =>
    onClick ?
        <a title={title} href={href} {...rest} onClick={e => { onClick(e); e.preventDefault(); }} >{children || title}</a> :
        <Link title={title} to={href} {...rest}>{children || title}</Link>

export const Button = ({ className = '', ...rest }) =>
    (<span className={`tl-btn ${className}`}>
        <BasicButton {...rest} />
    </span>)

export const Author = ({ id, name, ...rest }) =>
    (<Button className='tl-btn-author' title={name} href={`/profile/${id}`} {...rest} />)

export const Category = ({ id, name, ...rest }) =>
    (<Button className='tl-btn-category' title={name} href={`/category/${id}`} {...rest} />)