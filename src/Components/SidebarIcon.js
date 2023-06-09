import React from 'react';
// import {"fa-pencil"} from '@fontawesome';
// import { BsPencil } from 'react-icons/bs';


function SidebarIcon({ icon }) {
  return (
    <div className=" p-1 rounded-full">
      <div className="bg-white  p-1">
      {icon}
      </div>
    </div>
  );
}

export default SidebarIcon;
