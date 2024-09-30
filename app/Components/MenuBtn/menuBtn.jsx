'use client';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Button } from 'primereact/button';

const HamburgerMenu = ({ isOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(isOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu is open:', isMenuOpen);
  };

  return (
    <div className="relative">
      <Button 
        type="button"
        color="primary" 
        onClick={toggleMenu}
        className="absolute top-4 left-4"
      >
        <Hamburger open={isMenuOpen} />
      </Button>
    </div>
  );
};

export default HamburgerMenu;
