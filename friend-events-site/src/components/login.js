import React, { useState } from 'react';
import { Grid, Cell } from 'react-mdl';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <form className="form-layout">
                    <fieldset>
                    <legend>Login</legend>
                    <p>
                      <label>Email</label>
                      <input type = "text"
                             id = "myText"
                             value = {email}
                             placeholder = "example.gmail.com"
                             onChange = {(event) => setEmail(event.target.value)} />
                    </p>
                    <p>
                      <label>Password</label>
                      <input type = "password"
                              id = "myPwd"
                              value = {password}
                              onChange = {(event) => setPassword(event.target.value)} />
                    </p>
                    </fieldset>
                </form>
            </div>
        );
}

export default Login;