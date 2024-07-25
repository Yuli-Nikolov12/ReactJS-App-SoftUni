import { useState, useEffect } from "react";

import productsAPI from "../api/products-api";

export function useAllProducts() {
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        (async () => {
          const result = await productsAPI.allProducts();
  
          setProducts(result);
          setIsFetching(false);
        }
        )();
      },[]);

      return [products, setProducts, isFetching];
}

export function useGetOneProduct(productId) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const result = await productsAPI.oneProduct(productId);

            setProduct(result);
        })()
    },[]);

    return [product, setProduct];
}