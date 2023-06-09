import React from 'react';
import styled from 'styled-components';


type ButtonProps = {
    padding?: string
    disabled?: boolean
}
export const Button = styled.button<ButtonProps>`
  padding: ${props => props.padding || '8px 28px'};
  color: #FFFFFF;
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.01em;
  box-shadow: 0px 4px 18px rgba(54, 110, 255, 0.35), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  background-color: ${props => props.disabled ? 'rgba(54,110,255,0.67)' : '#366EFF'};

  &:hover {
    cursor: pointer;
  }
`

