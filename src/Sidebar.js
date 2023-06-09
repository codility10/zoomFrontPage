import React from 'react';
import SidebarIcon from './Components/SidebarIcon';
import ButtonWithIcon from './Components/ButtonWithIcon';
import './sidebar.css'

import { BsPencil,BsZoomIn,BsArrowsFullscreen, BsFolder2Open, BsDownload, BsPerson, BsCalendarDate } from 'react-icons/bs';
import { FaPenNib } from 'react-icons/fa';
import { BiText } from 'react-icons/bi';
import { ImAttachment } from 'react-icons/im';
// import { TbPencilMinus } from 'react-icons/tb';
import Buutons from './Components/Buutons';
import CentralPart from './Components/CentralPart';
import VideoCam from './Components/VideoCam';
import Participants from './Components/Participants';



const Sidebar = () => {
  const icons = [
    <BsPencil/>,
    <BsZoomIn/>,
    <BsArrowsFullscreen/>,
    <BsFolder2Open/>,
    <BsDownload/>

    
    
  ];
   const pics = [
     
       { img: './im2.jpg', nameP: 'Safia' },
       { img: './im3.jpg', nameP: 'Aksa' },
      { img: './im2.jpg', nameP: 'Parveen'},
      { img: './im3.jpg', nameP: 'Aksa' }

      
    
    
  ];
  const buttons = [
    { text: 'Signature', icon: <FaPenNib/> },
    { text: 'Text', icon: <BiText/> },
    { text: 'Date & Time', icon: <BsCalendarDate/> },
    { text: 'Attachment', icon: <ImAttachment/> },
    { text: 'Name', icon: <ImAttachment/> },
    { text: 'Email ', icon: <ImAttachment/> },
    { text: 'Company', icon: <ImAttachment/> },
    { text: 'Button 8', icon: <ImAttachment/> },
  ];


  return (
    <div className="h-full grid grid-cols-12">
     
    <div className="grid grid-cols-1 flex max-h-72  mx-auto  mr-1 icon">
      {icons.map((icon, index) => (
        <SidebarIcon key={index} icon={icon} />
      ))}
    </div>
    <div className="grid col-span-3 sm:col-span-2  gap-4 p-0 bg-gray-100 btnicon mr-1">
        {buttons.map((button, index) => (
          <div key={index} className="bg-blue-100">
            <ButtonWithIcon icon={button.icon} text={button.text} />
          </div>
        ))}
      </div>
    <div className="grid col-span-5 gap-0 p-0 bg-gray-100 btnicon mr-1">
    <CentralPart/>
    <CentralPart/>
    <CentralPart/>
        
    </div>
    <div className="grid col-span-3 sm:col-span-2 gap-0 p-0 max-h-64 min-w-40  mr-1">
    {pics.map((itm, index) => (
        <div key={index} className='' >
          
          <VideoCam img={itm.img} name={itm.nameP} />
        </div>
      ))}
    </div>
    <div className="grid col-span-2 gap-6 p-0  ">
      <Participants/>
    </div>
  </div>
  
      
    
  );
};

export default Sidebar;
