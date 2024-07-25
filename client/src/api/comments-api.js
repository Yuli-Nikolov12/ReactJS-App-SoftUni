import * as request from "./requester"

const BASE_URL ='http://localhost:3030/data/products';

const createComment = (productId, emailAddress, text) => request.post(`${BASE_URL}/${productId}/comments`, { emailAddress, text });

const allComments = async (productId) => {
    const result = await request.get(`${BASE_URL}/${productId}`);
    
    const comments = Object.values(result.comments);

    return comments;
}

export default {createComment, allComments };