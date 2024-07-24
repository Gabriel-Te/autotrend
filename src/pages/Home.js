import NewsArea from '../components/News/newsArea';
import SocialArea from '../components/Social/socialArea';

import Banner from '../components/layout/banner';
import fotoBanner from '../img/fotoBanner.png';

function Home() {

  return (
    <div className="container">

      < Banner foto={fotoBanner} texto="Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado." />

      <div className='gridContainer'>
        < NewsArea />

        < SocialArea />
      </div>
    </div>
  )
}

export default Home