import React from "react";
import ProductList from './ProductList'
import { ProductContext } from '../../context/products'
import Loading from '../Loading'

export default function FeaturedProducts() {
  // This gives access to the specified properties in the context (loading, featured, products)
  const { loading, featured } = React.useContext(ProductContext);
  if (loading) {
    return <Loading />
  }
  return <ProductList title='featured products' products={featured} />;
}
