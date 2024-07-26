import useNewsStore from '../../store/newsStore'
import styles from './banner.module.css'

function Banner(props) {
    const newsData = useNewsStore(state => state.news);

    const lastNews = newsData[newsData.length - 1];

    const truncateText = (text, length) => {
        return text.length > length ? `${text.substring(0, length)}...` : text
    }

    return (
        <div className={styles.ContainerBanner}>
            {lastNews ? (
                <a href={`noticias/${lastNews.id_noticia}`}>
                <img src={lastNews.imagem} alt="foto foda" />
                <div className={styles.TextArea}>
                        <p className={styles.titulo}>{truncateText(lastNews.titulo, 70)}</p>
                        <p className={styles.subtitulo}>{truncateText(lastNews.subtitulo, 80)}</p>
                        <p className={styles.conteudo}>{truncateText(lastNews.conteudo, 200)}</p>
                </div>
                </a>
            ) : (
                <p>Sem notícias disponíveis</p>
            )}

        </div>
    )
}

export default Banner;