
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/Footer/Footer'
import GetStarted from './components/get started/GetStarted'
import Navbar from './components/navbar/navbar'
import Pricing from './components/Pricing.jsx/Pricing'
import Rating from './components/rating/Rating'

import Tools from './components/tools/Tools'
import Workflow from './components/Workflow/Workflow'

const fetchTools = async()=> {
  const res = await fetch ('/Data.json')
  return res.json()
}

const promiseTools = fetchTools()
function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Rating></Rating>
      <Tools promiseTools={promiseTools}></Tools>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default App
