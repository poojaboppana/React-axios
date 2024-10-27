import React from 'react';
import {Link } from 'react-router-dom';
import './styles/Home.css'
function Home() {
    return (
        <div className='Home-container'>
            <nav className='nav-bar'>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/Jokes'>Jokes</Link></li>
                    <li><Link to='/About'>About</Link></li>
                </ul>
            </nav>
            <div className='home-descript'>
            <h1>Welcome to the Home Page of the Jokes App!!</h1>
            <p>Get ready to laugh with some random jokes!</p>
        </div></div>
    );
}

export default Home;
