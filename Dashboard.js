import React from 'react';
import Orders from './Orders';
import Products from './Products';
import './Dashboard.css';

const Dashboard = () => {
  // Dummy data for orders
  const orders = [
    { id: 1, customer: 'Customer A', date: '2024-03-14', status: 'Pending' },
    { id: 2, customer: 'Customer B', date: '2024-03-15', status: 'Shipped' },
    { id: 3, customer: 'Customer C', date: '2024-03-16', status: 'Delivered' },
    // Add more dummy orders as needed
  ];

  // Dummy data for products
  const products = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, stock: 20 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 20.99, stock: 15 },
    { id: 3, name: 'Product 3', category: 'Category A', price: 15.99, stock: 30 },
    // Add more dummy products as needed
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the ERP System Dashboard!</p>

      <div>
        <h3>Orders</h3>
        {/* Render Orders component and pass dummy orders data */}
        <Orders orders={orders} />
      </div>

      <div>
        <h3>Products</h3>
        {/* Render Products component and pass dummy products data */}
        <Products products={products} />
      </div>
    </div>
  );
};

export default Dashboard;