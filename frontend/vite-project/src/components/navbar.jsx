import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
      
      <input
        type="text"
        placeholder="Search..."
        className="bg-gray-100 px-4 py-2 rounded-lg text-sm w-64"
      />

      <div className="flex gap-4">
        <span className="text-sm font-semibold">My Notes</span>
      </div>

    </header>
  );
}

export default Navbar;