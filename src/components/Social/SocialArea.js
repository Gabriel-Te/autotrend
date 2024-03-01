
import SocialButton from './socialButton'
import styles from './socialArea.module.css'

function SocialArea() {


    return(
        <div className={styles.ContainerSocial}>
            <h1 className={styles.titulo}>AREA DA COMUNIDADE</h1>
            <h2 className={styles.subtitulo}>Junte-se a nossa comunidade apaoixonada por automóveis</h2>

            < SocialButton/>

            < SocialButton/>
        </div>
    )
}

export default SocialArea