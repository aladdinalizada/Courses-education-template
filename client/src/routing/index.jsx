import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/detailsPage";
import Home from "../pages/home";
import JoinSection from "../pages/join";
import SignUp from "../sign-up";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="/pages/sign-up" element={<JoinSection />} />
        <Route path="/pages/login" element={<SignUp />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Routing;
