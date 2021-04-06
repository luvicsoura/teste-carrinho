import { Component } from "react";
import { formatCurrency } from '../../../shared/formatCurrency';

export class Totalizer extends Component {

    valueToCurrencyString(value) {
        return formatCurrency(value / 100);
    }

    render() {
        return(
            <table>
                <tr>
                    <td>Total</td>
                    <td></td>
                    <td>{this.valueToCurrencyString(this.props.value)}</td>
                </tr>
            </table>
        )
    }
}