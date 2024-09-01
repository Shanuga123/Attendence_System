import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home({ onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <div className='home-container'>
        <div className='home'>
        <div className="welcome-msg">
        <h2>Welcome to the Student Attendance System!</h2>
        </div>
        <div className='logout-button'>
        <button onClick={handleLogout}>Logout</button>
        </div>
        </div>
        
    </div>
        
    );
}

export default Home;
