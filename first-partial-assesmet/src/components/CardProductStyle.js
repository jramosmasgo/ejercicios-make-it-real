import styled from 'styled-components';

export const ContainerCard = styled.div`
  margin: 20px;
  background: white;
  box-shadow: 1px 2px 10px black;
  width: 320px;
  border-radius: 5px;
  overflow: hidden;
`;

export const ContainerImageCard = styled.div`
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageCard = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`;

export const ContainerDetails = styled.div`
  width: 100%;
  padding: 0 10px 10px 10px;
`;

export const DetailsTitle = styled.p`
  font-size: 18px;
  font-weight: 800;
`;

export const DetailsOthers = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TimeRemaining = styled.p`
  color: #ccc5b9;
  font-size: 18px;
`;
