import React from 'react';
import { Button } from '../shared/Button';
import {
  CategoryProduct,
  ContainerDetail,
  ContainerDetails,
  ContainerImage,
  DescriptionProduct,
  Image,
  PriceProduct,
  TilteProduct
} from './ProductDetailStyles';

function About() {
  const irAlGithub = function () {
    const url = 'https://github.com/jramosmasgo';
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <ContainerDetail>
      <ContainerImage>
        <Image src="https://blog.ida.cl/wp-content/uploads/sites/5/2015/01/backend-655x470.jpg" />
      </ContainerImage>
      <ContainerDetails>
        <TilteProduct>Jean Paul Ramos Masgo</TilteProduct>
        <CategoryProduct> Correo: ramosmasgo@gmail.com</CategoryProduct>
        <DescriptionProduct>
          Hola mi nombre es Jean Ramos Masgo tengo 24 anios de edad vivo en la
          ciudad de Huancayo - Peru. Me gusta mucho el mundo del desarrollo web
          y de aplicaciones para dispositivos moviles. Realize trabajos como
          desarrollador fullstack con tecnologias como C# con Asp.net, Angular
          JS, Base de datos relacionales como MySQL y SQL Server , entre otras
          tecnologias. Mis pasatiempos favoritos son tocar bateria, salir de
          paseo y jugar videojuegos.
        </DescriptionProduct>
        <PriceProduct>Temas que aprendi:</PriceProduct>
        <p style={{ margin: '10px 0', marginBottom: '10px' }}>
          <span style={{ fontWeight: '700' }}>Git: </span> Manejo de ramas ,
          Union de Ramas, Hacer solicitudes merge{' '}
        </p>
        <p style={{ margin: '10px 0', marginBottom: '10px' }}>
          <span style={{ fontWeight: '700' }}>Javascript: </span> Hoisting, Pila
          de ejecucion,manejo de DOM{' '}
        </p>
        <p style={{ margin: '10px 0', marginBottom: '20px' }}>
          <span style={{ fontWeight: '700' }}>React: </span> UseState ,
          UseEffect, componentes basados en clases, llamadas a apis mediante
          Fetch{' '}
        </p>
        <Button action={irAlGithub} type="primary" text="Ir al Github"></Button>
      </ContainerDetails>
    </ContainerDetail>
  );
}

export default About;
