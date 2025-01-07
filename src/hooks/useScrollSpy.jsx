// src/hooks/useScrollSpy.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useScrollSpy = (sections) => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navigate(`/${entry.target.id}`, { replace: true });
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections, navigate]);
};

export default useScrollSpy;
