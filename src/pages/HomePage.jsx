import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppBase from '../components/AppBase';
import ProductCard from '../components/ProductCard';

import { BACKEND_URL } from '../utils/backend_url';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/producto/`, {
          headers: {
            user: localStorage.getItem("user") || '',
            password: localStorage.getItem("password") || '',
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        toast.error(`Error al obtener los productos: ${error.response.data}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          })
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <AppBase>
        <div className="text-4xl font-bold px-6 py-4">
          Productos
        </div>

        <div className="flex flex-wrap md:justify-around gap-14 sm:justify-center sm:gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-full sm:w-auto mb-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </AppBase>
      <ToastContainer />
    </div>
  );
}

export default HomePage;