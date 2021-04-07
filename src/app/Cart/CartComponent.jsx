import styled from 'styled-components';
import { ScrollableSection } from '../../shared/components/ScrollableSection';

const padding = '18px';

export const StyledCart = styled.div`
    width: 100%;
    max-width: 450px;
    max-height: 760px;
    border-radius: 10px;
    display: inline-flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
`;

export const CartHeader = styled.div`
    width: 100%;
    padding: ${padding};
    padding-right: calc(${padding} - 5px);
    border-bottom: 2px solid #e5e5e5;

    text-align: center;
`

export const CartBody = styled(ScrollableSection)`
    flex: 1;
    width: 100%;
    padding: ${padding};
`

export const CartTotalizers = styled.div`
    width: 100%;
    font-size: 18px;
    padding: ${padding};
    border-top: 2px solid #e5e5e5;
    border-bottom: 2px solid #e5e5e5;
`

export const CartActions = styled.div`
    width: 100%;
    padding: ${padding};
`

export const CartConfirm = styled.button`
    border: 0;  
    outline: 0;
    width: 100%;
    padding: 18px;
    border-radius: 8px;
    background-color: #3b75f2;

    color: #fff;
    line-height: 1;
    font-size: 18px;
    font-weight: 700;

    cursor: pointer;

    transition: background-color .3s ease;

    &:hover {
        background-color: #325bb5;
    }
`