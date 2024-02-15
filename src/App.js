import NavBar from './components/nav'
import './App.css';
import Banner from './components/banner';
import fotoBanner from './img/fotoBanner.png'

function App() {
  return (
    <div className="App">
        < NavBar />

        <div className="container">
          < Banner foto={fotoBanner} texto="Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado."/>

          <h1>ULTIMAS NOTICIAS</h1>
          <h2>As notícias mais recentes do mundo do Automobilismo</h2>
        </div>
        
    </div>
  );
}

export default App;
