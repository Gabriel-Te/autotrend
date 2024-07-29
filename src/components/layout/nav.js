import { Link, } from 'react-router-dom'
import atIndex from '../../img/autotrend.svg'
import fotoPerfil from '../../img/imgperfil.png'
import styles from './nav.module.css'

function NavBar() {

  return (
    <nav className={styles.navContainer}>
      <a href="/">
        <img src={atIndex} alt="autotrend" className={styles.imgautotrend} />
      </a>

      <a className={styles.fotoPerfil}>
        <Link to='/criarnoticia'><img src={fotoPerfil} alt="perfil" /></Link>
      </a>


    </nav>
  )

}

export default NavBar