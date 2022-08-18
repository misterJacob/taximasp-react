

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Excursions from "./Excursions";
import Airport from "./Airport";
import Information from "./Information";

// informationlink 
import AreaInfo from "./info/AreaInfo";
import TipsInfo from "./info/TipsInfo";
import TransferInfo from "./info/TransferInfo";
import InfoDisplay from "./info/InfoDisplay";

import React from 'react'
import { Routes, Route } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/about" element={ <About /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="excursions" element={ <Excursions /> } />
      <Route path="airport" element={ <Airport /> } />
      <Route path="information" element={ <Information /> } >
        <Route path="areainfo" element={ <AreaInfo /> } />
        <Route path="tipsinfo" element={ <TipsInfo /> } />
        <Route path="transferinfo" element={ <TransferInfo /> } />
        <Route path=":id" element={ <InfoDisplay /> } />
      </Route>
    </Routes>
    );
  }
  
  export default Pages
  
  
  // import ShowContent from "./ShowContent";
  // <Route path=":id" element={ <ShowContent /> } />
