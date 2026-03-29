
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/navbar'
import Rating from './components/rating/Rating'
import Tools from './components/tools/Tools'

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
    </>
  )
}

export default App
