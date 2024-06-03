import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Packages from "./components/Packages/Packages";
import Package from "./components/Package/Package";
import Add from "./components/Add/Add";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/all-packages" element={<Packages />} />
        <Route path="/package/:id" element={<Package />} />
        <Route path="/add-new-package" element={<Add />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
