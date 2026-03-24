import React, { useContext } from "react";
import { NoteContext } from "../../context/NoteContext";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
  const { notes, loading, deleteNote, updateNote } = useContext(NoteContext);

  return (
    <div className="flex h-screen bg-white">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto px-8 py-8 bg-gray-50">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              My Notes
            </h1>
          </div>

          {/* LOGIC HANDLING */}
          {loading ? (
            /* LOADING */
            <div className="flex justify-center items-center h-64">
              <p className="text-gray-500 text-lg">
                Loading notes...
              </p>
            </div>
          ) : notes.length === 0 ? (
            /* EMPTY STATE */
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="text-lg font-medium text-gray-700 mb-2">
                No notes found
              </p>
              <p className="text-gray-400 text-sm">
                Start by creating your first note 🚀
              </p>
            </div>
          ) : (
            /* NOTES GRID */
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
                        const newTitle = prompt("Edit title", note.title);
                        const newContent = prompt("Edit content", note.content);

                        if (!newTitle || !newContent) return;

                        updateNote(note._id, {
                          title: newTitle,
                          content: newContent,
                        });
                      }}
                      className="text-gray-400 hover:text-blue-500 text-sm font-medium"
                    >
                      Edit
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => deleteNote(note._id)}
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
    </div>
  );
}

export default Home;