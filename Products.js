import React from 'react';

const Products = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, stock: 20 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20.99, stock: 15 },
    { id: 3, name: 'Product 3', category: 'Category A', price: 15.99, stock: 30 },
    // Add more dummy products as needed
  ];

  return (
    <div>
      <h2>Products Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;