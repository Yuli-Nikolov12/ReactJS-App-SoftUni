import * as request from "./requester"

const BASE_URL ='http://localhost:3030/data/comments';

export const createComment = (productId, emailAddress, text) => request.post(`${BASE_URL}`, { emailAddress, text, productId });

export const allComments = async (productId) => {
    const result = await request.get(`${BASE_URL}?where=productId%3D%22${productId}%22`);
    
    const comments = Object.values(result);

    return comments;
}

export default { createComment, allComments };