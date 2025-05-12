// src/components/Gallery.js
// this is a simple photo carousel that shows off our restaurant
// it automatically slides through our best photos
import React from 'react';
import { Carousel } from 'react-bootstrap';

function Gallery() {
  // here's all our gallery images with their alt text
  // we keep them in an array so we can easily map through them
  const galleryImages = [
    { src: "/images/ASAP1.png", alt: "ASAP Snack Bar 1" },
    { src: "/images/ASAP2.png", alt: "ASAP Snack Bar 2" },
    { src: "/images/ASAP3.png", alt: "ASAP Snack Bar 3" },
    { src: "/images/ASAP3.png", alt: "ASAP Snack Bar 4" },
    { src: "/images/ASAP4.png", alt: "ASAP Snack Bar 5" },
    { src: "/images/ASAP5.png", alt: "ASAP Snack Bar 6" }
  ];

  return (
    <div className="mt-5">
      {/* the title for our photo gallery */}
      <div className="section-title">
        <h2>Photo Gallery</h2>
      </div>
      
      {/* this is a bootstrap carousel that automatically slides through our photos */}
      <Carousel>
        {/* we map through each image to create a slide */}
        {galleryImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 gallery-image"
              src={image.src}
              alt={image.alt}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Gallery;