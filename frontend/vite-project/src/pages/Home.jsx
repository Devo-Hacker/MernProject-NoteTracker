import React, { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
  const { notes, loading, deleteNote, updateNote } = useContext(NoteContext);

  const [editingNote, setEditingNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="flex h-screen bg-white">

      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        <Navbar />

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto px-8 py-8 bg-gray-50">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              My Notes
            </h1>
          </div>
cd
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500 text-lg">Loading notes...</p>
            </div>
          ) : notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="text-lg font-medium text-gray-700 mb-2">
                No notes found
              </p>
              <p className="text-gray-400 text-sm">
                Start by creating your first note 🚀
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {notes.map((note) => (
                <div
                  key={note._id}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  {/* NOTE CONTENT */}
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 mb-2">
                      {note.title}
                    </h2>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {note.content}
                    </p>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex justify-end gap-3 mt-6">

                    {/* EDIT */}
                    <button
                      onClick={() => {
                        setEditingNote(note);
                        setTitle(note.title);
                        setContent(note.content);
                      }}
                      className="text-gray-400 hover:text-blue-500 text-sm font-medium"
                    >
                      Edit
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => {
                        if (!window.confirm("Delete this note?")) return;
                        deleteNote(note._id);
                      }}
                      className="text-gray-400 hover:text-red-500 text-sm font-medium"
                    >
                      Delete
                    </button>

                  </div>
                </div>
              ))}

            </div>
          )}

        </main>

        {/* FOOTER */}
        <Footer />

      </div>

      {/* 🔥 EDIT MODAL */}
      {editingNote && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-6 w-96 shadow-lg">

            <h2 className="text-xl font-bold mb-4">Edit Note</h2>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded mb-3"
              placeholder="Title"
            />

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full border p-2 rounded mb-4"
              placeholder="Content"
            />

            <div className="flex justify-end gap-3">

              {/* CANCEL */}
              <button
                onClick={() => setEditingNote(null)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>

              {/* SAVE */}
              <button
                onClick={() => {
                  if (!title || !content) return;

                  updateNote(editingNote._id, {
                    title,
                    content,
                  });

                  setEditingNote(null);
                }}
                className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-700"
              >
                Save
              </button>

            </div>
          </div>

        </div>
      )}

    </div>
  );
}

export default Home;