import React, { useState } from 'react';
import Login from './Login';
import Home from './Home';

function App() {
    const [token, setToken] = useState(null);

    const logout = () => setToken(null);

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return <Home logout={logout} />;
}

export default App;
