import Navbar from "../Components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Routes/Home"
import About from "./Routes/About"
import Contact from "./Routes/Contact"
import Service from "./Routes/Service"
import Login from "./Routes/Login"
import Travelplan from "../Components/Travelplan"
import '../src/App.css'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/travel-plan" element={<Travelplan />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>

      </BrowserRouter>

    </div>

  )
}

export default App
