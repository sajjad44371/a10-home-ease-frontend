import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  return (
    <div
      className={`
        card w-full max-w-sm bg-white shadow-xl 
        rounded-lg 
        overflow-hidden 
        transition-all duration-300 ease-in-out 
        hover:shadow-2xl hover:-translate-y-2 
        group 
      `}
    >
      <figure className="h-48 overflow-hidden">
        <img
          src={service?.photoURL}
          alt={service?.service_name}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/800x400/94a3b8/ffffff?text=Image+Not+Found";
          }}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>

      <div className="card-body p-6">
        <div className="flex items-start justify-between mb-2">
          <h2 className="card-title text-2xl font-bold text-gray-900 grow">
            {service?.service_name}
          </h2>

          <div className="flex items-center text-gray-700 text-sm ml-4 pt-1 shrink-0">
            <span className="text-warning mr-1">★</span>{" "}
            {service?.rating || "4.0"}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-500">Starting from</span>
            <p className="text-xl font-bold text-primary">{service?.price}</p>
          </div>
          <Link
            to={`/service-details/${service._id}`}
            className="flex items-center text-primary hover:bg-primary hover:text-white px-3 py-2 rounded-lg transition duration-200"
          >
            Details
            <ArrowRight
              size={20}
              className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
