import * as request from './requester';

const BASE_URL = 'http://localhost:3030/jsonstore/products/products';

export const allProducts = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);

    return products;
}

export const oneProduct = (productId) => request.get(`${BASE_URL}/${productId}`);

const productsAPI = {
    allProducts,
    oneProduct
};

export default productsAPI;