import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductDetailPage from './components/pages/ProductDetailPage';
import RegisterPage from './components/pages/RegisterPage';
import ProductListPage from './components/pages/ProductListPage';
import Container from './components/layout/Container';  



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/products" element={<ProductListPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
