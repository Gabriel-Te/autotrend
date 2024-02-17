import News from './news'
import styles from './newsArea.module.css'

function NewsArea () {
    return (
        <div className={styles.ContainerNews}>
        <h1 className={styles.titulo}>ULTIMAS NOTICIAS</h1>
        <h2 className={styles.subtitulo}>As notícias mais recentes do mundo do Automobilismo</h2>

        < News/>
        </div>
    )
}

export default NewsArea