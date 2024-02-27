import NavBar from './layout/nav'
import './App.css';
import Banner from './components/layout/banner';
import fotoBanner from './img/fotoBanner.png'
import NewsArea from './components/News/newsArea';
import SocialArea from './components/Social/SocialArea';

function App() {


  return (
    <div className="App">
        < NavBar />

        <div className="container">
          < Banner foto={fotoBanner} texto="Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado."/>

          <div className='gridContainer'>
            < NewsArea/>

            < SocialArea/>
          </div>
        </div>
        
    </div>
  );
}

export default App;
