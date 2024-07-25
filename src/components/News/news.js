
import styles from './news.module.css'

function News(props) {
    return (
        <div className={styles.noticia}>
            <a href={`/noticias/${props.id}`}>
                <img src={props.imagem} alt="asaa" />

                <div className={styles.columm}>
                    <h1>{props.titulo}</h1>
                    <h2>{props.subtitulo}</h2>
                    <p>{props.conteudo}</p>
                </div>
            </a>
        </div>
    )
}

export default News 