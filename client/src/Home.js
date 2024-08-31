import React from 'react';

function Home({ logout }) {
    return (
        <div className="home-container">
            <h2>Welcome!</h2>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Home;
