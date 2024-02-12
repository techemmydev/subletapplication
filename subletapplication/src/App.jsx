import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outletcomponent from "./component/Outletcomponent";
import HomePage from "./pages/Landingpage";
import AboutusPage from "./pages/Aboutpage";
import NotFound from "./pages/PageNotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outletcomponent />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutusPage />} />
          {/* {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
