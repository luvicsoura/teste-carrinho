import React from 'react';
import styled from 'styled-components';

const Thumb = styled.div`
    width: ${props => props.width};
    overflow: hidden;
    
`

const ImageContainer = styled.div`
    width: 100%;
    padding-bottom: 100%;
    
    position: relative;
`

const Img = styled.img`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
`

export const ProductThumb = ({ src, width = '100%'}) => (
    <Thumb width = { width }>
        <ImageContainer>
            <Img src = { src } />
        </ImageContainer>
    </Thumb>
)