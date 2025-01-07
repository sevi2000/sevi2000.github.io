// src/components/ScrollSpyHandler.jsx
import React from 'react';
import useScrollSpy from '../hooks/useScrollSpy';

const ScrollSpyHandler = ({ sections }) => {
  useScrollSpy(sections); // Call the hook inside a Router context
  return null;
};

export default ScrollSpyHandler;
