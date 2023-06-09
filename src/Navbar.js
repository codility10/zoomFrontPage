import React from 'react';
import { MdVideocam } from 'react-icons/md';
import { TbCode } from 'react-icons/tb'
const Navbar = () => {
  const participants = [
    { id: 1, name: 'Participant 1', image: 'av1.png' },
    { id: 2, name: 'Participant 2', image: 'av2.png' },
    { id: 3, name: 'Participant 3', image: 'av1.png' },
    { id: 4, name: 'Participant 4', image: 'av1.png' },
    { id: 5, name: 'Participant 5', image: 'av1.png' },
    // Add more participants as needed
  ];

  const visibleParticipants = participants.slice(0, 3);
  const remainingParticipantsCount = participants.length - 3;

  return (
    <nav className="grid grid-cols-12 items-center bg-gray-100 px-4 py-2">
      <div className="col-span-1">
        <MdVideocam size={40} color="#059669"/>
      </div>
      <div className="col-span-3 md:col-span-5">
        LIVE Session: Non Compete agreement
      </div>
      <div className="col-span-8 md:col-span-4 lg:col-span-3 flex justify-between">
        <div className="flex items-center space-x-1">
          {visibleParticipants.map((participant, index) => (
            <img
              key={participant.id}
              src={participant.image}
              alt="Participant"
              className={`h-8 w-8 border border-sky-500  rounded-full ml-${index === 0 ? '0' : '-3'}`}
            />
          ))}
          {remainingParticipantsCount > 0 && (
            <div className="bg-green-100 rounded-full w-8 h-8 flex justify-center items-center text-gray-600 text-sm mr-4 border border-sky-500">
              +{remainingParticipantsCount}
            </div>
          )}
        </div>
        <div className="flex items-center space-x-1 ml-4 md:ml-0 bg-green-100 rounded-full p-2 text-[#34d399]">
          <div className=" p-1">
            <TbCode/>
          </div>
          <div>
            <p >cem-jnmt-hsu</p>
          </div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-2 lg:col-span-2 flex justify-end mt-2 md:mt-0">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Leave Meeting
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
