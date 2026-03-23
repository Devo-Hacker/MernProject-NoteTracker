import react from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Createnote from './pages/createnote';

function App() {
  return (
    <div>
      {/* navbar */}
      <Navbar/>


    {/* main content */}
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/create" element={<Createnote />} />
      </Routes> 
    </main>

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default App;