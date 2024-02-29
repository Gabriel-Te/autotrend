import styles from './socialButton.module.css'

function SocialButton () {
    
    return(
    <div className={styles.containerButtonSocial}>
        <h1 className={styles.titulo}>DISCUSSÕES</h1>
        <h2 className={styles.subtitulo}>Participe de discussões com outros usuários sobre diversos assuntos automobilísticos</h2>
        <input className={styles.botao} type="button" value="COMECE A NAVEGAR->"/>
    </div>
    )}

    export default SocialButton