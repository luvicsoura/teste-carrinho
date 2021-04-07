import { Component } from 'react';
import axios from 'axios';

import { CartItem } from './CartItem';
import { CartItemList } from './CartItemList';
import { CartService } from './CartService';
import { Totalizer } from './Totalizer';
import { CartBody, CartHeader, StyledCart, CartTotalizers, CartActions, CartConfirm } from './CartComponent';
import { LoadingIndicator } from '../../shared/components/LoadingIndicator';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export class Cart extends Component {

    state = {
        fetching: false,
        items: [],
        value: 0
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
        this.setState({ fetching: true})

        try {
            const cartData = await this.cartService.getCartData();
            this.setState({ ...cartData, fetching: false })
        } catch {
            this.setState({ fetching: false })
        }
    }

    render() {
        return (
            <StyledCart>
                <CartHeader>
                    <h3>Meu Carrinho</h3>
                </CartHeader>
                <CartBody>
                    {this.state.fetching ? (
                        <div style={{display: 'flex', justifyContent: 'center'}}>
                            <LoadingIndicator color="#949494"/>
                        </div>
                    ) : (
                        <CartItemList>
                            {this.state.items.map((data, index) => (
                                <CartItem {...data}/>
                            ))}
                        </CartItemList>
                    )}
                </CartBody>
                <CartTotalizers>
                    <Totalizer
                        value = { this.state.value }
                        totalizers = { this.state.totalizers }
                        minValueEligibleForFreeShipping = { this.props.minValueEligibleForFreeShipping }
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