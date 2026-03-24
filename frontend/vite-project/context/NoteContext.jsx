import { createContext, useState, useEffect } from 'react';
import BACKEND_URL from "../api/url.js";
export const NoteContext = createContext();

export const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([]);
const [loading, setLoading] = useState(true);

//fetch all notes
const getNotes = async () => {
    setLoading(true);
    try {
        const response = await BACKEND_URL.get('/get-notes');
        setNotes(response.data);
    } catch (error) {
        console.error("Error fetching notes:", error);
    } finally {
        setLoading(false);
    }
}


//create a note
const createNote = async (note) => {
    const res = await BACKEND_URL.post('/create-note', note);
    setNotes([...notes, res.data]);
}
//update a note
const updateNote = async (id, updatedData) => {
    try {
      const res = await BACKEND_URL.put(`/update-note/${id}`, updatedData);

      setNotes(prev =>
        prev.map(note =>
          note._id === id ? res.data : note
        )
      );
    } catch (error) {
      console.error("Update failed:", error);
    }
  };
//delete a note
 const deleteNote = async (id) => {
    try {
      await BACKEND_URL.delete(`/delete-note/${id}`);
      setNotes(prev => prev.filter(note => note._id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

useEffect(() => {
    getNotes();
}, [])

return (
    <NoteContext.Provider value={{notes, loading, getNotes, createNote, updateNote, deleteNote}}>
        {children}
    </NoteContext.Provider>
)
}