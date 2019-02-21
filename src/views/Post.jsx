import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Pager } from '../components/Pager';
import { findArticle } from '../redux/actions/article';

class Post extends React.Component {


    componentDidMount() {
        this.loadPost();
    }

    render() {
        if (!this.props.article) return (<div>Loading...</div>);
        const { error, loading, created, author, title, excerpt, content, category } = this.props.article;

        if (error) return (<div>Error</div>);

        return (
            <Fragment>
                <article className="blog-post px-3 py-5 p-md-5">
                    <div className="container">
                        <header className="blog-post-header">
                            <h2 className="title mb-2">{title}</h2>
                            <div className="meta mb-3"><span className="date">Published at {created}</span><span className="time">5 min read</span><span className="comment">4 comments</span></div>
                        </header>

                        <div className="blog-post-body">

                            {/* Article banner */}
                            {/* <figure className="blog-banner">
                                <a href="https://made4dev.com"><img className="img-fluid" src="https://themes.3rdwavemedia.com/demo/devblog/assets/images/about-me.jpg" alt="" /></a>
                                <figcaption className="mt-2 text-center image-caption">Image Credit: <a href="https://made4dev.com?ref=devblog" target="_blank" rel="noopener noreferrer">made4dev.com (Premium Programming T-shirts)</a></figcaption>
                            </figure> */}

                            <div dangerouslySetInnerHTML={{ __html: content }} ></div>

                        </div>

                        <Pager prev='/article/0' next='/article/0' />

                        <div className="blog-comments-section">
                            <div id="disqus_thread"></div>

                        </div>{/*blog-comments-section*/}

                    </div>{/*container*/}
                </article>

                <section className="promo-section theme-bg-light py-5 text-center">
                    <div className="container">
                        <h2 className="title">Promo Section Heading</h2>
                        <p>You can use this section to promote your side projects etc. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
                        <figure className="promo-figure">
                            <a href="https://made4dev.com" target="_blank" rel="noopener noreferrer"><img className="img-fluid" src="assets/images/promo-banner.jpg" alt="" /></a>
                        </figure>
                    </div>{/*container*/}
                </section>{/*promo-section*/}
            </Fragment>
        );

        function comment() {
            /**
					     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT 
					     *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR 
					     *  PLATFORM OR CMS.
					     *  
					     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: 
					     *  https://disqus.com/admin/universalcode/#configuration-variables
					     */
            /*
            var disqus_config = function () {
                // Replace PAGE_URL with your page's canonical URL variable
                this.page.url = PAGE_URL;  
                
                // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                this.page.identifier = PAGE_IDENTIFIER; 
            };
            */

            (function () {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
                var d = document, s = d.createElement('script');

                // IMPORTANT: Replace 3wmthemes with your forum shortname!
                s.src = 'https://3wmthemes.disqus.com/embed.js';

                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            })();
        }
    }

    loadPost() {
        this.props.dispatch(findArticle(1));
    }
}

function mapStateToProps(state, ownProps) {
    return {
        article: state.article.article
    };
}
export default connect(mapStateToProps)(Post);