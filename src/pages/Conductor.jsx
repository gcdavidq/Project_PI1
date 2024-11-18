import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Table from '../components/Table';
import { fetchConductores } from '../services/api_conductor';

const Conductores = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchConductores()
      .then((response) => setData(response))
      .catch((error) => console.error('Error fetching conductores:', error));
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="driver-info">
          <div className="driver-cards">
            <Table data={data} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Conductores;
