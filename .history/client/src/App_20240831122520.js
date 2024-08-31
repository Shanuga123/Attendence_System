import React, { useState } from 'react';
import Login from './Login';


function App() {
    const [token, setToken] = useState(null);

    const logout = () => setToken(null);

    if (!token) {
        return <Login setToken={setToken} />;
    }

    return <Home logout={logout} />;
}

export default App;
