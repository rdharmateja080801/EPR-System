import React from 'react';

const Orders = () => {
  // Dummy order data
  const orders = [
    { id: 1, customer: 'Customer A', date: '2024-03-14', status: 'Pending' },
    { id: 2, customer: 'Customer B', date: '2024-03-15', status: 'Shipped' },
    { id: 3, customer: 'Customer C', date: '2024-03-16', status: 'Delivered' },
    // Add more dummy orders as needed
  ];

  return (
    <div>
      <h2>Orders Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;