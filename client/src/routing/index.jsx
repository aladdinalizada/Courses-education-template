import React from "react";
import { Route, Routes } from "react-router-dom";
import Details from "../pages/detailsPage";
import Home from "../pages/home";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default Routing;
