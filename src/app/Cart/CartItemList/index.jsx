import { Component } from 'react'
import styled from 'styled-components'

const StyledCartList = styled.ul`
    padding: 0;
    margin: 0;
`

const EmptyMessage = styled.span`
    color: #909090;
    font-size: 21px;
    text-align: center;
    
    width: 100%;
    display: block;
`

export class CartItemList extends Component {
    
    render() {
        return (
            <StyledCartList>
                {this.props.children.length ? this.props.children : <EmptyMessage>Carrinho Vazio!</EmptyMessage>}
            </StyledCartList>
        )
    }
}