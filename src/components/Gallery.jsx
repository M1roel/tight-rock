// components/Gallery.jsx

import React, { useState } from 'react';
import { Carousel, Modal } from 'react-bootstrap';
import images from './img'; // Pfad zu Ihrer img.js Datei
import '../styles/Gallery.css'; // Importieren Sie Ihre CSS-Datei für die Galerie

const Gallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="gallery">
      {images.map((imgSrc, idx) => (
        <div key={idx} className="gallery-item" onClick={() => handleImageClick(idx)}>
          <img
            src={process.env.PUBLIC_URL + imgSrc}
            alt={`Bild ${idx + 1}`}
            className="gallery-image"
          />
        </div>
      ))}

      <Modal show={showModal} onHide={handleModalClose} centered size="xl">
        <Modal.Body>
          <Carousel
            activeIndex={selectedIndex}
            onSelect={(index) => setSelectedIndex(index)}
            interval={null} // Deaktiviert die automatische Slideshow
            prevIcon={null} // Entfernt das "Vorheriges" Icon
            nextIcon={null} // Entfernt das "Nächstes" Icon
          >
            {images.map((imgSrc, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={process.env.PUBLIC_URL + imgSrc}
                  alt={`Bild ${idx + 1}`}
                  className="d-block w-100"
                  onClick={handleModalClose} // Schließt das Modal beim Klicken auf das Bild
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Gallery;
