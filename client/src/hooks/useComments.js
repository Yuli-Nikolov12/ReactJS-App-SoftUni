import { useState, useEffect } from "react";

import commentsAPI from "../api/comments-api";

export function useAllComments(productId) {
    const [comments, setComments] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
          const result = await commentsAPI.allComments(productId);
  
          setComments(result);
          setIsFetching(false);
          }
        )();
    },[]);

    return [comments, setComments, isFetching];
}