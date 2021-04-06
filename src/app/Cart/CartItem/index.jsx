import React from 'react';
import styled from 'styled-components';
import { ProductThumb } from './ProductThumb';
import { formatCurrency } from '../../../shared/formatCurrency'


export const StyledCartItem = styled.li`
    width: 100%;
    display: flex;
    list-style: none;
    margin-bottom: 16px;
`

const ProductTitle = styled.h3`

`

const ListPrice = styled.span`
`

const FullPrice = styled.span`
`

export const CartItem = (props) => (
    <StyledCartItem>
        <ProductThumb
            width = "25%"
            src = { props.imageUrl }
        />
        <div>
            <ProductTitle> { props.name } </ProductTitle>
            {props.listPrice > props.sellingPrice && (
                <ListPrice>
                    { formatCurrency(props.listPrice / 100) }
                </ListPrice>
            )}
            <FullPrice> { formatCurrency(props.sellingPrice / 100) } </FullPrice>
        </div>
    </StyledCartItem>
)