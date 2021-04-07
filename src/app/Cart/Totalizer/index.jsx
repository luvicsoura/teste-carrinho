import { Component } from "react";
import styled from 'styled-components';
import { formatCurrency } from '../../../shared/formatCurrency';

const StyledTotalizer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const TotalizerTable = styled.table`
    width: 100%;
    display: flex;
    padding: 10px 0;
    flex-wrap: wrap;
`

const TotalizerTableBody = styled.tbody`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

const TotalizerRow = styled.tr`
    width: 100%;
    display: flex;
`

const TotalizerColumn = styled.td`
    flex: 1;
    display: inline-flex;
    justify-content: ${({ textAlign = 'left' }) => textAlignToContentJustification(textAlign)};

    font-weight: 700;
    text-align: ${({ textAlign = 'left'}) => textAlign};
`

const FreeShippingNotice = styled.span`
    color: #1c7b00;
    line-height: 1;

    margin-top: 10px;
    border-radius: 25px;
    display: inline-block;
    padding: 10px 18px 12px;
    background-color: #c8ffa8;
`

function textAlignToContentJustification(textAlign) {
    const map = {
        'left': 'flex-start',
        'right': 'flex-end'
    }
    return map[textAlign]
}
export class Totalizer extends Component {

    getCurrencyValue() {
        return formatCurrency(this.props.value / 100);
    }

    hasFreeShipping() {
        return (
            this.props.minValueEligibleForFreeShipping 
            && 
            (this.props.value >= this.props.minValueEligibleForFreeShipping )
        )
    }

    render() {
        return(
            <StyledTotalizer>
                <TotalizerTable>
                    <TotalizerTableBody>
                        <TotalizerRow>
                            <TotalizerColumn>Total</TotalizerColumn>
                            <TotalizerColumn
                                textAlign = "right"
                            >
                                {this.getCurrencyValue()}
                            </TotalizerColumn>
                        </TotalizerRow>
                    </TotalizerTableBody>
                </TotalizerTable>
                {this.hasFreeShipping() && (
                    <FreeShippingNotice>
                        Parabéns, sua compra tem frete grátis!
                    </FreeShippingNotice>
                )}
            </StyledTotalizer>
        )
    }
}