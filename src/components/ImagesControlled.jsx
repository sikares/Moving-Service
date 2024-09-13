import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ImagesControlled() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="mb-4">
        <Carousel.Item>
          <img
            src="/images/couple.jpg"
            className="d-block w-100"
            alt="Couple"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/dog.jpg"
            className="d-block w-100"
            alt="Dog"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="/images/family.jpg"
            className="d-block w-100"
            alt="Family"
          />
        </Carousel.Item>
      </Carousel>
  );
}

export default ImagesControlled;