import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <div>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/projects" element={<h1>Projects</h1>} />
            <Route path="/contact" element={<h1>Contact</h1>} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
