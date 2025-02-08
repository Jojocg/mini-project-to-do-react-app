import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ToDoDetails from './pages/ToDoDetails' 

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Footer />

      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/details' element={<ToDoDetails />}/> 
      </Routes>
    </>
  )
}

export default App
