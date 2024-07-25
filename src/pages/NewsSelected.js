import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './newsSelected.module.css'

function NewsSelected() {
    const [news, setNews] = useState(null)
    const { id } = useParams();
    const getNewsById = async () => {
        try {
            const result = await fetch(`http://localhost:3001/noticias/${id}`)
            const data = await result.json()
            setNews(data)

        } catch (error) {
            console.log('erro ao receber a noticia por id', error
            )
        }
    };

    useEffect(() => {
        getNewsById()
    }, [])



    return (
        <div className={styles.container}>
            {news == null ? (
                <p>erro</p>
            ) : (
                <>
                <img className={styles.image} src={news.imagem} alt="imagem da noticia" />
                <h1 className={styles.titulo}>{news.titulo}</h1>
                <h2 className={styles.subtitulo}>{news.subtitulo}</h2>
                <p className={styles.conteudo}>{news.conteudo}</p>
                </>
            )}
        </div>
    )
};
export default NewsSelected