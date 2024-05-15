import './App.css'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path='*' element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
