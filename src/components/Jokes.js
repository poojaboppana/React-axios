import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './styles/Jokes.css'
function Jokes(){
    const [jokes, setJokes]= useState([]);
    useEffect(()=>{
        axios.get('https://official-joke-api.appspot.com/jokes/random/30').then(response=>{
            setJokes(response.data);
        }).catch(error=>{
            console.log("error has Occured");
        });

    },[]);
    
    return(
    <div>
        <div className='joke-home'>
<li><Link to='/' >Home</Link></li></div>
        <h1> Random Jokes</h1>
        <ul>
            {jokes.map((joke)=>(
                <li key={joke.id}>
                    <div className='jokes-container'>
                    <h3>{joke.setup}</h3>
                    <h2>{joke.punchline}</h2>
                    </div>  </li>
            ))}
        </ul>
    </div>
    );

}
export default Jokes;
