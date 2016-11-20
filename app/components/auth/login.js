import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
// import { Button } from 'semantic-ui-react'

import authHelper from '../../helpers/auth-helper';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { loading: false };
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    componentWillMount() {
        if (authHelper.isAuthenticated()) {
            browserHistory.push('/user/policies');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isAuthenticated === true) {
            if (location.search === '?redirect') {
                browserHistory.goBack();
            } else {
                browserHistory.push('/user/policies');
            }
        }
        if (nextProps.errorMessage) {
            this.state = { loading: false };
        }
    }

    onHandleSubmit(props) {
        this.state = { loading: true };
        console.log('logging in')
        // this.props.dispatch(logoutAction());
        // this.props.dispatch(loginAction(props));
    }

    render() {
        // const { handleSubmit } = this.props;
        return (
            <div className="navbar-offset">
                <div className="container-xs">
                    <h1 className="section-title text-center decorative">Welcome back</h1>
                    <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">User name</label>
                            <input type="email" name="email" placeholder="Email Address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <button className="ui primary button" type="submit" disabled={this.state.loading}>{ this.state.loading ? 'Signing in...' : 'Sign in' }</button>
                        {this.props.errorMessage ? 
                            <div className="help-text error m-t-1">Login failed, please check your details and try again</div> 
                            : null}
                        <p className="text-center m-t-2">
                            <Link to="/reset-password" activeClassName="active">Forgot your password?</Link>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    credentials: PropTypes.object,
    dispatch: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    errorMessage: PropTypes.string,
    // handleSubmit: PropTypes.func.isRequired
};

// function mapStateToProps(state) {
//     return {
//         errorMessage: state.auth.errorMessage,
//         isAuthenticated: state.auth.isAuthenticated
//     };
// }

// function validate(values) {
//     const errors = {};
//     if (!values.email) {
//         errors.email = 'Please enter your email address';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Please enter a valid email address';
//     }
//     if (!values.password) {
//         errors.password = 'Please enter a password';
//     } else if (values.password.length < 8) {
//         errors.password = 'Minimum length of 8 characters';
//     }
//
//     return errors;
// }


export default Login
