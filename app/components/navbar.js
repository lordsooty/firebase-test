import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import AuthHelper from '../helpers/auth-helper';
import Logout from '../components/auth/logout';

const Navbar = (props) => {

    let authButton;
    if (AuthHelper.isAuthenticated()) {
        authButton = (
            <Logout />
        );
    } else {
        authButton = (
            <Link to="/signin">Sign in</Link>
        );
    }

    return (
        <div className="ui inverted menu navbar">
            <div className="header item">
                <Link to="/" id="top" className="logo">
                    <img src="/assets/images/logo.png" alt="Insurance4that" />
                </Link>
            </div>
            <div className="right menu header-text">
                <div className="item">
                    {authButton}
                </div>

            </div>
        </div>
    );
};


Navbar.propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.array
};

export default Navbar;
