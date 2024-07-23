
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import NavBar from './components/layout/nav';
import './App.css';
import Home from './pages/Home';
import CreateNews from './pages/CreateNews';


function App() {

  return (

    <div className="App">
      <Router>

        <NavBar/>

          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/criarnoticia" element={<CreateNews/>}></Route>
          </Routes>
          
      </Router>


        
    </div>
  );
}

export default App;
