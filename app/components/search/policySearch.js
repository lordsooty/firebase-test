import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';

import authHelper from '../../helpers/auth-helper';
import Api from '../../helpers/api'

class PolicySearch extends Component {

    constructor(props) {
        super(props);
        this.state = { searching: false };
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    componentWillMount() {
        if (authHelper.isAuthenticated()) {
            browserHistory.push('/home');
        }
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.errorMessage) {
        this.state = { searching: false };
        // }
    }

    onHandleSubmit(event) {
        console.log('searching for policy')
        event.preventDefault();

        Api.findPolicy(event.target.policy.value).then((result) => {
            // browserHistory.push('/home');
            console.log('policy found', result.data)
        }).catch((err) => {
            // todo - add error msg to page
            console.log(err.message);
        })
    }

    render() {
        return (
            <div className="ui middle aligned center aligned grid">
                <div className="six wide column">
                    <h1 className="ui teal header">Policy Search</h1>

                    <form className="ui form" onSubmit={this.onHandleSubmit}>
                        <div className="field">
                            <label htmlFor="email">Policy number</label>
                            <input type="text" name="policy" placeholder="Policy Number" />
                        </div>

                        <button className="ui fluid teal submit button" type="submit" disabled={this.state.searching}>{ this.state.searching ? 'Submitting...' : 'Search' }</button>
                        {this.props.errorMessage ?
                            <div className="help-text error">Policy</div>
                            : null}
                        <p className="text-center">
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


export default PolicySearch
