import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', { username, password });
            const token = response.data.token;

            if (token) {
                setToken(token);
                localStorage.setItem('92d7ddc01cec38cbf69545c27295133f49a4167e6f5d69131e2bcf408a3197de123891aae6d3cb3301dbe239a7e2b1335ff3478e36e6a9b4fe27ae03954d59f4', token);
                navigate('/home');
            }
        } catch (error) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className='login-page'>
            <div className='login-image'>

            <img src='att.jpg'></img>
            </div>
        <div className="login-container">
            <h1>Start your Journey Here!</h1>
            <h2>Please Enter Login Details</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
        </div></div>
    );
}

export default Login;
