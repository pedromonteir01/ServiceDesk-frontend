'use client';
import React, { useState, useRef } from 'react';
import { Button } from '@nextui-org/react'; // Assumindo que você está usando NextUI
import Hamburger from './Hamburger'; // Componente de ícone de hamburguer


const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = useRef(null);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="relative">
        <Button 
          ref={btnRef} 
          color="primary" 
          onClick={toggleMenu}
          className="absolute top-4 left-4"
        >
          <Hamburger open={isOpen} />
        </Button>
      </div>
    );
  };
  
  export default HamburgerMenu;
