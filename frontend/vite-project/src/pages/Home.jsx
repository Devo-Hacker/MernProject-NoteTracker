import react from 'react';
import { useContext } from 'react';
import { NoteContext } from "../../context/NoteContext.jsx";

function Home() {
  const {notes, loading} = useContext(NoteContext);
  console.log(notes);
  return (
    <div>Home</div>
  )
}

export default Home;