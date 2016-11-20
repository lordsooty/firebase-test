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

        // this.props.dispatch(logoutAction());
        browserHistory.push('/');
    }

    render() {
        return (
            <Link to="#" onClick={this.handleLogout}>Sign out</Link>
        );
    }
}

Logout.propTypes = {
    dispatch: PropTypes.func,
    isAuthenticated: PropTypes.bool
};

// function mapStateToProps(state) {
//     return {
//         isAuthenticated: state.auth.isAuthenticated
//     };
// }

export default Logout

