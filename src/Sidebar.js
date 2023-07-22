import React from 'react';
import sidebarIcon1 from './images/icon7.svg';
import sidebarIcon2 from './images/icon5.svg';
import sidebarIcon3 from './images/icon6.svg';
import sidebarIcon4 from './images/icon8.svg';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={sidebarIcon1} style={{width: '40px', height: '80px', marginBottom: '50px'}} alt="Sidebar Icon 1" />
      <img src={sidebarIcon2} style={{width: '40px', height: '40px', marginBottom: '400px'}} alt="Sidebar Icon 2" />
      <img src={sidebarIcon3} style={{width: '40px', height: '40px', marginBottom: '100px'}} alt="Sidebar Icon 3" />
      <img src={sidebarIcon4} style={{width: '40px', height: '40px'}} alt="Sidebar Icon 4" />
    </div>
  );
};

export default Sidebar;
