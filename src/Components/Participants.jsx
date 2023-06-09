import React from 'react'
import './PArticipants.css'
function Participants() {
    const participants = [
        { id: 1, name: 'Asif', image: 'av1.png' },
        { id: 2, name: 'Amir', image: 'av2.png' },
        { id: 3, name: 'Ali', image: 'av1.png' },
        { id: 4, name: 'Adil', image: 'av1.png' },
        { id: 5, name: 'Asad', image: 'av1.png' },
        // Add more participants as needed
      ];
    
      const visibleParticipants = participants.slice(0, 3);
  return (
    <div>
        <div className=''>
            <h6 className='shadow-div'>Participants</h6>
        </div>
        <br /><br />
        <div>
        <div className="  items-center space-x-1">
          {visibleParticipants.map((participant, index) => (
           <>
            
           
         <div className='flex justify-evenly  shadow-div'>
         <img
              key={participant.id}
              src={participant.image}
              alt="Participant"
              className={`h-8 w-8  border border-sky-500  rounded-full ml-${index === 0 ? '0' : '-2'}`}
            />
            <p >{participant.name}</p>
            <hr />
         </div>
           
            
            <br />
           </>
          ))}
          </div>
        </div>
        <div className=''>
            <h6 className='shadow-div'>Chats</h6>
        </div>
        <br /><br />
        <div>
        <div className="  items-center space-x-1">
          {visibleParticipants.map((participant, index) => (
           <>
            
           
         <div className='flex justify-evenly  shadow-div'>
         <img
              key={participant.id}
              src={participant.image}
              alt="Participant"
              className={`h-8 w-8  border border-sky-500  rounded-full ml-${index === 0 ? '0' : '-2'}`}
            />
            <p >{participant.name}</p>
            <hr />
         </div>
           
            
            <br />
           </>
          ))}
          </div>
        </div>
    </div>
  )
}

export default Participants