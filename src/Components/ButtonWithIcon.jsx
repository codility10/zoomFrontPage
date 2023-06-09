import React from 'react';


const ButtonWithIcon = ({ text, icon }) => {
  return (
    <div className="flex flex-row justify-between p-2 rounded-md bg-green">
      <div>{text}</div>
      <div>{icon}</div>
    </div>
  );
};
export default ButtonWithIcon;

