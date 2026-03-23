import react, { useContext } from 'react';
import { NoteContext } from "../../context/NoteContext.jsx";

function Home() {
  const {notes, loading} = useContext(NoteContext);
  console.log(notes);

if(loading){
  return <div className='flex justify-center items-center min-h-screen'>
          <p className='text-lg text-gray-500'>Loading...</p>
        </div>
}

if(notes.length === 0){
  return <div className='flex justify-center items-center min-h-screen'>
          <p className='text-lg text-gray-700'>No notes found. Please create a note.</p>
        </div>
} 

return (
  <div>Data will be displayed here</div>
) 
}

export default Home;