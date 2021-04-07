import React from 'react';
import styled from 'styled-components';
import { ProductThumb } from './ProductThumb';
import { formatCurrency } from '../../../shared/formatCurrency'


const StyledCartListItem = styled.li`
    list-style: none;
`

const StyledCartItem = styled.a`
    width: 100%;
    display: flex;
    margin-bottom: 16px;
    
    color: inherit;
    text-decoration: none;
`

const ProductInfo = styled.div`
    flex: 1;
    flex-wrap: wrap;
    padding-left: 18px;
    display: inline-flex;
    align-items: center;
    align-content: center;
`

const ProductTitle = styled.h3`
    width: 100%;
    display: block;
    margin-bottom: 12px;
    
    font-size: 16px;
    text-transform: lowercase;

    :first-letter {
        text-transform: uppercase;
    }
`

const FullPrice = styled.span`
    color: #a9a9a9;
    font-size: 12px;

    width: 100%;
    display: block;
    margin-bottom: 6px;
`

const ListPrice = styled.span`
    font-size: 14px;

    width: 100%;
    display: block;
`


export const CartItem = (props) => (
    <StyledCartListItem>
        <StyledCartItem href="#">
            <ProductThumb
                width = "25%"
                src = { props.imageUrl }
            />
            <ProductInfo>
                <ProductTitle> { props.name } </ProductTitle>
                {props.listPrice > props.sellingPrice && (
                    <FullPrice>
                        { formatCurrency(props.listPrice / 100) }
                    </FullPrice>
                )}
                <ListPrice> { formatCurrency((props.sellingPrice || props.listPrice )/ 100) } </ListPrice>
            </ProductInfo>
        </StyledCartItem>
    </StyledCartListItem>
)