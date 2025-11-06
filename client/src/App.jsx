import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css'
import Signup from './pages/Signup'
import SignIn from './pages/Signin'
import Home from './pages/Home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
       <Routes>
        {/* Signup Route */}
        <Route path = "/signup" element = {<Signup />}/>
        {/* signin route */}
        <Route path = "/signin" element = {<SignIn />}/>
        {/* home route */}

        <Route path = "/" element = {<Home />}/>
       </Routes>
     </Router>
    </>
  )
}

export default App
