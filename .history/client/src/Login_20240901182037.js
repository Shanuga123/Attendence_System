import React, { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            const token = response.data.token;
            setToken(token);
            localStorage.setItem('73529e5e7d9eae9ba56a7ac8cf688187265fa2df14d685660d1e4cb346fbfe923719665051d9ecfc5e184a2be2acd3c4f1c61f661c333f9ae578d2ea726efeac', token); // Store the token in local storage
            window.location.href = '/home';
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
