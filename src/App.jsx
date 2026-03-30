
import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/Footer/Footer'
import Navbar from './components/navbar/navbar'
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
      <Workflow></Workflow>
      <Footer></Footer>
    </>
  )
}

export default App
