import {useState, useEffect} from 'react';
import {Link,Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import NavBar from './layout/nav'
import './App.css';
import Home from './pages/Home';


function App() {

  return (

    <div className="App">

        <NavBar/>
        
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>  
      </Router>


        
    </div>
  );
}

export default App;
