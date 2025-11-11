import React from "react";
import {
  BsShieldCheck,
  BsLightningCharge,
  BsTrophy,
  BsMap,
} from "react-icons/bs";

const reasons = [
  {
    icon: BsShieldCheck,
    title: "100% Verified Professionals",
    description:
      "Every service provider on HomeEase undergoes a strict background check and verification process, ensuring your safety and peace of mind.",
    color: "text-primary",
  },
  {
    icon: BsLightningCharge,
    title: "Instant Booking & Service",
    description:
      "No more waiting! Get real-time availability and book services instantly, often with same-day appointments for urgent needs.",
    color: "text-secondary",
  },
  {
    icon: BsTrophy,
    title: "Quality Guaranteed Work",
    description:
      "We back every job with a service guarantee. If you're not satisfied, we'll make it right. Excellence is our standard.",
    color: "text-warning",
  },
  {
    icon: BsMap,
    title: "Transparent Pricing",
    description:
      "See the estimated cost upfront before you book. No hidden fees, no surprises. What you see is exactly what you pay.",
    color: "text-info",
  },
];

const WhyChoose = () => {
  return (
    <div className="py-20 bg-white text-base-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-4xl font-heading font-bold text-center text-base-content mb-3">
          Why HomeEase is the Right Choice
        </h2>
        <p className="text-center text-xl text-gray-500 mb-12">
          Experience the professional difference with safety, speed, and quality
          at the core of every service.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-start h-full">
                <div
                  className={`p-3 rounded-full bg-base-200 mb-4 ${reason.color}`}
                >
                  <reason.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-heading font-semibold text-base-content mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 grow">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn btn-primary rounded-lg shadow-lg text-white">
            Book Your Service Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
