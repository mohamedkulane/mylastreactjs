import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Courses from "./pages/courses"
import About from "./pages/about"
import Contact from "./pages/contact"
import Cartpage from "./pages/cartpage"

function App(){
  return <>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Courses" element={<Courses/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/cartpage" element={<Cartpage/>}></Route>
  </Routes>
  </>
}
export default App