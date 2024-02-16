import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outletcomponent from "./component/Outletcomponent";
import HomePage from "./pages/Landingpage";
import AboutusPage from "./pages/Aboutpage";
import NotFound from "./pages/PageNotFound";
import WelcomeBackPage from "./pages/Desktop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<WelcomeBackPage />} />
        <Route path="/" element={<Outletcomponent />}>
          <Route path="abouts" element={<AboutusPage />} />
          {/* {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
