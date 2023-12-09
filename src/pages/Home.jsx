import React from 'react'
import {useAllProducts} from '../hooks/useProducts';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
  const {products} = useAllProducts(10)
 
  return (
    <div>
    <ItemListContainer products={products}/>
  </div>
    )
}
export default Home;
