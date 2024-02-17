import atIndex from '../img/autotrend.png'
import fotoPerfil from '../img/fotoperfil.jpg'
import styles from './nav.module.css'

function NavBar () {

    return(
    <nav>
        <a href="/">
          <img src={atIndex} alt="autotrend" className={styles.imgautotrend}/>
        </a>

        <a href="/perfil"  className={styles.fotoPerfil}>
          <img src={fotoPerfil} alt="perfil"/>
        </a>
    </nav>
    )

}

export default NavBar