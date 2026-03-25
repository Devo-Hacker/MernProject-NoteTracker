import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white border-b">

      {/* LEFT */}
      <h1 className="text-lg font-bold text-gray-800">
        The Digital Sanctuary
      </h1>

      {/* RIGHT */}
      <div className="flex gap-6 items-center">
        <Link
          to="/"
          className="text-gray-700 font-medium hover:text-black"
        >
          Home
        </Link>

        <Link
          to="/create"
          className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          + Create
        </Link>
      </div>
    </div>
  );
}

export default Navbar;