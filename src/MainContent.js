import React from 'react';

const MainContent = ({ displayedImage }) => {
  return (
    <div className="main-content">
      {displayedImage && (
        <div className="center-image-container">
          <img src={displayedImage} alt="Displayed Image" className="center-image" />
        </div>
      )}
    </div>
  );
};

export default MainContent;
