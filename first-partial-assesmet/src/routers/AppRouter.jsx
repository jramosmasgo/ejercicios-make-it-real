import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../layout/Header';
import About from '../pages/About';
import { ProductDetail } from '../pages/ProductDetail';
import Products from '../pages/Products';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={<div style={{ margin: '20px' }}>Pagina No Encontrada</div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
