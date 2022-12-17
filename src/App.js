import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react';
import Register from "./pages/Register/Register"
import Home from './pages/Home/Home';
import Login from "./pages/Login/Login"
import Restuarant from "./pages/Restuarant/Restuarant"
import DataProvider from './context/authcontext';
import {ToastContainer} from 'react-toastify'
import OTP from './pages/OTP/OTP';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import VendorDashboard from './pages/VendorDashboard/VendorDashboard'
import {ProtectAdminRoute, ProtectVendorRoute} from './context/ProtectRoute';
import CartDetails from './pages/CartDetailsPage/CartDetails';

function App() {
  return (
    <React.Fragment>
      <DataProvider>
      <Router>
        <ToastContainer/>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/restuarant/:vendorId" element={<Restuarant />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/cart-details" element={<CartDetails />} />
          <Route path="/admin/dashboard" element={
          <ProtectAdminRoute>
          <AdminDashboard />
          </ProtectAdminRoute>
         } />
          <Route path="/vendor/dashboard" element={
          <ProtectVendorRoute>
          <VendorDashboard />
          </ProtectVendorRoute>} />

          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
