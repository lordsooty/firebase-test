import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Api from '../../helpers/api';

class ResetPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: false,
            error: false
        };

        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(event) {
        event.preventDefault();
        this.setState({ success: false, error: false });
        Api.resetPassword(props.email).then(() => {
            this.setState({ success: true });
        }).catch((error) => {
            console.log('error', error);
            this.setState({ error: true });
        });
    }

    render() {
        let message;
        if (this.state.success) {
            message = <p className="ui message">A temporary password has been sent to your registered email address. Please update your password after you have logged in. <br /> <Link to="/signin" className="btn m-t-2">Sign in</Link></p>;
        } else if (this.state.error) {
            message = <p className="ui error message">Please check your email address and try again.</p>;
        }

        return (
            <div className="ui middle aligned center aligned grid">
                <div className="six wide column">
                    <h1 className="ui teal header">Reset password</h1>
                    {!this.state.success ?
                        <form className="ui form" onSubmit={this.onHandleSubmit}>
                        <div className="field">
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input type="email" name="email" placeholder="Email Address" />
                        </div>
                        <button className="ui fluid teal submit button" type="submit">Reset password</button>
                    </form> : null}
                    {message}
                </div>
            </div>
        );
    }
}

// const validate = (values) => {
//     const errors = {};
//     if (!values.email) {
//         errors.email = 'Please provide your email address';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         errors.email = 'Invalid email address';
//     }
//     return errors;
// };


export default ResetPassword;
