import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./layouts/Nav";
import Footer from "./layouts/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Restorent from "./components/Restorent";
import RestorentcardList from "./components/RestorentCardList";
import Services from "./components/Services";
import PricingTable from "./components/PricingTable";
import ContactUs from "./components/ContactUs";
import Checkout from "./components/Checkout";
import FoodMenu from "./components/FoodMenu";
import ResId from "./components/ResId";
import RestorentCard from "./components/RestorentCard";
function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />

          <Route path="restorent" element={<Restorent />}>
            <Route index element={<RestorentcardList />} />
            <Route path="restorentcard/:id" element={<RestorentCard />} >
            <Route path="food" element={<home />}/>
            </Route>
          </Route>

          <Route path="services" element={<Services />} />
          <Route path="pricingtable" element={<PricingTable />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
