import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import Api from '../../helpers/api';

class ChangePassword extends Component {
    // todo - haven't changed / tested this as haven't got a place for it yet.

    constructor(props) {
        super(props);

        this.state = {
            success: false,
            serverError: false
        };
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }

    onHandleSubmit(props) {
        this.setState({ success: false, error: false });
        Api.changePassword(props.oldPassword, props.newPassword).then(() => {
            this.setState({ success: true });
        }).catch((error) => {
            console.log('error', error);
            this.setState({ serverError: true });
        });
    }

    render() {
        // const { handleSubmit } = this.props;

        let message = null;
        if (this.state.serverError) {
            message = <p className="m-b-2 error">Your password is incorrect.</p>;
        } else if (this.state.success) {
            message = <p className="m-t-2 text-center">Your password has been successfully updated<br /> <Link to="/user/profile" className="btn m-t-2">Ok</Link></p>;
        }

        return (
            <div className="navbar-offset">
                <div className="main container-xs pad-1">
                    <h1 className="section-title text-center decorative">Change password</h1>
                    {!this.state.success ? <form onSubmit={this.onHandleSubmit}>
                        <div className="form-group">
                            <label htmlFor="oldPassword">Your Existing Password</label>
                            <input type="password" name="oldPassword"  placeholder="Existing Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newPassword">Your New Password</label>
                            <input type="password" name="newPassword" placeholder="New Password" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Your New Password</label>
                            <input type="password" name="confirmPassword" placeholder="Confirm new Password" />
                        </div>
                        <button className="btn" type="button" onClick={browserHistory.goBack}>Cancel</button>
                        <button className="btn btn-primary" type="submit">Update</button>
                    </form> : null}
                    {message}
                </div>
            </div>
        );
    }
}

// const validate = (values) => {
//     const errors = {};
//     const missing = 'Please enter a password';
//     const invalid = 'Minimum length of 8 characters';
//
//     if (!values.oldPassword) {
//         errors.oldPassword = missing;
//     } else if (values.oldPassword.length < 8) {
//         errors.oldPassword = invalid;
//     }
//     if (!values.newPassword) {
//         errors.newPassword = missing;
//     } else if (values.newPassword.length < 8) {
//         errors.newPassword = invalid;
//     }
//     if (!values.confirmPassword) {
//         errors.confirmPassword = missing;
//         if (values.confirmPassword !== values.newPassword) {
//             errors.confirmPassword = 'New passwords do not match.';
//         }
//     } else if (values.confirmPassword.length < 8) {
//         errors.confirmPassword = invalid;
//     }
//
//     return errors;
// };

// ChangePassword.propTypes = {
//     handleSubmit: PropTypes.func.isRequired
// };

export default ChangePassword;
