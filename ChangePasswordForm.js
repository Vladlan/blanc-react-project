import React, {Component} from "react";
import "./ChangePassworedForm.css";
import {connect} from 'react-redux';

import * as actionCreators from './actions/actions'

class ChangePasswordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incorrectCurrentPassword: null,
            ifCurrentPasswordEqualNewPassword:null
        };
    };

    onSubmit(e) {
        e.preventDefault();
        let currentPasswordFromInput = this.refs.currentPassword.value;
        let currentPassword = this.props.state.currentPassword;
        let newPassword = this.refs.newPassword.value;
        if (currentPassword !== currentPasswordFromInput) {
            let incorrectCurrentPassword2 = (<label style={{color:"red"}}>Incorrect current password</label>);
            this.setState({incorrectCurrentPassword:incorrectCurrentPassword2});
            this.refs.newPassword.value = this.refs.currentPassword.value = "";
        }
        else if (currentPassword === newPassword) {
            let ifCurrentPasswordEqualNewPassword2 = (
                <label style={{color:"red"}}>Current password is equal to new password</label>
            );
            this.setState({ifCurrentPasswordEqualNewPassword:ifCurrentPasswordEqualNewPassword2});
            this.refs.newPassword.value = this.refs.currentPassword.value = "";
        }
        else {
            this.props.changePassword(newPassword);
            this.refs.newPassword.value = this.refs.currentPassword.value = "";
            this.setState({ifCurrentPasswordEqualNewPassword:null});
            this.setState({incorrectCurrentPassword:null});
        }
    }
    
    render() {
        console.log(this.props);
        let incorrectCurrentPassword = this.state.incorrectCurrentPassword;
        let ifCurrentPasswordEqualNewPassword = this.state.ifCurrentPasswordEqualNewPassword;

        return (
            <div className="formContainer">
                <span>My form Current password is {this.props.state.currentPassword}</span>
                <form
                    onSubmit={this.onSubmit.bind(this)}>
                    <label htmlFor="">SET CURRENT PASSWORD</label>
                    <br/>
                    <input type="password"
                           placeholder="enter current password"
                           ref="currentPassword"/>

                    <br/>

                    <label htmlFor="">SET NEW PASSWORD</label>
                    <br/>
                    <input
                        placeholder="enter new password"
                        type="password"
                        ref="newPassword"
                    />
                    {ifCurrentPasswordEqualNewPassword}
                    {incorrectCurrentPassword}
                    <br/>

                    <button>Change password</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        state: state,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changePassword: (newPassword) => dispatch(actionCreators.changePassword(newPassword))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordForm);
