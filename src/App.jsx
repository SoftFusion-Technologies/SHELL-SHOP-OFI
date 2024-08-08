import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import NotFound from './pages/NotFound';
import WhatsappBut from './components/WhatsappBut';
import Delivery from './pages/Delivery';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> se pasa adentro del router, para aplicar otros estilos */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/nosotros" element={<About />}></Route>
          <Route path="/contacto" element={<Contact />}></Route>
          <Route path="/delivery" element={<Delivery />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <WhatsappBut />
      <Footer />
    </div>
  );
}

export default App;