import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outletcomponent from "./My_Component/OutletComponents/Outletcomponent";
import HomePage from "./My_ScreenPages/LandingPage/Landingpage";
import AboutusPage from "./My_ScreenPages/AboutPage/Aboutpage";
import NotFound from "./My_ScreenPages/PageNotFound/PageNotFounds";
import WelcomeBackPage from "./My_ScreenPages/LoginPage/Desktop";
import ContactusPage from "./My_ScreenPages/ContactPage/ContactusPage";
import MyRegisterPage from "./My_ScreenPages/RegisterPage/RegisterScreen";
import ResetPassword from "./My_ScreenPages/ResetPassword/ResetPassword";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Outletcomponent />}>
          <Route path="/about" element={<AboutusPage />} />
          <Route path="/contact" element={<ContactusPage />} />
        </Route>

        <Route path="/login" element={<WelcomeBackPage />}>
          <Route path="reset" element={<ResetPassword />} />
        </Route>
        <Route path="/signup" element={<MyRegisterPage />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
