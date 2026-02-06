import { ArrowLeft, Star } from "lucide-react";
import React from "react";
import { Link, useLoaderData } from "react-router";

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const service = serviceData[0];
  console.log(service);
  return (
    <>
      <div>
        <section className="bg-primary text-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold font-heading mb-4">
              Service Details
            </h1>
          </div>
        </section>

        <section className="bg-gray-50 min-h-screen py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center text-primary mb-6 hover:underline"
            >
              <ArrowLeft size={18} className="mr-1" />
              Back to Services
            </Link>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="h-[420px] overflow-hidden">
                <img
                  src={service?.photoURL}
                  alt={service?.service_name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h1 className="text-3xl font-bold text-gray-900 mb-3">
                    {service?.service_name}
                  </h1>

                  <div className="flex items-center text-gray-600 mb-6">
                    <Star className="text-warning mr-1" size={18} />
                    <span className="font-medium">
                      {service?.rating || "4.0"}
                    </span>
                    <span className="mx-2">•</span>
                    <span>Professional Service</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service?.description ||
                      "This service is designed to deliver high-quality results with modern tools and best practices. Perfect for businesses and individuals who want reliable and professional solutions."}
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      What you’ll get
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>High quality & professional work</li>
                      <li>On-time delivery</li>
                      <li>Friendly support</li>
                      <li>Affordable pricing</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border">
                  <p className="text-sm text-gray-500 mb-1">Starting from</p>
                  <p className="text-3xl font-bold text-primary mb-4">
                    {service?.price} BDT
                  </p>

                  <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition">
                    Book This Service
                  </button>

                  <p className="text-xs text-gray-500 mt-4 text-center">
                    100% satisfaction guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceDetails;
