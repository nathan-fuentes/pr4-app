import React, { useState } from 'react';
import './App.css';
import TopBar from './TopBar';
import SideBar from './SideBar';
import MainContent from './MainContent';

function App() {
  const [displayedImage, setDisplayedImage] = useState(null);

  // Function to handle icon clicks and update the displayed image
  const handleIconClick = (imageURL) => {
    setDisplayedImage(imageURL);
  };

  return (
    <div className="app-container">
      <TopBar handleIconClick={handleIconClick} />
      <div className="app-content">
        <SideBar />
        <MainContent displayedImage={displayedImage} />
      </div>
    </div>
  );
}

export default App;
