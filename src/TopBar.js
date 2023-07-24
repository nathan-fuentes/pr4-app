import React from 'react';
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

const TopBar = ({ handleIconClick }) => {
  return (
    <div className="topbar">
      <div className="leftPortion">
        <img class= 'item' src={topbarIcon5} style={{width: '80px', height: '80px'}} alt="Top Bar Icon 1" onClick={() => handleIconClick(1)} />
        <img class= 'item' src={topbarIcon6} style={{width: '80px', height: '80px'}} alt="Top Bar Icon 2" onClick={() => handleIconClick(2)} />
        <img class= 'item' src={topbarIcon7} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 1" onClick={() => handleIconClick(1)} />
        <img class= 'item' src={topbarIcon8} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 2" onClick={() => handleIconClick(2)} />
        <img class= 'item' src={topbarIcon9} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 3" onClick={() => handleIconClick(3)} />
      </div>  

      <div className="middlePortion">
        <img class= 'item' src={topbarIcon1} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 1" onClick={() => handleIconClick(1)} />
        <img class= 'item' src={topbarIcon2} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 2" onClick={() => handleIconClick(2)} />
        <img class= 'item' src={topbarIcon3} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 3" onClick={() => handleIconClick(3)} />
        <img class= 'item' src={topbarIcon4} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 4" onClick={() => handleIconClick(4)} />
        <img class= 'item' src={topbarIcon10} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 1" onClick={() => handleIconClick(1)} />
        <img class= 'item' src={topbarIcon11} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 2" onClick={() => handleIconClick(2)} />
        <img class= 'item' src={topbarIcon12} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 3" onClick={() => handleIconClick(3)} />
        <img class= 'item' src={topbarIcon13} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 4" onClick={() => handleIconClick(2)} />
        <img class= 'item' src={topbarIcon14} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 3" onClick={() => handleIconClick(3)} />
      </div>
        
        <img class= 'item' src={topbarIcon15} style={{width: '70px', height: '70px'}} alt="Top Bar Icon 4" onClick={() => handleIconClick(4)} />
    </div>
  );
};

export default TopBar;

{/* 
  
  <div className="topbar">
        <img src={topbarIcon5} style={{width: '80px', height: '80px'}} alt="Top Bar Icon 1" onClick={() => handleIconClick(1)} />
        <img src={topbarIcon6} style={{width: '80px', height: '80px', marginRight: '5em'}} alt="Top Bar Icon 2" onClick={() => handleIconClick(2)} />
        <img src={topbarIcon7} style={{width: '40px', height: '40px', marginRight: '5px'}} alt="Top Bar Icon 1" onClick={() => handleIconClick(1)} />
        <img src={topbarIcon8} style={{width: '40px', height: '40px', marginRight: '5px'}} alt="Top Bar Icon 2" onClick={() => handleIconClick(2)} />
        <img src={topbarIcon9} style={{width: '40px', height: '40px', marginRight: '460px'}} alt="Top Bar Icon 3" onClick={() => handleIconClick(3)} />
        <img src={topbarIcon1} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 1" onClick={() => handleIconClick(1)} />
        <img src={topbarIcon2} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 2" onClick={() => handleIconClick(2)} />
        <img src={topbarIcon3} style={{width: '40px', height: '40px'}} alt="Top Bar Icon 3" onClick={() => handleIconClick(3)} />
        <img src={topbarIcon4} style={{width: '40px', height: '40px', marginRight: '80px'}} alt="Top Bar Icon 4" onClick={() => handleIconClick(4)} />
        <img src={topbarIcon10} style={{width: '40px', height: '40px', marginRight: '10px'}} alt="Top Bar Icon 1" onClick={() => handleIconClick(1)} />
        <img src={topbarIcon11} style={{width: '40px', height: '40px', marginRight: '10px'}} alt="Top Bar Icon 2" onClick={() => handleIconClick(2)} />
        <img src={topbarIcon12} style={{width: '40px', height: '40px', marginRight: '10px'}} alt="Top Bar Icon 3" onClick={() => handleIconClick(3)} />
        <img src={topbarIcon13} style={{width: '40px', height: '40px', marginRight: '10px'}} alt="Top Bar Icon 4" onClick={() => handleIconClick(2)} />
        <img src={topbarIcon14} style={{width: '40px', height: '40px', marginRight: '500px'}} alt="Top Bar Icon 3" onClick={() => handleIconClick(3)} />
        <img src={topbarIcon15} style={{width: '70px', height: '70px'}} alt="Top Bar Icon 4" onClick={() => handleIconClick(4)} />
    </div> */}
