import { Cart } from './Cart';

import { API_ADDRESS, ABAIXO_ENDPOINT, ACIMA_ENDPOINT, FREE_SHIPPING_MIN_VALUE } from '../config';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
`;

function App() {
  return (
    <StyledApp>
      <Cart
        apiAddress = { API_ADDRESS }
        endpoint = { ABAIXO_ENDPOINT }
      />
      <Cart
        apiAddress = { API_ADDRESS }
        endpoint = { ACIMA_ENDPOINT }
      />
    </StyledApp>
  );
}

export default App;
