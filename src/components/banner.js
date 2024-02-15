import styles from './banner.module.css'

function Banner ({texto, foto}) {
    return(
    <div className={styles.ContainerBanner}>
        <img src={foto} alt="foto foda" />
        <p>{texto}</p>
    </div>
    )
}

export default Banner