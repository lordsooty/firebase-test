import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import { connect } from 'react-redux';
import authHelper from '../helpers/auth-helper';

const Navbar = (props) => {
    // const toggle = () => {
    //     document.body.classList.toggle('nav-open');
    // };
    //
    // const closeNav = () => {
    //     document.body.classList.remove('nav-open');
    // };

    let authButton;
    if (authHelper.isAuthenticated()) {
        authButton = (
            <Link to="/user/policies">Sign out</Link>
        );
    } else {
        authButton = (
            <Link to="/signin">Sign in</Link>
        );
    }

    return (
        <nav className="navbar primary-font">
            <Link to="/" id="top" className="logo">
                <img src="/assets/images/logo.png" alt="Insurance4that" />
            </Link>
            <ul className="nav nav-inline">
                <li>{authButton}</li>
            </ul>
            <span className="navbar-bg" />
        </nav>
    );
};


Navbar.propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.array
};

// function mapStateToProps(state) {
//     return state;
// }
//
// export default connect(mapStateToProps)(Navbar);
export default Navbar;
