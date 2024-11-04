// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header'
import Image from './Components/Image/Image';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Supplier from './Components/Supplier/Supplier';
import Supply from './Components/Supply/Supply';
import About from './Components/About/About';
import Petromax from './Components/Petromax/Petromax';
import Loren from './Components/Lorem/Loren';
import Map from './Components/Map/Map';
import Footer from './Components/Footer/Footer';
import Last from './Components/last/last';

function App() {
  

  return (
    <>
      <Header/>
      <Navbar/> 
      <Banner/>
      <Supplier/>
      <Image></Image>
      <Services/>
      <Supply/>
      <About/>
      <Petromax/>
      <Loren/>
      <Map/>
      <Footer></Footer>
      <Last/>
    </>
  )
}

export default App
