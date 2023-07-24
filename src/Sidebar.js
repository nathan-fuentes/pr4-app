import React from 'react';

import sidebarIcon2 from './images/icon5.svg';
import sidebarIcon3 from './images/icon6.svg';
import sidebarIcon4 from './images/icon8.svg';

const SideBar = () => {
  return (
    <div className="side-bar">
      <img src={sidebarIcon2} alt="Icon 2" className="icon" />
      <img src={sidebarIcon3} alt="Icon 3" className="icon" />
      <img src={sidebarIcon4} alt="Icon 4" className="icon" />
    </div>
  );
};

export default SideBar;


