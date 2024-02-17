import fotonoticia from '../img/fotoBanner.png'
import styles from './news.module.css'

function News () {
    return(
    <div className={styles.noticia}>
        <img src={fotonoticia} alt="" />
            <div class={styles.columm}>
            <h1>titulo</h1>
                <h2>subtitulo</h2>
                <p>Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.Seu texto aqui. Este é um texto longo que pode exceder o tamanho máximo e ser quebrado.</p>
            </div>
    </div>
    )
}

export default News 