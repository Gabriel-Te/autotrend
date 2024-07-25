
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/layout/nav';
import './App.css';
import Home from './pages/Home';
import CreateNews from './pages/CreateNews';
import NewsSelected from './pages/NewsSelected';


function App() {

  return (

    <div className="App">
      <Router>

        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/criarnoticia" element={<CreateNews />}></Route>
          <Route path="/noticias/:id" element={<NewsSelected />}></Route>
        </Routes>

      </Router>



    </div>
  );
}

export default App;
