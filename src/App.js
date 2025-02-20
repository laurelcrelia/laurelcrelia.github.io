import React from "react"
import { Routes, Route, HashRouter } from "react-router-dom"
import Home from "./pages/Home/index.jsx"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}

export default App;