import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';


class Logout extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(event) {
        console.log('handleLogout')
        event.preventDefault();
        localStorage.removeItem('auth-token');

        console.log('goto signin')
        browserHistory.push('/signin');
    }

    render() {
        return (
            <Link to="#" onClick={this.handleLogout}>Sign out</Link>
        );
    }
}

// Logout.propTypes = {
//     dispatch: PropTypes.func,
//     isAuthenticated: PropTypes.bool
// };


export default Logout

