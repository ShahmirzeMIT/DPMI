import { Box, Button } from '@mui/material';
import { Carousel, Progress } from 'antd';
import React, { useRef, useState, useEffect } from 'react';
import FirstCarousel from './FirstCarousel';
import { signInStyles } from '../../styles/PageStyles/signInStyles';
import SecondCarousel from './SecondCarousel';
import Third from './Third';
import SignInForm from './SignInForm';

const contentStyle: React.CSSProperties = {
  color: '#fff',
  lineHeight: '60px',
  textAlign: 'center',
  background: 'transparent',
};

export default function CarouselSignIn() {
  const carouselRef = useRef(null); // Reference to Carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselHeight, setCarouselHeight] = useState(100); // Track the height of the carousel container
  const totalSlides = 4; // Total number of slides

  const handleNext = () => {
    (carouselRef.current as any)?.next();
  };

  const handleChange = (current: number) => {
    setCurrentSlide(current);
  };

  // Adjust the height of the carousel dynamically
  useEffect(() => {
    const carouselContent = document.querySelector(`.carousel-slide-${currentSlide}`);
    if (carouselContent) {
      setCarouselHeight(carouselContent.clientHeight);
    }
  }, [currentSlide]);

  return (
    <Box sx={{ ...signInStyles.box }}>
      <Box
        sx={{
          background: '#fff',
          textAlign: 'end',
          width: '30%',
          height: '50%',
          marginRight: { xs: 2, sm: 10, md: 10, lg: 20 },
          marginTop: 10,
          padding: '20px',
          minWidth: 350,
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <h3>Get Started</h3>
            <p>{currentSlide + 1}/4</p>
          </Box>
          <Progress
            percent={(currentSlide / (totalSlides - 1)) * 100}
            showInfo={false}
          />
        </Box>
        <Box
          sx={{
            minHeight: '70px', // Ensure a minimum height
            height: `${carouselHeight}px`, // Dynamically adjust height
            transition: 'height 0.3s ease', // Smooth height transition
            overflow: 'hidden', // Prevent content overflow
          }}
        >
          <Carousel
            arrows={false}
            ref={carouselRef}
            style={{ background: 'transparent' }}
            dots={false}
            afterChange={handleChange}
          >
            <div className="carousel-slide-0">
              <h3 style={contentStyle}>
                <FirstCarousel />
              </h3>
            </div>
            <div className="carousel-slide-1">
              <h3 style={contentStyle}>
                <SecondCarousel />
              </h3>
            </div>
            <div className="carousel-slide-2">
              <h3 style={contentStyle}>
                <Third />
              </h3>
            </div>
            <div className="carousel-slide-3">
              <h3 style={contentStyle}>
                <SignInForm />
              </h3>
            </div>
          </Carousel>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
            {
                currentSlide !==3  && <Button
                onClick={handleNext}
                variant="contained"
                sx={{ background: '#4d7aff', color: '#fff', width: '100%' }}
                disabled={currentSlide === totalSlides - 1}
              >
                Next
              </Button>
            }
          
        </Box>
      </Box>
    </Box>
  );
}
