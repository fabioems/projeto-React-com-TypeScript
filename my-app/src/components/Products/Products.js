import React, { useEffect, useContext } from 'react';

import '../Products/Products.css';
import '../SearchBar/SearchBar.js';
import '../../Context/AppContext';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../Context/AppContext';

function Products() {

  const { products, setProducts, loading, setLoading } = useContext(AppContext);
  

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    (loading && <Loading /> ) || (
      <section className="products container">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    )
    
  );
}

export default Products;
