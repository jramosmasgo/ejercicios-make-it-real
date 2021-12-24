import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../shared/Button';
import { getProduct } from '../utils/api';
import {
  ContainerDetail,
  ContainerImage,
  Image,
  ContainerDetails,
  TilteProduct,
  CategoryProduct,
  DescriptionProduct,
  PriceProduct
} from './ProductDetailStyles';

export const ProductDetail = () => {
  const [productDetail, setProductDetail] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const product = await getProduct(id);
    setProductDetail(product);
  }, []);

  return (
    <ContainerDetail>
      <ContainerImage>
        <Image src={productDetail.image} />
      </ContainerImage>
      <ContainerDetails>
        <TilteProduct>{productDetail.title}</TilteProduct>
        <CategoryProduct>Men Clotinhg</CategoryProduct>
        <DescriptionProduct>
          {productDetail.description}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae
          nihil enim tempore ratione necessitatibus, odio maiores suscipit? Eos
          illum perferendis animi, totam est id quibusdam asperiores quaerat
          excepturi distinctio nam quia molestiae? Fuga!
        </DescriptionProduct>
        <PriceProduct>$ {productDetail.price}</PriceProduct>
        <p style={{ margin: '10px 0' }}>
          <span style={{ fontWeight: '700' }}>Cantidad:</span>{' '}
          {productDetail.rating ? productDetail.rating.count : ''}
        </p>
        <p style={{ margin: '10px 0', marginBottom: '40px' }}>
          <span style={{ fontWeight: '700' }}>Calificacion:</span>{' '}
          {productDetail.rating ? productDetail.rating.rate : ''}
        </p>
        <Button type="danger" text="Agregar Producto"></Button>
      </ContainerDetails>
    </ContainerDetail>
  );
};
