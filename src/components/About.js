import React from 'react';
import {Link} from 'react-router-dom'
import './styles/About.css'
function About() {
  return (
    <div className='About-container'>
      <h1>About This Project- Jokes App
      </h1>
      <div className='descript'>
<p>The Jokes App is a web application built with React.js that fetches and displays random jokes from the Official Joke API. The app is designed to be fun and easy to use, providing users with a collection of jokes at the click of a button.</p>
<h3>Technologies Used</h3>
<li><b>React.js:</b>For building the user interface.</li>
<li><b>Axios:</b> For making API requests.</li>
<li><b>React Router:</b>For handling page navigation.</li>
    </div>
    <h2>Back to Home!</h2>
    <li><Link to='/' >Home</Link></li>
    </div>
  );
}

export default About;
