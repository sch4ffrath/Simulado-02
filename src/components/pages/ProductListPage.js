import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductListPage.module.css';

function ProductListPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Lista de Produtos</h2>
      
      {products.length === 0 ? (
        <p>Nenhum produto cadastrado ainda.</p>
      ) : (
        <ul className={styles.productList}>
          {products.map(product => (
            <li key={product.id} className={styles.productItem}>
              <h3>{product.name}</h3>
              <p>Preço: R$ {Number(product.price).toFixed(2)}</p>
              
              <div className={styles.buttons}>
                <Link 
                  to={`/products/${product.id}`}
                  className={styles.detailsButton}
                >
                  Ver Detalhes
                </Link>
                
                <button 
                  onClick={() => handleDelete(product.id)}
                  className={styles.deleteButton}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductListPage;