import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./pages/Login"
import Reg from "./pages/Reg"
import Home from "./pages/home"
import NotFound from "./pages/NotFound"
import Navbar from './components/Navbar'
import { useState } from 'react'
import Logout from './pages/Logout'
import NoAccess from './pages/NoAccess'
import Inicio from './pages/Inicio'
import RegProd from './pages/RegProd'
import ListProd from './pages/ListProd'

const App = () => {
  const [login, setLogin]=useState(false);

  const handleLogin=(()=>{
    setLogin(true)
  })

  const handleLogout=(()=>{
    setLogin(false)
  })

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/register" element={<Reg />} />
        <Route path="/RegProd" element={<RegProd />} />
        <Route path="/ListProd" element={<ListProd />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        <Route path="/noaccess" element={<NoAccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


