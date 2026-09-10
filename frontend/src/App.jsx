import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services"
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import TrackPackage from "./pages/TrackPackage";
import Booking from "./components/booking";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

 function App () {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/track" element={<TrackPackage />} />
        <Route path="/book-delivery" element={<Booking />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/navbar" element={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  );
 }
 

 export default App;
 