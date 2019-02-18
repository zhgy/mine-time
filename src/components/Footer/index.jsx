import React from 'react';

export class Footer extends React.Component {

    render() {
        return (
            <footer className="footer text-center py-2 theme-bg-dark">
                <small className="copyright">Designed with <i className="fas fa-heart" style={{ color: '#fb866a' }}></i> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
            </footer>
        );
    }
}