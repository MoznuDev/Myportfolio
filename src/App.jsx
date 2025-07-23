
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayout from './Components/Layout/RootLayout'
import Home from './Components/Page/Home'
import About from './Components/Page/About'
import Contract from './Components/Layout/Contract'
import Service from './Components/Service'



function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/contract" element={<Contract/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
