import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer className={styles.footer}>
            <p>MiniStore &copy; 2023 </p>
            <p>Desenvolvido por <Link href="#">Victor Schaffrath</Link></p>
        </footer>
    );
}

export default Footer;