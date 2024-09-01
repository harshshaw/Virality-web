import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 0 10px;
`;

const Slide = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-color: #f5f5f5;
  border-radius: 10px;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
`;

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
      

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <Slide>
          <img src="https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg" alt="Slide 1" />
        </Slide>
        <Slide>
          <img src="https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg" alt="Slide 2" />
        </Slide>
        <Slide>
          <img src="https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg" alt="Slide 3" />
        </Slide>
        <Slide>
          <img src="https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg" alt="Slide 4" />
        </Slide>
      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
