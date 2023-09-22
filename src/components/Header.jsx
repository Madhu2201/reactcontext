
import React, { createContext, useState } from 'react';
import Footers from './Footers';
import uuid from 'react-uuid';

export const myconext=createContext();
const Header = () => {
 const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newtitle,setTitle]=useState("");
   const addNote = () => {
     if (newNote.trim() !== '' && newtitle.trim() !== '') {
       setNotes([...notes, { title: newtitle, text: newNote, timestamp: new Date(), id: uuid() }]);
       setNewNote('');
       setTitle('');
     }
   };

 return (
  <div>
   <myconext.Provider value={[notes,setNotes]}>
    <div className='header_note'>
         <div >
           <h1>Add a Note</h1>
         </div>
        
           <div >
             <div>
             <input className='textarea1' value={newtitle} onChange={(e) => setTitle(e.target.value) } placeholder='Title'/>
        </div>
             <textarea className='textarea'
              placeholder="Take a note..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
           
             <button  className='addnote' onClick={addNote}>+</button>
             
           </div>
           </div>
           <div>
           <h2>My Notes</h2>
           <Footers/>
           
         </div>
        
         
     </myconext.Provider>
  </div>
 );
};

export default Header;

