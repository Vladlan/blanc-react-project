import React, {Component} from "react";
import "./ChangePassworedForm.css";


class ChangePasswordForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        let currentPassword = this.refs.currentPassword.value;
        let newPassword = this.refs.newPassword.value;


    }
    
    render() {
        console.log(this.props);
        return (
            <div className="formContainer">
                <span>My form Current password is {this.props.state.currentPassword}</span>
                <form
                    action="">
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
                    <br/>


                    <button>Change password</button>


                </form>
            </div>
        )
    }

}

export default ChangePasswordForm;
