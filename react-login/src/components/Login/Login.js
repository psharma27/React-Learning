import React, { Component } from 'react';



class Login extends Component {
    render() {
        return (
            <div className="login">
                UserName:<br />
                <input type="text" name="firstname" /><br />
                Password:<br />
                <input type="text" name="lastname" />
            </div>

        );
    }
}

export default Login;
