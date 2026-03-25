import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/Createnote";
import Navbar from "./components/navbar";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </>
  );
}

export default App;