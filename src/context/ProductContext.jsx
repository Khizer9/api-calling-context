import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../api";

const ProductContext = createContext()

export function ProductProvider({children}){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true); 
        fetchData()
          .then((data) => {
            setProducts(data);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error, "error");
            setLoading(false);
          });
      }, []);

    return (
        <ProductContext.Provider value={{products, loading}}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProducts(){
    return useContext(ProductContext)
}