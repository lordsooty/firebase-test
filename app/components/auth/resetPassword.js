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

    onHandleSubmit(props) {
        this.setState({ success: false, error: false });
        Api.resetPassword(props.email).then(() => {
            this.setState({ success: true });
        }).catch((error) => {
            console.log('error', error);
            this.setState({ error: true });
        });
    }

    render() {
        // const { handleSubmit } = this.props;

        let message;
        if (this.state.success) {
            message = <p className="m-t-2 text-center">A temporary password has been sent to your registered email address. Please update your password after you have logged in. <br /> <Link to="/signin" className="btn m-t-2">Sign in</Link></p>;
        } else if (this.state.error) {
            message = <p className="m-t-2 error">Please check your email address and try again.</p>;
        }

        return (
            <div className="navbar-offset">
                <div className="main container-xs pad-1">
                    <h1 className="section-title text-center decorative">Reset password</h1>
                    {!this.state.success ?
                        <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email" className="sr-only">Email Address</label>
                            <input type="email" name="email" placeholder="Email Address" />
                        </div>
                        <button className="btn btn-primary btn-block" type="submit">Reset password</button>
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

// ResetPassword.propTypes = {
//     handleSubmit: PropTypes.func.isRequired
// };

export default ResetPassword;
