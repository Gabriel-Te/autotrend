import useNewsStore from '../../store/newsStore'
import styles from './banner.module.css'

function Banner(props) {
    const newsData = useNewsStore(state => state.news);

    const lastNews = newsData[newsData.length - 1];

    return (
        <div className={styles.ContainerBanner}>
            {lastNews ? (
                <a href={`noticias/${lastNews.id_noticia}`}>
                <img src={lastNews.imagem} alt="foto foda" />
                <div className={styles.TextArea}>
                        <p className={styles.titulo}>{lastNews.titulo}</p>
                        <p className={styles.subtitulo}>{lastNews.subtitulo}</p>
                        <p className={styles.conteudo}>{lastNews.conteudo}</p>
                </div>
                </a>
            ) : (
                <p>Sem notícias disponíveis</p>
            )}

        </div>
    )
}

export default Banner;