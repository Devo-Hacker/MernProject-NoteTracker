import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-52 flex-shrink-0 flex flex-col justify-between border-r border-gray-100 py-6 px-4 bg-white">
      
      <div>
        <div className="mb-8 px-2">
          <div className="text-indigo-600 font-bold text-base">
            <h1 className="text-[27px] font-bold">The Digital Sanctuary</h1>
          </div>
          <div className="mt-[10px] text-gray-400 text-xs">Notes Editor</div>
        </div>

        <nav className="space-y-1">
          <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm">
            My Notes
          </Link>
           <Link to="/create" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-medium text-sm">
            Create New
          </Link>
        </nav>
      </div>

    </aside>
  );
}

export default Sidebar;