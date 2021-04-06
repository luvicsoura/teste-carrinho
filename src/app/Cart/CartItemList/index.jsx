import { Component } from 'react'
import styled from 'styled-components'

const StyledCartList = styled.ul`
    padding: 0;
    margin: 0;
`

export class CartItemList extends Component {
    
    render() {
        return (
            <StyledCartList>
                {this.props.children ? this.props.children : <span>Carrinho Vazio!</span>}
            </StyledCartList>
        )
    }
}