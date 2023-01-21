import React from "react";
import { Helmet } from "react-helmet";
import FeaturedCourses from "../courses-price";
import Hero from "../introduction";
import Services from "../services-area";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Courses | Education</title>
        <meta
          name="description"
          content="Courses page of Education react minimalist landing page"
        />
      </Helmet>
      <Hero />
      <Services />
      <FeaturedCourses />
    </div>
  );
};

export default Home;
