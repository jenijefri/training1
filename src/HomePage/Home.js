import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import "./Home.css";
import { Carousel } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLock, RiAdvertisementFill, FaGift, IoMdHelpCircle, FaFacebookSquare } from "react-icons/fa";
import datalist from '../DataList/datalist'; // Adjusted import assuming 'DataBase' is the correct directory name

const Home = () => {
  const [dataDisplay, setDataDisplay] = useState([]);
  const [dataDisplayTwo, setDataDisplayTwo] = useState([]);

  const fetchData = () => {
    const displayData = datalist.slice(0, 4);
    const displayDataTwo = datalist.slice(12, 20);
    setDataDisplay(displayData);
    setDataDisplayTwo(displayDataTwo);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const imageLinks = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/aa1b2bdcf519b468.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a05f4b3d67f2b16c.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/a787505b979e7579.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/830b0b3bff28e292.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/3a78fc043a9f7531.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5d96318f16c153aa.jpeg?q=20",
  ];

  return (
    <>
      <Navbar />

      <div className="category">
        {/* Your category items JSX */}
      </div>

      <Carousel indicators={false} className="carousel" interval={3000}>
        {imageLinks.map((imageLink, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 custom-img"
              src={imageLink}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <h2>
        Recommended <FaChevronRight className="left-arrow" />
      </h2>
      <div className="items-container">
        {dataDisplay.map((item, index) => (
          <div key={index} id={item.id.toString()} className="items-home">
            <img src={item.img} alt={item.title} className="products" />
            <p className="title">{item.title}</p>
            <Link to={"/Product"}>
              <button type="button" className="btn btn-dark button59">
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>

      <h2>
        New Products <FaChevronRight className="left-arrow" />
      </h2>
      <div className="items-container" style={{ justifyContent: 'space-evenly' }}>
        {dataDisplayTwo.map((item, index) => (
          <div key={index} id={item.id.toString()} className="items-home" style={{ margin: '5px' }}>
            <img src={item.img} alt={item.title} className="products" />
            <p className="title">{item.title}</p>
            <Link to={"/Product"}>
              <button type="button" className="btn btn-dark button59">
                Know More
              </button>
            </Link>
          </div>
        ))}
      </div>

      <footer className="footer">
        {/* Your footer content JSX */}
      </footer>
    </>
  );
}

export default Home;
