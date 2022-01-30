import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Ball</Link>
        </li>
        <li>
          <Link to="/products/p3"> Shoes</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
