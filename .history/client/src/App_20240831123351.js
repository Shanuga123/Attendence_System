import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
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
            <Route exact path="/">
                {token ? <Navigate to="/home" /> : <Login setToken={setToken} />}
            </Route>
            <Route path="/home">
                {token ? <Home logout={logout} /> : <Navigate to="/" />}
            </Route>
        </Router>
    );
}

export default App;
