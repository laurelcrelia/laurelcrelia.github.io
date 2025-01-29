import React from "react"
import Navbar from "../../components/Navbar.jsx"
import About from "../../components/About.jsx"
import Info from "./components/Info.jsx"
import Contact from "./components/Contact.jsx"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Info/>
        <About/>
        <Contact/>
    </div>
  )
}

export default Home