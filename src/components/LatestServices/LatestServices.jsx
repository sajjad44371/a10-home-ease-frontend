import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import { Link } from "react-router";

const LatestServices = () => {
  return (
    <>
      <div className="py-20 bg-base-100 text-base-content">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-center text-base-content mb-3">
              Why HomeEase is the Right Choice
            </h2>
            <p className="text-center text-xl text-gray-500 mb-12">
              Experience the professional difference with safety, speed, and
              quality at the core of every service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard></ServiceCard>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="btn btn-primary rounded-lg shadow-lg text-white"
            >
              All Services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestServices;
