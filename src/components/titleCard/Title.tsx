import React from 'react';
import styled from "styled-components";

type TitlePropsType = {
    title?: string
    lineHeight?: string
    size?: string
    mTop?: string
    mBottom?: string
}

const Title: React.FC<TitlePropsType> = ({title, size, lineHeight, mTop, mBottom}) => {
    return (
        <MainText
            size={size || '26px'}
            lineHeight={lineHeight || '32px'}
            mBottom={mBottom || '41px'}
            mTop={mBottom || '35px'}
        >
            {title}
        </MainText>
    );
};

export default Title;

const MainText = styled.h2<TitlePropsType>`
  font-weight: 600;
  font-size: ${props => props.size || '26px'};
  line-height: ${props => props.lineHeight || '32px'};
  color: #000000;
  margin-top: ${props => props.mTop || '35px'};
  margin-bottom: ${props => props.mBottom || '41px'};
`