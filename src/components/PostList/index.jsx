import React from 'react';

import thumb from './blog-post-thumb-9.jpg';

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
                        {
                            posts.map((data, index) => (
                                <div key={index} className="item mb-5">
                                    <div className="media">
                                        <img className="mr-3 img-fluid post-thumb d-none d-md-flex" src={data.thumb} alt="image" />
                                        <div className="media-body">
                                            <h3 className="title mb-1"><a href="blog-post.html">{data.title}</a></h3>
                                            <div className="meta mb-1"><span className="date">Published {data.meta.date} days ago</span><span className="time">{data.meta.reads} min read</span><span className="comment"><a href="#">{data.meta.comments} comments</a></span></div>
                                            <div className="intro">{data.intro}</div>
                                            <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                                        </div>
                                    </div>
                                </div>))
                        }

                        <nav className="blog-nav nav nav-justified my-5">
                            <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
                            <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></a>
                        </nav>

                    </div>
                </section>
            </div>
        );
    }
}