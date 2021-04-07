import { Cart } from './Cart';

import { API_ADDRESS, ABAIXO_ENDPOINT, ACIMA_ENDPOINT, minValueForFreeShipping } from '../config';
import styled from 'styled-components';

const StyledApp = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 90%;
  max-width: 1344px;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-around;
`

function App() {
  return (
    <StyledApp>
      <ContentContainer>
        <Cart
          apiAddress = { API_ADDRESS }
          endpoint = { ABAIXO_ENDPOINT }
          minValueEligibleForFreeShipping = { minValueForFreeShipping }
        />
        <Cart
          apiAddress = { API_ADDRESS }
          endpoint = { ACIMA_ENDPOINT }
          minValueEligibleForFreeShipping = { minValueForFreeShipping }
        />
      </ContentContainer>
    </StyledApp>
  );
}

export default App;
