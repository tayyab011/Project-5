
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Facilities from "./Pages/Facilities";
import Getintouch from './Components/Getintouch';



function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="facilities" element={<Facilities/>} />
        <Route path="get" element={<Getintouch/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
