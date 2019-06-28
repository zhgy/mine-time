import React from 'react';
import { connect } from 'react-redux';

import { RichText } from '../../components';
import './style.css';


class Article extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h3>Thinking in React</h3>
                <p>{JSON.stringify(this.props)}</p>
                <RichText />
            </React.Fragment >
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        article: state.article.items.filter(e => e.id === id)
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article)