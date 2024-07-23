import { useState, useEffect } from 'react'
import News from './news'
import styles from './newsArea.module.css'
import fotonoticia from '../../img/fotoBanner.png'
import useNewsStore from '../../store/newsStore'

function NewsArea () {

    const {setNews, newsData} = useNewsStore((state) => ({
      setNews : state.setNews,
      newsData: state.news
    }))
    //const setNews = useNewsStore(state => state.setNews)
    //const newsData = useNewsStore(state => state.news)

    const getNews = async () => {
      try{
        const result = await fetch('http://localhost:3001/noticias')
        const data = await result.json()
        setNews(data)
        console.log(setNews)
      }catch(error){
        console.log('erro ao adquirir os usuarios da requisição', error)
      }
    }
  
    useEffect(() => {
      getNews()
    }, []) 
  
    return (
        <div className={styles.containerNews}>
        <h1 className={styles.titulo}>ULTIMAS NOTICIAS</h1>
        <h2 className={styles.subtitulo}>As notícias mais recentes do mundo do Automobilismo</h2>

        { newsData.length === 0 ? (

        <div>
        <p className={styles.errorMessage}>Erro ao procurar as noticias, tente novamente mais tarde</p>
        </div>

        ) : (
          
            newsData.map((noticia) => {

                return(

                < News
                fotonoticia={fotonoticia}
                key={noticia.id_noticia}
                titulo={noticia.titulo}
                subtitulo={noticia.subtitulo}
                conteudo={noticia.conteudo}
                />
                )})
            )

        }

        </div>
    )
}

export default NewsArea