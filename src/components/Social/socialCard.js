import Button from '../Button'
import styles from './socialCard.module.css'

function SocialCard () {
    
    return(
    <div className={styles.containerButtonSocial}>
        <h1 className={styles.titulo}>DISCUSSÕES</h1>
        <h2 className={styles.subtitulo}>Participe de discussões com outros usuários sobre diversos assuntos automobilísticos</h2>
        <Button value='COMECE A NAVEGAR >' type='submit'/>
    </div>
    )}

    export default SocialCard