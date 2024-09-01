import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
    const [token, setToken] = useState(null);

    const logout = () => {
        setToken(null);
        window.location.href = '/';
    };

    return (
        <Router>
            <Routes>
                <Route 
                    path="/" 
                    element={token ? <Navigate to="/home" /> : <Login setToken={setToken} />}
                />
                <Route 
                    path="/home" 
                    element={token ? <Home logout={logout} /> : <Navigate to="/" />}
                />
            </Routes>
        </Router>
    );
}

export default App;
