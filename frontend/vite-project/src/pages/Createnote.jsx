import { useState, useContext } from "react";
import { NoteContext } from "../../context/NoteContext.jsx";
import BACKEND_URL from "../../api/url";

function Createnote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { getNotes } = useContext(NoteContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("All fields required");
      return;
    }

    try {
      await BACKEND_URL.post("/create-note", { title, content });
      setTitle("");
      setContent("");
      getNotes();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Note
        </h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 mb-3 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Content"
          className="w-full border p-2 mb-3 rounded"
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
          Add Note
        </button>
      </form>
    </div>
  );
}

export default Createnote;