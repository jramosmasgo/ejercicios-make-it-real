import React, { useEffect, useState } from 'react';
import { Button } from '../shared/Button';
import { useNavigate } from 'react-router-dom';
import {
  ContainerCard,
  ContainerImageCard,
  ImageCard,
  ContainerDetails,
  DetailsTitle,
  DetailsOthers,
  TimeRemaining
} from './CardProductStyle';

export const CardProduct = ({ product }) => {
  const [seconds, setSeconds] = useState(Math.floor(Math.random() * 1000));
  const [timeReaining, setTimeReaining] = useState('');
  const navigate = useNavigate();

  const redirectToDetails = function () {
    navigate(`/products/${product.id}`);
  };

  const setValueTimeReaining = function () {
    const hours = Math.floor(seconds / (60 * 60));
    const divisorForMinutes = seconds % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);
    const divisorForSeconds = divisorForMinutes % 60;
    const secondsrest = Math.ceil(divisorForSeconds);

    const hoursString = hours < 10 ? `0${hours}` : hours;
    const minutesString = minutes < 10 ? `0${minutes}` : minutes;
    const secondString = secondsrest < 10 ? `0${secondsrest}` : secondsrest;

    const valuetime = `${hoursString}:${minutesString}:${secondString}`;
    setTimeReaining(valuetime);
  };

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      setSeconds((item) => item - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (seconds >= 0) {
      setValueTimeReaining();
    } else {
      clearInterval(interval);
    }
  }, [seconds]);

  return (
    <ContainerCard>
      <ContainerImageCard>
        <ImageCard src={product.image} alt="" />
      </ContainerImageCard>
      <ContainerDetails>
        <DetailsTitle> {product.title} </DetailsTitle>
      </ContainerDetails>
      <DetailsOthers>
        <TimeRemaining> {timeReaining} </TimeRemaining>
        <Button
          action={redirectToDetails}
          disabled={seconds <= 0}
          type="primary"
          text="Ver detalles"
        />
      </DetailsOthers>
    </ContainerCard>
  );
};
