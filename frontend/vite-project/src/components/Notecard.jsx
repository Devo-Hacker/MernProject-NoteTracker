function NoteCard({ note, deleteNote, editNote }) {
  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      
      <h2 className="text-lg font-bold mb-2">{note.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{note.content}</p>

      <div className="flex justify-end gap-3">
        
        <button
          onClick={() => editNote(note)}
          className="text-gray-500 hover:text-blue-500"
        >
          Edit
        </button>

        <button
          onClick={() => deleteNote(note._id)}
          className="text-gray-500 hover:text-red-500"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default NoteCard;