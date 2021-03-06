import React from 'react';
import '../styles/Banner.css';
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <div>
      <Carousel className='banner' controls={true} pause={false} interval={3000}>
        <Carousel.Item>
          <img className='d-block w-100 ' src={process.env.PUBLIC_URL + '../images/2.jpg'} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={process.env.PUBLIC_URL + '../images/1.jpg'} alt='Second slide' />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner;
