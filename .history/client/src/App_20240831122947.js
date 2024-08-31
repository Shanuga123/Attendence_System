import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
                {token ? <Redirect to="/home" /> : <Login setToken={setToken} />}
            </Route>
            <Route path="/home">
                {token ? <Home logout={logout} /> : <Redirect to="/" />}
            </Route>
        </Router>
    );
}

export default App;
