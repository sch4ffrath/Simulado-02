import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <h1 className={styles.title}>MiniStore</h1>
            <nav className={styles.nav}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Produtos</Link></li>
                    <li><Link to="/register">Cadastrar</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;