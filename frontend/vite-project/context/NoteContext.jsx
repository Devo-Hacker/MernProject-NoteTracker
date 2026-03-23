import {CreateContext} from 'react';

export const NoteContext = CreateContext();

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
const [loading, setLoading] = useState(true);

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
    <NoteContext.Provider value={{notes, loading, createNote, updateNote, deleteNote}}>
        {children}
    </NoteContext.Provider>
)
}