import News from './news'
import styles from './newsArea.module.css'
import fotonoticia from '../../img/fotoBanner.png'

function NewsArea () {
    return (
        <div className={styles.ContainerNews}>
        <h1 className={styles.titulo}>ULTIMAS NOTICIAS</h1>
        <h2 className={styles.subtitulo}>As notícias mais recentes do mundo do Automobilismo</h2>

        < News
                fotonoticia={fotonoticia}
        titulo='Mercedes Maybach: Luxo Alemão'
        subtitulo='Preparadora de luxo da Mercedes refaz Classe S com espaço até com frigobar'
        conteudo='Mussum Ipsum, cacilds vidis litro abertis.  Paisis, filhis, espiritis santis. Leite de capivaris, leite de mula manquis sem cabeça. Nulla id gravida magna, ut semper sapien. Bota 1 metro de cachacis aí pra viagem!'
        />
        < News
        fotonoticia={fotonoticia}
        titulo='Mercedes Maybach: Luxo Alemão'
        subtitulo='Preparadora de luxo da Mercedes refaz Classe S com espaço até com frigobar'
        conteudo='Mussum Ipsum, cacilds vidis litro abertis.  Paisis, filhis, espiritis santis. Leite de capivaris, leite de mula manquis sem cabeça. Nulla id gravida magna, ut semper sapien. Bota 1 metro de cachacis aí pra viagem!'
        />
        < News
        fotonoticia={fotonoticia}
        titulo='Mercedes Maybach: Luxo Alemão'
        subtitulo=' espaço até com frigobar'
        conteudo='Mussum Ipsum, cacilds vidis litro abertis.  Paisis, filhis, espiritis santis. Leite de capivaris, leite de mula manquis sem cabeça. Nulla id gravida magna, ut semper sapien. Bota 1 metro de cachacis aí pra viagem!'
        />
        </div>
    )
}

export default NewsArea