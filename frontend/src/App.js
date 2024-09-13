
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Layout from './component/Layout';
import Orders from './pages/Orders.js'
import Product from './pages/Product.js'
import Analytics from './pages/Analytics.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index path="/" element={<Welcome />} />
        <Route index path="/analytics" element={<Analytics />} />
        <Route index path="/orders" element={<Orders />} />
        <Route index path="/products" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
