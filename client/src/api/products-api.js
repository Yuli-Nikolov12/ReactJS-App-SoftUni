import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/products';

export const allProducts = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);

    return products;
}

export const createProduct = ( name, price, imageSrc, details) => request.post(`${BASE_URL}`, { name, price, imageSrc, details });

export const oneProduct = (productId) => request.get(`${BASE_URL}/${productId}`);

export const editProduct = (productId, name, price, imageSrc, details) => request.put(`${BASE_URL}/${productId}`, { name, price, imageSrc, details });

const productsAPI = {
    allProducts,
    oneProduct,
    createProduct,
    editProduct
};

export default productsAPI;