import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Jokes from './components/Jokes';
import About from './components/About';

function App(){
  return(
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Jokes' element={<Jokes />}></Route>
          <Route path='/About' element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;