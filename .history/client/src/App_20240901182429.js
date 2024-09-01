import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
    const [token, setToken] = useState(localStorage.getItem('92d7ddc01cec38cbf69545c27295133f49a4167e6f5d69131e2bcf408a3197de123891aae6d3cb3301dbe239a7e2b1335ff3478e36e6a9b4fe27ae03954d59f4'));

    useEffect(() => {
        setToken(localStorage.getItem('92d7ddc01cec38cbf69545c27295133f49a4167e6f5d69131e2bcf408a3197de123891aae6d3cb3301dbe239a7e2b1335ff3478e36e6a9b4fe27ae03954d59f4'));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('92d7ddc01cec38cbf69545c27295133f49a4167e6f5d69131e2bcf408a3197de123891aae6d3cb3301dbe239a7e2b1335ff3478e36e6a9b4fe27ae03954d59f4');
        setToken(null);
    };

    return (
        <Router>
            <Routes>
                <Route 
                    path="/login" 
                    element={token ? <Navigate to="/home" /> : <Login setToken={setToken} />} 
                />
                <Route 
                    path="/home" 
                    element={token ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} 
                />
                <Route 
                    path="/" 
                    element={<Navigate to={token ? "/home" : "/login"} />} 
                />
            </Routes>
        </Router>
    );
}

export default App;
