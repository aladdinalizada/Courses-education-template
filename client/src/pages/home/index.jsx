import React from "react";
import { Helmet } from "react-helmet";
import AbourArea from "../about-area";
import Support from "../about2-area";
import About3Area from "../about3-area";
import FeaturedCourses from "../courses-price";
import ExploreTopSubject from "../Explore-top-subjects";
import Hero from "../introduction";
import Services from "../services-area";
import TeamArea from "../team-area";

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
      <AbourArea />
      <ExploreTopSubject />
      <About3Area />
      <TeamArea />
      <Support />
    </div>
  );
};

export default Home;
