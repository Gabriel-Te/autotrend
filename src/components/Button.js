import styles from './Button.module.css'

function Button ({value, type}) {
    return(
        <>
            <input className={styles.botao} type={type} value={value}/>
        </>
    )
}

export default Button