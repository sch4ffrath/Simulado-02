import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './ProductDetailPage.module.css';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const foundProduct = storedProducts.find(p => p.id === Number(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className={styles.container}>
        <h2>Produto não encontrado</h2>
        <Link to="/products">Voltar para lista</Link>
      </div>
    );
  }

  return (
      
      <div className={styles.productDetail}>
        <h3>{product.name}</h3>
        <p><strong>Preço:</strong> R$ {Number(product.price).toFixed(2)}</p>
        <p><strong>Descrição:</strong> {product.description}</p>
        <p><strong>ID:</strong> {product.id}</p>
        
        <div className={styles.buttons}>
          <Link to="/products" className={styles.backButton}>
            Voltar para lista
          </Link>
        </div>
      </div>
  );
}

export default ProductDetailPage;