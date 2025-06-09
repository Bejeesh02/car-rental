import React, { useState, useEffect } from "react";
import img1 from './car/home page front.jpg';
import img2 from './car/hame page 1.jpg';
import img3 from './car/home page front.jpg';
import img4 from './car/hame page 1.jpg';
import { useNavigate } from 'react-router-dom';
import Image1 from './car/baleno.png';
import Image2 from './car/swift.png';
import Image3 from './car/dzire.png';
import Image4 from './car/ertiga.png';
import Image5 from './car/i20.png';
import { GiGearStickPattern } from "react-icons/gi";
import { FaUsers } from 'react-icons/fa';  
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img13 from './car/home details.jpg';
import './Home.css';


function Home({ user }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const images = [img1, img2, img3, img4];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);



   const images1 = [
    { id: 1, src: Image1, alt: 'Image 1', title: 'BALENO', caption: <><FaUsers /> 5 seats &nbsp; <GiGearStickPattern /> Manual</>, price: '₹1,999/per day' },
    { id: 2, src: Image2, alt: 'Image 2', title: 'SWIFT', caption: <><FaUsers /> 5 seats &nbsp; <GiGearStickPattern /> Manual</>, price: '₹1,799/per day' },
    { id: 3, src: Image3, alt: 'Image 3', title: 'DZIRE', caption: <><FaUsers /> 5 seats &nbsp; <GiGearStickPattern /> Manual</>, price: '₹2,199/per day' },
    { id: 4, src: Image4, alt: 'Image 4', title: 'ERTIGA', caption: <><FaUsers /> 7 seats &nbsp; <GiGearStickPattern /> Manual</>, price: '₹2,999/per day' },
    { id: 5, src: Image5, alt: 'Image 5', title: 'i20', caption: <><FaUsers /> 5 seats &nbsp; <GiGearStickPattern /> Manual</>, price: '₹1,499/per day' },
  ];
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

 

  return (
    <div>
      <div id="h">
       <h1 id='h2'>welcome,{user.name}</h1>
       </div>
    <div className="home-fullscreen">
       
      <div className="carousel-fullscreen">
        <button className="carousel-button left" onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}>
          &#10094;
        </button>
        <div className="carousel-image-wrapper">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
        </div>
        <button className="carousel-button right" onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}>
          &#10095;
        </button>
      </div>
      </div>


       <div className="image-card-slider-container">
        <h1>CAR RENTAL</h1>
        <Slider {...settings}>
          {images1.map((image) => (
            <div key={image.id} className="image-card">
              <div className="image-card-img-container">
                <img src={image.src} alt={image.alt} className="image-card-img" />
                <div className="image-card-overlay">
                  <div className="image-card-overlay-content">
                    <h3>{image.title}</h3>
                    <h5>{image.caption}</h5>
                    <h5>{image.price}</h5>
                  </div>
                </div>
              </div>
              <div className="image-card-content">
                <h3 className="image-card-title">{image.title}</h3>
                <h5 className="image-card-caption">{image.caption}</h5>
                <h5 className="image-card-price">{image.price}</h5>
                <button
                 className="book-now-button"
                 onClick={() =>
                 window.open(  `https://wa.me/916385221452?text=Hi,%20I%20want%20to%20book%20the%20${encodeURIComponent(image.title)}.`,  "_blank") }>
                  Book Now
                 </button>

              </div>
            </div>
          ))}
        </Slider>
         <div><img id="im" src={img13} alt="hotel banner" /></div>
      </div>
     
    </div>
  );
}

export default Home;
