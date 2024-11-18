import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RouteSelector from '../components/RouteSelector';
import '../styles/ruta_style.css';

const VerRutas = () => {
  return (
    <div>
      <Navbar />
      <main className="container my-4">
        <RouteSelector />
      </main>
      <Footer />
    </div>
  );
};

export default VerRutas;
