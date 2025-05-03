// src/components/common/StyleSwitcher/StyleSwitcher.jsx
import React, { useState, useEffect } from 'react';

const StyleSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [themeColor, setThemeColor] = useState('#2196f3');
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark');
  };

  // Change theme color
  const changeThemeColor = (color) => {
    setThemeColor(color);
    document.documentElement.style.setProperty('--theme-color', color);
    document.documentElement.style.setProperty('--skin-color', color);
  };

  // Toggle color palette
  const toggleColorPalette = () => {
    setIsColorPaletteOpen(!isColorPaletteOpen);
  };

  // Set initial theme on component mount
  useEffect(() => {
    // Set initial theme color
    document.documentElement.style.setProperty('--theme-color', themeColor);
    document.documentElement.style.setProperty('--skin-color', themeColor);
    
    // Set initial dark mode
    if (isDarkMode) {
      document.body.classList.add('dark');
    }
  }, [themeColor, isDarkMode]);

  return (
    <div className="style-switcher">
      <div className="day-night s-icon" onClick={toggleDarkMode}>
        <i className="fa fa-toggle-on"></i>
      </div>
      <div className="color-switcher s-icon" onClick={toggleColorPalette}>
        <i className="fas fa-palette"></i>
        <div className={`color-options ${isColorPaletteOpen ? 'open' : ''}`}>
          <span 
            className="color-option" 
            data-color="#ec1839" 
            onClick={() => changeThemeColor('#ec1839')}
            style={{ backgroundColor: '#ec1839' }}
          ></span>
          <span 
            className="color-option" 
            data-color="#2196f3" 
            onClick={() => changeThemeColor('#2196f3')}
            style={{ backgroundColor: '#2196f3' }}
          ></span>
          <span 
            className="color-option" 
            data-color="#ff5722" 
            onClick={() => changeThemeColor('#ff5722')}
            style={{ backgroundColor: '#ff5722' }}
          ></span>
          <span 
            className="color-option" 
            data-color="#4caf50" 
            onClick={() => changeThemeColor('#4caf50')}
            style={{ backgroundColor: '#4caf50' }}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;