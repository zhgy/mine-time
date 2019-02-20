import React from 'react';
import { Link } from 'react-router-dom';

import thumb from './blog-post-thumb-9.jpg';
import { Pager } from '../Pager';


const Card = ({ thumb, title, meta, intro }) => {
    return (<div className="item mb-5">
        <div className="media">
            <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={thumb} alt="" />
            <div className="media-body">
                <h3 className="title mb-1">
                    <Link className='more-link' to='/article/0' >{title}</Link>
                </h3>
                <div className="meta mb-1"><span className="date">Published {meta.date} days ago</span><span className="time">{meta.reads} min read</span><span className="comment"><a href="/">{meta.comments} comments</a></span></div>
                <div className="intro">{intro}</div>
                <Link className='more-link' to='/article/0' >Read more</Link>
            </div>
        </div>
    </div>);
};

export class PostList extends React.Component {

    render() {
        var post = {
            thumb,
            title: 'Why Every Developer Should Have A Blog',
            meta: {
                date: 2,
                reads: 5,
                comments: 5
            },
            intro: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...',
        };
        const posts = [];
        for (let i = 0; i < 6; i++) { posts.push(post); }

        return (
            <div>
                <section className="blog-list px-3 py-5 p-md-5">
                    <div className="container">
                        {posts.map((data, index) => <Card key={index} {...data} />)}
                        <Pager next='/timeline' />
                    </div>
                </section>
            </div>
        );
    }
}