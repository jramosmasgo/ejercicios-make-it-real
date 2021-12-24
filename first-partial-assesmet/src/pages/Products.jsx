import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CardProduct } from '../components/CardProduct';
import { getAllProducts } from '../utils/api';

const ProductsContainer = styled.div`
    width: 85%;
    margin : 10px auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`

function Products(props) {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const products = await getAllProducts();
        console.log(products[0]);
        setProducts(products);
    }, [])

    return (
        <ProductsContainer>
            {products.map((item) => <CardProduct key={item.id} product={item} />)}
        </ProductsContainer>
    )
}

export default Products;

