import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Result from './components/result/Result'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
