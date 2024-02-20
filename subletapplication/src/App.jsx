import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outletcomponent from "./My_Component/OutletComponents/Outletcomponent";
import HomePage from "./My_ScreenPages/LandingPage/Landingpage";
import AboutusPage from "./My_ScreenPages/AboutPage/Aboutpage";
import NotFound from "./My_ScreenPages/PageNotFound/PageNotFounds";
import WelcomeBackPage from "./My_ScreenPages/LoginPage/Desktop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<WelcomeBackPage />} />
        <Route path="/" element={<Outletcomponent />}>
          <Route path="/about" element={<AboutusPage />} />
          {/* {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
