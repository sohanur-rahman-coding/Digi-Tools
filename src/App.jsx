
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/Footer/Footer'
import GetStarted from './components/get started/GetStarted'
import Navbar from './components/navbar/navbar'
import Pricing from './components/Pricing.jsx/Pricing'
import Rating from './components/rating/Rating'

import Tools from './components/tools/Tools'
import Workflow from './components/Workflow/Workflow'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


const fetchTools = async () => {
  const res = await fetch('/Data.json')
  return res.json()
}

const promiseTools = fetchTools()
function App() {
  const [isSelected, setisSelected] = useState([])


  return (
    <>
      <Navbar isSelected={isSelected} setisSelected={setisSelected}></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <Tools promiseTools={promiseTools} isSelected={isSelected} setisSelected={setisSelected}></Tools>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
      <ToastContainer />

    </>
  )
}

export default App
