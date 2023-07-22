import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import icon1Image from './images/image1.jpg';
import icon2Image from './images/image2.svg';
import icon3Image from './images/image3.svg'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePositions, setImagePositions] = useState({});

  // Function to handle icon click and display the selected image
  const handleIconClick = (iconNumber) => {
    let selectedImageSource = null;

    if (iconNumber === 1) {
      selectedImageSource = icon1Image;
    } else if (iconNumber === 2) {
      selectedImageSource = icon2Image;
    } else if (iconNumber === 3) {
      selectedImageSource = icon3Image;
    }

    setSelectedImage(selectedImageSource);

    if (selectedImageSource) {
      // Set custom X and Y coordinates for each image based on the iconNumber
      let newX = 0; // Default X coordinate
      let newY = 0; // Default Y coordinate

      if (iconNumber === 1) {
        newX = 100;
        newY = 200;
      } else if (iconNumber === 2) {
        newX = 1150;
        newY = 50;
      } else if (iconNumber === 3) {
        newX = 255;
        newY = 50;
      }

      setImagePositions({ ...imagePositions, [selectedImageSource]: { x: newX, y: newY } });
    }
  };

  return (
    <div className="app">
      <div className="topbar-sidebar-container">
        <Sidebar />
        <div className="topbar-main-container">
          <TopBar handleIconClick={handleIconClick} />
          {selectedImage && (
            <div className={`main-content ${selectedImage}`}>
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  position: 'absolute',
                  top: imagePositions[selectedImage]?.y || 0,
                  left: imagePositions[selectedImage]?.x || 0,
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
