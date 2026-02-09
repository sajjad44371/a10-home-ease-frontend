import React, { use, useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import { AuthContext } from "../Provider/AuthContext";
import Loading from "../components/Loading/Loading";

const Services = () => {
  const [services, setServices] = useState([]);
  const { loading, setLoading } = use(AuthContext);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, [setLoading]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen bg-base-100 w-full">
      <section className="bg-primary text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold font-heading mb-4">
            Explore All Our Services
          </h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            We provide fast, reliable, and verified professional services for
            all your home needs.
          </p>
        </div>
      </section>

      <section className="my-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
