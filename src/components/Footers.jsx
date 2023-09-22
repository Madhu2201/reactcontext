

import { useContext, useState } from 'react';
import React from 'react';
import { myconext } from './Header';
import { MdModeEditOutline, MdDelete } from 'react-icons/md';

const Footers = () => {
  const [notes, setNotes] = useContext(myconext);
  const [editMode, setEditMode] = useState(false); 
  const [editedNote, setEditedNote] = useState(null); 

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };

  const handleEditNote = () => {
    const updatedNotes = notes.map((note) =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
    setEditMode(false);
  };

  return (
    <div>
      <div className='flex'>
        {notes.map((note, index) => (
          <div key={index} className="note">
            {editMode && editedNote?.id === note.id ? (
              <>
                 TiTle: <input
                  className='input'
                  value={editedNote.title}
                  onChange={(e) =>
                    setEditedNote({
                      ...editedNote,
                      title: e.target.value,
                    })
                  }
                />
              <textarea
                  className='textarea2'
                  value={editedNote.text}
                placeholder='Edit Text'
                  onChange={(e) =>
                    setEditedNote({
                      ...editedNote,
                      text: e.target.value,
                    })
                  }
                />
                <button className='savebutton' onClick={handleEditNote}>Save</button>
              </>
            ) : (
              <>
                <h2>{note.title}</h2>
                <p className='textnode'>{note.text}</p>
                <div>
                  <input className='input' value={note.timestamp.toLocaleString()} />
                  {!editMode ? (
                    <>
                      <MdModeEditOutline onClick={() => {
                        setEditMode(true);
                        setEditedNote(note);
                      }} />
                      <MdDelete onClick={() => handleDeleteNote(note.id)} />
                    </>
                  ) : null}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footers;
