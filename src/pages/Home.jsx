import React from "react";
import Slider from "../components/Slider/Slider";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import ProSection from "../components/ProSection/ProSection";
import ServiceTracker from "../components/ServiceTracker/ServiceTracker";
import Faq from "../components/FAQ/Faq";
import LatestServices from "../components/LatestServices/LatestServices";

// promise
const latestServicesPromise = fetch("http://localhost:3000/services").then(
  (res) => res.json()
);

const Home = () => {
  return (
    <>
      <section>
        <Slider></Slider>
      </section>
      <section>
        <LatestServices
          latestServicesPromise={latestServicesPromise}
        ></LatestServices>
      </section>
      <section>
        <WhyChoose></WhyChoose>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section>
        <ProSection></ProSection>
      </section>
      <section>
        <ServiceTracker></ServiceTracker>
      </section>
      <section>
        <Faq></Faq>
      </section>
    </>
  );
};

export default Home;
