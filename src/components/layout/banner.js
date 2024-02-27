import styles from './banner.module.css'

function Banner (props) {
    return(
    <div className={styles.ContainerBanner}>
        <img src={props.foto} alt="foto foda" />
        <p>{props.texto}</p>
    </div>
    )
}

export default Banner