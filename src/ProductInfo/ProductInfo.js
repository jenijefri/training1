import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ProductInfo.css';
import datalist from '../DataList/datalist';

export default function ProductInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = parseInt(id, 10); // Ensure id is correctly parsed
    const fetchedProduct = datalist.find((item) => item.id === productId);
    setProduct(fetchedProduct);
  }, [id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-info-container">
        <div className="product-info">
          <img src={product.img} alt={product.title} className="product-img" />
          <div className="product-details">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-price">${product.newPrice}</div>
            <button className="btn btn-dark" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
