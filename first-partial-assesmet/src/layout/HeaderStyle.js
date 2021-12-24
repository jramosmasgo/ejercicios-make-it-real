import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerHeader = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 70px;
  background: ${({ theme }) => theme.first};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1240px) {
    padding: 0 20px;
  }
`;

export const ContainerTitle = styled.div`
  width: max-content;
`;

export const ContainerMenu = styled.div`
  width: max-content;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.fourth};
  @media (max-width: 1246px) {
    font-size: 25px;
  }
`;

export const MenuItem = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.fourth};
  margin-right: 20px;
  position: relative;
  cursor: pointer;

  &.active {
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 1246px) {
    margin-right: 10px;
  }

  &:after {
    position: absolute;
    bottom: -5px;
    left: 0;
    content: '';
    width: 0%;
    height: 2px;
    background: white;
    transition: all 0.4s;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
`;
