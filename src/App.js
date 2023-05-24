import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Sjf from './components/SJF/Sjf'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lds from './components/LDS/Lds';
import Dpp from './components/DPP/Dpp';
import Fifo from './components/FIFO/Fifo';

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Sjf" element={<Sjf/>}/>
        <Route path="/Dpp" element={<Dpp/>}/>
        <Route path="/Lds" element={<Lds/>}/>
        <Route path="/Fifo" element={<Fifo/>}/>
        <Route path='/' element={<Body/>}/> 
        <Route path='/' element={<Body/>}/> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

