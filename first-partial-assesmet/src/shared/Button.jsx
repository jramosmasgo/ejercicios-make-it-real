import React from 'react';
import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background : silver;
  }

`
const PrimaryButton = styled(ButtonStyled)`
  background:${({ theme }) => theme.first};
  color: ${({ theme }) => theme.fourth};
  transition: all .2s ;

  &:hover:enbled {
    outline: 1px solid ${({ theme }) => theme.first};
    background: ${({ theme }) => theme.fourth};
    color: ${({ theme }) => theme.first};
  }  
`

const DangerButton = styled(ButtonStyled)`
  background:${({ theme }) => theme.second};
  color: ${({ theme }) => theme.fourth};
`

const WarningButton = styled(ButtonStyled)`
  background:${({ theme }) => theme.third};
  color: ${({ theme }) => theme.fourth};
`


export const Button = ({ type, text, disabled = false }) => {
  switch (type) {
    case 'primary':
      return <PrimaryButton disabled={disabled} >{text}</PrimaryButton>

    case 'danger':
      return <DangerButton>{text}</DangerButton>

    case 'warning':
      return <WarningButton>{text}</WarningButton>

    default:
      return <ButtonStyled>{text}</ButtonStyled>
  }
}
