import NavBar from './layout/nav'
import './App.css';
import Banner from '../src/components/banner';
import fotoBanner from './img/fotoBanner.png'
import NewsArea from './components/newsArea';

function App() {
  return (
    <div className="App">
        < NavBar />

        <div className="container">
          < Banner foto={fotoBanner} texto="Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado."/>

          < NewsArea/>

        </div>
        
    </div>
  );
}

export default App;
