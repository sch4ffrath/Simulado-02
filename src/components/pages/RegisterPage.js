import { useState } from 'react';
import styles from './RegisterPage.module.css';

function RegisterPage() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Obter produtos existentes ou array vazio
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    
    // Adicionar novo produto
    const updatedProducts = [...existingProducts, {
      ...product,
      id: Date.now() // Usando timestamp como ID único
    }];
    
    // Salvar no localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    
    // Limpar formulário
    setProduct({
      name: '',
      price: '',
      description: ''
    });
    
    alert('Produto cadastrado com sucesso!');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input 
            type="text" 
            name="name" 
            value={product.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Preço:</label>
          <input 
            type="number" 
            name="price" 
            value={product.price} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea 
            name="description" 
            value={product.description} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;