import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Display from './components/Display';
import Testimonials from './components/Testimonials';
import StayInformed from './components/StayInformed';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <>
              <AboutUs />
              <Display />
              <Testimonials />
              <StayInformed />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Add additional routes as needed */}
          {/* <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/profile" element={<UserProfile />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
