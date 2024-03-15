import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Orders from './components/Orders';
import Calendar from './components/Calendar'; // Include only if needed

function App() {
  return (
    <Router>
      <div>
        <h1>ERP System</h1>
        {/* Define routes using the Routes component */}
        <Routes>
          {/* Route for the dashboard */}
          <Route path="/" element={<Dashboard />} />
          {/* Route for the products management */}
          <Route path="/products" element={<Products />} />
          {/* Route for the orders management */}
          <Route path="/orders" element={<Orders />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;