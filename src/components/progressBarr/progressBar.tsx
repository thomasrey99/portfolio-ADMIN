import React, { useState, useEffect } from 'react';
const ScrollProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
  
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / documentHeight) * 100;
      setScrollPercentage(percentage);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const progressBarStyles = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: `${scrollPercentage}%`,
      height: '4px',
      backgroundColor: 'blue', // Puedes cambiar el color como desees
      zIndex: 9999,
      transition: 'width 0.3s ease',
    };
  
    return (
        <div style={progressBarStyles}></div>
    )
  };
  
  export default ScrollProgressBar;