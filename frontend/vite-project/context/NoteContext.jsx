import {CreateContext} from 'react';

export const NoteContext = CreateContext();

//fetch all notes
const getNotes = async () => {

}
//create a note
const createNote = async (note) => {

}
//update a note
const updateNote = async (id, note) => {

}
//delete a note
const deleteNote = async (id) => {

}

return (
    <NoteContext.Provider value={{createNote, updateNote, deleteNote}}>
        {children}
    </NoteContext.Provider>
)