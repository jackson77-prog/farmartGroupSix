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
import Cart from './components/Cart';
import AnimalList from './components/AnimalList';
import AddAnimalForm from './components/AddAnimalForm';

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
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/cows" element={<AnimalList />} />
                    <Route path="/sheep" element={<AnimalList />} />
                    <Route path="/dogs" element={<AnimalList />} />
                    <Route path="/rabbits" element={<AnimalList />} />
                    <Route path="/pigs" element={<AnimalList />} />
                    <Route path="/goats" element={<AnimalList />} />
                    <Route path="/poultry" element={<AnimalList />} />
                    <Route path="/camels" element={<AnimalList />} />
                    <Route path="/cats" element={<AnimalList />} />
                    <Route path="/others" element={<AnimalList />} />
                    <Route path="/add-animal" element={<AddAnimalForm />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
