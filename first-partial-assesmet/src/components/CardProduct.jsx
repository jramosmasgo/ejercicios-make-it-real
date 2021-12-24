import { useEffect, useState } from "react"
import styled from "styled-components"
import { Button } from "../shared/Button"

const ContainerCard = styled.div`
    margin: 20px;
    background: white;
    box-shadow: 1px 2px 10px black;
    width: 320px;
    border-radius: 5px; 
    overflow: hidden;
`

const ContainerImageCard = styled.div`
    height: 380px;
    display:flex;
    justify-content:center;
    align-items:center;
`
const ImageCard = styled.img`
    width: 80%;    
    height:80%;
    object-fit:cover;
`

const ContainerDetails = styled.div`
    width: 100%;
    padding : 0 10px 10px 10px;
`

const DetailsTitle = styled.p`
    font-size: 18px;
    font-weight: 800;
`

const DetailsOthers = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content : space-between;
`

const TimeRemaining = styled.p`
    color: #ccc5b9;
    font-size : 18px;
`

export const CardProduct = ({ product }) => {

    const [seconds, setSeconds] = useState(Math.floor(Math.random() * 1000));
    const [timeReaining, setTimeReaining] = useState('');


    const setValueTimeReaining = function () {
        const hours = Math.floor(seconds / (60 * 60));
        const divisor_for_minutes = seconds % (60 * 60);
        const minutes = Math.floor(divisor_for_minutes / 60);
        const divisor_for_seconds = divisor_for_minutes % 60;
        const secondsrest = Math.ceil(divisor_for_seconds);

        const hoursString = hours < 10 ? `0${hours}` : hours;
        const minutesString = minutes < 10 ? `0${minutes}` : minutes;
        const secondString = secondsrest < 10 ? `0${secondsrest}` : secondsrest;

        const valuetime = `${hoursString}:${minutesString}:${secondString}`;
        setTimeReaining(valuetime);
    }

    let interval;
    useEffect(() => {
        interval = setInterval(() => {
            setSeconds(item => item - 1)
        }, 1000)

        return () => {
            clearInterval(interval);
        };
    }, [])

    useEffect(() => {
        if (seconds >= 0) {
            setValueTimeReaining()
        } else {
            clearInterval(interval);
        }
    }, [seconds])

    return (
        <ContainerCard>
            <ContainerImageCard>
                <ImageCard src={product.image} alt="" />
            </ContainerImageCard>
            <ContainerDetails>
                <DetailsTitle> {product.title} </DetailsTitle>
            </ContainerDetails>
            <DetailsOthers>
                <TimeRemaining >{timeReaining}</TimeRemaining>
                <Button disabled={seconds <= 0 ? true : false} type="primary" text="Ver detalles" />
            </DetailsOthers>
        </ContainerCard>
    )
}
