import React from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SectionContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  margin: 20px 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
`;

const BrandLogo = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  object-fit: contain;
  margin: 0 auto;
`;

const brands = [
  { id: 1, src: "https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg", alt: "Brand 1" },
  { id: 2, src: "https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg", alt: "Brand 2" },
  { id: 3, src: "https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg", alt: "Brand 3" },
  { id: 4, src: "https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg", alt: "Brand 4" },
  { id: 5, src: "https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg", alt: "Brand 5" },
  { id: 6, src: "https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg", alt: "Brand 6" },
  { id: 7, src: "https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg", alt: "Brand 7" },
  { id: 8, src: "https://w0.peakpx.com/wallpaper/563/465/HD-wallpaper-ripndip-apparel-cat-merchandise-store-streetwear.jpg", alt: "Brand 8" },
];

const BrandSection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Grand Global Brands</SectionTitle>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={3000}
        centerMode
        centerSlidePercentage={33.33}
        swipeable
      >
        {brands.map(brand => (
          <BrandLogo key={brand.id} src={brand.src} alt={brand.alt} />
        ))}
      </Carousel>
    </SectionContainer>
  );
};

export default BrandSection;
