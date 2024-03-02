import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        console.log('Logging in with username:', username, 'and password:', password);
    };

    return (
        <div>
            <h2>Login</h2>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br></br>
                <br></br>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <br></br>
                <button type="button" onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login;
