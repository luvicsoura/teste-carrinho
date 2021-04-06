import styled from 'styled-components';

const padding = '18px';

export const StyledCart = styled.div`
    width: 100%;
    margin: 100px;
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
    text-align: center;
`

export const CartBody = styled.div`
    flex: 1;
    width: 100%;
    padding: ${padding};
    overflow-y: hidden;
    padding-right: 5px;


    ::-webkit-scrollbar-track {
        box-shadow: none;
        background-color: rgba(0,0,0,.1);
        border-radius: 16px;
    }

    ::-webkit-scrollbar {
        width: 5px;
        position: absolute;
        background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(0,0,0,.3);
        border-radius: 16px; 
    }

    :hover {
        overflow-y: auto;
    }
`

export const CartTotalizers = styled.div`
    width: 100%;
    padding: ${padding};
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
`