import React from 'react';
import topbarIcon0 from './images/icon7.svg';
import topbarIcon1 from './images/icon1.svg';
import topbarIcon2 from './images/icon2.svg';
import topbarIcon3 from './images/icon3.svg';
import topbarIcon4 from './images/icon4.svg';
import topbarIcon5 from './images/icon9.svg';
import topbarIcon6 from './images/icon10.svg';
import topbarIcon7 from './images/icon11.svg';
import topbarIcon8 from './images/icon12.svg';
import topbarIcon9 from './images/icon13.svg';
import topbarIcon10 from './images/icon14.svg';
import topbarIcon11 from './images/icon15.svg';
import topbarIcon12 from './images/icon16.svg';
import topbarIcon13 from './images/icon17.svg';
import topbarIcon14 from './images/icon18.svg';
import topbarIcon15 from './images/icon19.svg';
import image1 from './images/image3.svg';
import image2 from './images/image1.jpg';
import image3 from './images/image2.jpg';


const TopBar = ({ handleIconClick }) => {
  return (
    <div className="top-bar">
      {/* Left icons */}
      <div className="top-icons left-icons">
        {/* Add your 6 custom icons here */}
        <img
          src={topbarIcon0}
          alt="Icon 0"
          className="icon"
        />
        <img
          src={topbarIcon5}
          alt="Icon 5"
          className="icon"
        />
        <img
          src={topbarIcon6}
          alt="Icon 6"
          className="icon"
        />
        <img
          src={topbarIcon7}
          alt="Icon 7"
          className="icon"
        />
        <img
          src={topbarIcon8}
          alt="Icon 8"
          className="icon"
        />
        <img
          src={topbarIcon9}
          alt="Icon 9"
          className="icon"
          onClick={() => handleIconClick(image1)}
        />
      </div>

      {/* Center icons */}
      <div className="top-icons center-icons">
        <img
          src={topbarIcon1}
          alt="Icon 1"
          className="icon"
          onClick={() => handleIconClick(image2)}
        />
        <img
          src={topbarIcon2}
          alt="Icon 2"
          className="icon"
        />
        <img
          src={topbarIcon3}
          alt="Icon 3"
          className="icon"
        />
        <img
          src={topbarIcon4}
          alt="Icon 4"
          className="icon"
        />
      </div>

      {/* Right icons */}
      <div className="top-icons right-icons">
        <img
          src={topbarIcon10}
          alt="Icon 10"
          className="icon"
        />
        <img
          src={topbarIcon11}
          alt="Icon 11"
          className="icon"
        />
        <img
          src={topbarIcon12}
          alt="Icon 12"
          className="icon"
        />
        <img
          src={topbarIcon13}
          alt="Icon 13"
          className="icon"
          onClick={() => handleIconClick(image3)}
        />
        <img
          src={topbarIcon14}
          alt="Icon 14"
          className="icon"
          onClick={() => handleIconClick(image3)}
        />
        <img
          src={topbarIcon15}
          alt="Icon 15"
          className="icon"
        />
      </div>
    </div>
  );
};

export default TopBar;


