import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import { Category, Author } from '../Button';

export const ColumnCard = ({ id, name, description, articleCount = 0 }) =>
    <>
        <div>
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
        <div>
            <Category target='_blank' id={id} name={'VIEW ALL'} />
        </div>
    </>

export const PostCard = ({ id, createdOn, category, title, author, excerpt }) =>
    (<>
        <div className="PostCard-date-category-wrapper">
            <span className="PostCard-date">
                <time dateTime={createdOn}>{new Date(createdOn).toLocaleDateString()}</time>
            </span>
            <Category {...category} />
        </div>
        <div className="PostCard-title">
            <span>
                <Link to={`/article/${id}`}>
                    {title}
                </Link>
            </span>
        </div>
        <div className="PostCard-author">
            <div>
                <span>By&nbsp;</span>
                <Author {...author} />
            </div>
        </div>
        <p>{excerpt}</p>
    </>)

export const Cover = (props) => {
    const { cover, width, height, } = props;
    const style = {
        margin: '0px',
        width,
        height,
        borderStyle: 'none'
    };
    return (
        <img
            alt=""
            style={style}
            src={cover || '/static/img/default-cover.png'} />
    );
}

export const Cardify = ({ cover, coverProps, children }) => 
    <div className="tl-cardify">
        <dvi className="tl-cardify-cover">
            <Cover cover={cover} {...coverProps} />
        </dvi>
        <div className="tl-cardify-content">
            {children}
        </div>
    </div>

export const CardGridView = ({ items = [], onRenderCard, cardProps }) =>
    (<div className="tl-cardGridView">
        {items.map((item, index) => (
            <Cardify key={index}
                {...cardProps}
                cover={item.cover}
            >
                {onRenderCard(item)}
         </Cardify>   
        ))}
    </div>)

export const CardListView = ({ items =[], onRenderCard}) => 
    (<ul className="tl-cardListView">
        {items.map((item, index) =>
            <li key={index}>{onRenderCard(item)}</li>
        )}
    </ul>)
