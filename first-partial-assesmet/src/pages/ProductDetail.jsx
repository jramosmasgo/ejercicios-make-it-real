import styled from "styled-components"
import { Button } from "../shared/Button"

const ContainerDetail = styled.div`
    width:80%;
    margin:40px auto;
    border-radius:5px;
    padding:20px;
    display:flex;
    box-shadow:1px 1px 10px silver;
    flex-wrap:wrap;
    @media (max-width: 1246px) {
        flex-direction: column;
    }
`
const ContainerImage = styled.div`
    flex: 2;
    height:70vh;
    width:450px;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width: 1246px) {
        width: 100%;
    }
`
const Image = styled.img`
    height: 90%;
    width:90%;
    object-fit: contain;   
`
const ContainerDetails = styled.div` 
    flex:2;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
`
const TilteProduct = styled.h3`
    font-size: 30px;
    width:100%;
`
const CategoryProduct = styled.p`
    color: silver;
    font-size: 20px;
    margin: 15px 0;
`
const DescriptionProduct = styled.p`
    width:100%
    font-size: 15px;
    margin: 20px 0;
`
const PriceProduct = styled.p`
    font-size: 37px;
    color:red;
    font-weight:800;
    margin-bottom:20px;
`

export const ProductDetail = () => {
    return (
        <ContainerDetail>
            <ContainerImage>
                <Image src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" />
            </ContainerImage>
            <ContainerDetails>
                <TilteProduct>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</TilteProduct>
                <CategoryProduct>Men Clotinhg</CategoryProduct>
                <DescriptionProduct>
                    Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve,
                    your everyday
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vitae nihil enim tempore ratione necessitatibus,
                    odio maiores suscipit? Eos illum perferendis animi, totam est id quibusdam asperiores quaerat excepturi distinctio nam quia molestiae? Fuga!
                </DescriptionProduct>
                <PriceProduct>
                    $23.12
                </PriceProduct>
                <p style={{ 'margin': '10px 0' }} ><span style={{ 'fontWeight': '700' }} >Cantidad:</span> 12</p>
                <p style={{ 'margin': '10px 0', 'marginBottom': '40px' }} ><span style={{ 'fontWeight': '700' }} >Calificacion:</span> 3.9</p>
                <Button type="danger" text="Agregar Producto"></Button>
            </ContainerDetails>
        </ContainerDetail>
    )
}
