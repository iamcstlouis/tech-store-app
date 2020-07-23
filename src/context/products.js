import React from 'react'

export const ProductContext = React.createContext();

// Provider, Consumer, useContext()

export default function ProductProvider({ children }) {

    const [loading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    const [featured, setfeatured] = React.useState([]);

    return (
        <ProductContext.Provider value={{ loading, products, featured }}>
            {children}
        </ProductContext.Provider>
    )
}

