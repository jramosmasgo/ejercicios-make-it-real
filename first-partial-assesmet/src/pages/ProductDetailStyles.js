import styled from 'styled-components';

export const ContainerDetail = styled.div`
  width: 80%;
  margin: 40px auto;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  box-shadow: 1px 1px 10px silver;
  flex-wrap: wrap;
  @media (max-width: 1246px) {
    flex-direction: column;
  }
`;
export const ContainerImage = styled.div`
  flex: 2;
  height: 70vh;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1246px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  height: 90%;
  width: 90%;
  object-fit: contain;
`;
export const ContainerDetails = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
`;
export const TilteProduct = styled.h3`
  font-size: 30px;
  width: 100%;
`;
export const CategoryProduct = styled.p`
  color: silver;
  font-size: 20px;
  margin: 15px 0;
`;
export const DescriptionProduct = styled.p`
width:100%
font-size: 15px;
margin: 20px 0;
`;
export const PriceProduct = styled.p`
  font-size: 37px;
  color: red;
  font-weight: 800;
  margin-bottom: 20px;
`;
