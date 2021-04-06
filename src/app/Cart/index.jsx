import { Component } from 'react';
import axios from 'axios';

import { CartItem } from './CartItem';
import { CartItemList } from './CartItemList';
import { CartService } from './CartService';
import { Totalizer } from './Totalizer';
import { CartBody, CartHeader, StyledCart, CartTotalizers, CartActions, CartConfirm } from './CartComponent';


export class Cart extends Component {

    state = {
        items: []
    }

    constructor(props) {
        super();
        
        const serviceConfig = { endpoint: props.endpoint };
        const httpClient = axios.create({ baseURL: props.apiAddress });

        this.cartService = new CartService(serviceConfig, httpClient);
    }
    
    componentDidMount() {
        this.fetchCartData();
    }

    async fetchCartData() {
        const cartData = await this.cartService.getCartData();
        this.setState({ ...cartData })
    }

    render() {
        return (
            <StyledCart>
                <CartHeader>
                    <h3>Meu Carrinho</h3>
                </CartHeader>
                <CartBody>
                    <CartItemList>
                        {this.state.items.map((data) => (
                            <CartItem {...data}/>
                        ))}
                    </CartItemList>
                </CartBody>
                <CartTotalizers>
                    <Totalizer
                        value = { this.state.value }
                        totalizers = { this.state.totalizers }
                    />
                </CartTotalizers>
                <CartActions>
                    <CartConfirm>
                        Finalizar compra
                    </CartConfirm>
                </CartActions>
            </StyledCart>
        )
    }
}