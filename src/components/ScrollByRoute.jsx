// src/components/ScrollByRoute.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollByRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.replace('/', ''); // Extract section ID from URL
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [location]);

  return null;
};

export default ScrollByRoute;
