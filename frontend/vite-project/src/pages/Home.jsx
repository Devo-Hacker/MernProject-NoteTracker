import React, { useContext, useState } from "react";
import { NoteContext } from "../../context/NoteContext";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
  const { notes, loading, deleteNote, updateNote } = useContext(NoteContext);

  const [editingNote, setEditingNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        {/* <Navbar /> */}

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto px-8 py-8 bg-transparent">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-100 tracking-tight">
                My Notes
              </h1>
              <p className="text-gray-200 mt-2 text-sm">
                Organize your thoughts beautifully ✨
              </p>
            </div>
          </div>

          {/* LOGIC */}
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500 text-lg">Loading notes...</p>
            </div>
          ) : notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-72 text-center">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-xl font-semibold text-gray-200 mb-2">
                No notes yet
              </h2>
              <p className="text-gray-400 text-sm">
                Start creating your first note.
              </p>
            </div>
          ) : (

            /* 🔥 GRID */
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {notes.map((note, index) => {
                const colors = [
                  "from-blue-400 to-indigo-400",
                  "from-green-400 to-emerald-400",
                  "from-purple-400 to-pink-400",
                  "from-yellow-400 to-orange-400",
                ];

                return (
                  <div key={note._id} className="relative group">

                    {/* GLOW EFFECT */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${
                        colors[index % colors.length]
                      } opacity-0 group-hover:opacity-40 blur-md transition duration-300`}
                    />

                    {/* CARD */}
                    <div className="relative bg-gray-900/60 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between h-full">

                      {/* CONTENT */}
                      <div>
                        <h2 className="text-lg font-bold text-gray-300 mb-2 line-clamp-1">
                          {note.title}
                        </h2>

                        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                          {note.content}
                        </p>
                      </div>

                      {/* ACTIONS */}
                      <div className="flex justify-between items-center mt-6">

                        <span className="text-xs text-gray-400">
                          Just now
                        </span>

                        <div className="flex gap-4">

                          {/* EDIT */}
                          <button
                            onClick={() => {
                              setEditingNote(note);
                              setTitle(note.title);
                              setContent(note.content);
                            }}
                            className="text-gray-400 hover:text-blue-500 text-sm transition"
                          >
                            Edit
                          </button>

                          {/* DELETE */}
                          <button
                            onClick={() => {
                              if (!window.confirm("Delete this note?")) return;
                              deleteNote(note._id);
                            }}
                            className="text-gray-400 hover:text-red-500 text-sm transition"
                          >
                            Delete
                          </button>

                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}

            </div>
          )}

        </main>

        {/* FOOTER */}
        <Footer />

      </div>

      {/* 🔥 EDIT MODAL */}
      {editingNote && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-6 w-96 shadow-2xl">

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

              <button
                onClick={() => setEditingNote(null)}
                className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
              >
                Cancel
              </button>

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