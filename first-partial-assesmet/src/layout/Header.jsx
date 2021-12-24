import React from 'react'
import { ContainerHeader, ContainerTitle, Title, MenuItem, ContainerMenu } from './HeaderStyle';

function Header() {
    return (
        <ContainerHeader>
            <ContainerTitle>
                <Title>First Parcial</Title>
            </ContainerTitle>
            <ContainerMenu>
                <MenuItem>Inicio</MenuItem>
                <MenuItem>Products</MenuItem>
                <MenuItem>About</MenuItem>
            </ContainerMenu>
        </ContainerHeader>
    )
}

export default Header
