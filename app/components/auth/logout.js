import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';


class Logout extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem('auth-token');

        browserHistory.push('/signin');
    }

    render() {
        return (
            <Link to="#" onClick={this.handleLogout}>Sign out</Link>
        );
    }
}

export default Logout

