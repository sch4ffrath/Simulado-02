import styles from './HomePage.module.css';
import { useNavigate } from 'react-router-dom'; 

function HomePage() {

    const navigate = useNavigate();

    const goToProducts = () => {
        navigate('/products');
    }

    const goToRegister = () => {
        navigate('/register');
    }
    return (
        <div className={styles.home}>
            <h1>Bem-vindo à MiniStore</h1>
            <p>Encontre os melhores produtos para você!</p>
            <div>
                <button onClick={goToProducts}>Produtos</button>
                <button onClick={goToRegister}>Cadastrar Produto</button>

            </div>
        </div>
    );
}

export default HomePage;