import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardProduct } from '../components/CardProduct';
import { getAllProducts } from '../utils/api';

const ProductsContainer = styled.div`
  width: 85%;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const LoadingContainer = styled.div`
  width:100%;
  height:200px;
  display:flex;
  align-items:center;
  flex-direction:column;
`

const LoadingSVG = styled.img`
  height:70%;
`

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const products = await getAllProducts();
    setProducts(products);
  }, []);

  return (
    <ProductsContainer>
      { products.length > 0 ? (
          products.map((item) => (
            <CardProduct key={item.id} product={item} />
          ))
      ) : (
        <LoadingContainer>
          <LoadingSVG src="/images/spinner.svg" alt="" />
          <h3>Cargando ....</h3>
        </LoadingContainer>
      )}  
    </ProductsContainer>
  );
}

export default Products;
