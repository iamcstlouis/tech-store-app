import React, { useContext } from "react";
import { ProductContext } from '../context/products'
import Loading from '../components/Loading'
import ProductList from '../components/Products/ProductList'

export default function Products() {
  // This gives access to the specified properties in the context (loading, products)
  const { loading, products } = React.useContext(ProductContext);

  if (loading) {
    return <Loading />
  }
  return <ProductList title='our products' products={products} />
}
