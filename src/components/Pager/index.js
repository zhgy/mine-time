import React from 'react';
import { Link } from 'react-router-dom';

export class Pager extends React.Component {

    render() {
        const { prev, next } = this.props;
        let base = 'nav-link-prev nav-item nav-link ';
        let left = base, right = base;
        if (prev && next) {
            left += 'rounded';
            right += 'rounded';
        } else if (prev) {
            left += 'rounded';
            right += 'd-none rounded-left';
        } else {
            left += 'd-none rounded-left';
            right += 'rounded';
        }

        return (
            <nav className="blog-nav nav nav-justified my-5">
                <Link className={left} to={prev || '#'}>Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i></Link>
                <Link className={right} to={next || '#'}>Next<i className="arrow-next fas fa-long-arrow-alt-right"></i></Link>
            </nav>
        );
    }
}