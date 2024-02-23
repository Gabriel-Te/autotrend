import fotonoticia from '../img/fotoBanner.png'
import styles from './news.module.css'

function News () {
    return(
    <div className={styles.noticia}>
        <img src={fotonoticia} alt="" />

            <div class={styles.columm}>
            <h1>MERCEDES CLASS S MAYBACH</h1>
                <h2>O carro mais luxuoso da preparadora Maybach</h2>
                <p>Seu texto aqui. Este é um texto longo que pode exo.</p>
            </div>
            
    </div>
    )
}

export default News 