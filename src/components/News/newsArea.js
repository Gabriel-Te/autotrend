import { useState, useEffect } from 'react'
import News from './news'
import styles from './newsArea.module.css'
import fotonoticia from '../../img/fotoBanner.png'

function NewsArea () {

    const [NewsData, setNewsData] = useState([])

    const getNews = async () => {
      try{
        const result = await fetch('http://localhost:3001/noticias')
        const data = await result.json()
        setNewsData(data)
        console.log('dados dos usuarios adquiridos com sucesso')
      }catch(error){
        console.log('erro ao adquirir os usuarios da requisição', error)
      }
    }
  
    useEffect(() => {
      getNews()
    }, []) 
  
    return (
        <div className={styles.ContainerNews}>
        <h1 className={styles.titulo}>ULTIMAS NOTICIAS</h1>
        <h2 className={styles.subtitulo}>As notícias mais recentes do mundo do Automobilismo</h2>

        {
            NewsData.map((noticia) => {

                return(
                < News
                fotonoticia={fotonoticia}
                key={noticia.id_noticia}
                titulo={noticia.titulo}
                subtitulo={noticia.subtitulo}
                conteudo={noticia.conteudo}
                />
                )
            }
            )
        }

        </div>
    )
}

export default NewsArea