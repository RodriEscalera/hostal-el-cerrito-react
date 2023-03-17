import { Route, Routes, useLocation } from "react-router-dom";
import SaltaHome from "./components/SaltaHome";
import Start from "./components/Start";
import NavBar from "./components/NavBar";
import "./styles/styles.css";
import SideBar from "./components/SideBar";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Rooms from "./components/Rooms";
import LocationSalta from "./components/LocationSalta";
import Contact from "./components/Contact";

function App() {
  const location = useLocation();
  const isActive = useSelector((state) => state.sideBar);

  return (
    <div className="bg-background">
      <div className="h-[4rem]"></div>
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/salta/home" element={<SaltaHome />} />
        <Route path="/salta/rooms" element={<Rooms />} />
        <Route path="/salta/location" element={<LocationSalta />} />
        <Route path="/salta/contact" element={<Contact />} />
      </Routes>
      <div className="h-[3rem]"></div>
      <Footer />
    </div>
  );
}

export default App;
