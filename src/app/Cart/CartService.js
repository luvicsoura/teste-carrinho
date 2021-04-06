export class CartService {

    constructor(config, httpClient) {
        this.config = config;
        this.httpClient = httpClient;
    }

    async getCartData() {
        const response = await this.httpClient.get(this.config.endpoint);
        return response.data;
    }
}