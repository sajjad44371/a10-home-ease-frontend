import React, { useState } from "react";
import {
  Wrench,
  Droplet,
  Zap,
  SprayCan,
  ArrowRight,
  ClipboardList,
} from "lucide-react";
import ServiceCard from "../components/ServiceCard/ServiceCard";

const allServicesData = [
  {
    id: 1,
    category: "ac",
    title: "Expert AC Repair & Service",
    description:
      "Keep your cool with certified technicians. Routine maintenance to complex repairs.",
    startingPrice: "BDT 500",
    rating: 4.8,
    reviews: 120,
    icon: Zap,
    categoryColor: "border-blue-500",
  },
  {
    id: 4,
    category: "ac",
    title: "Refrigerator & Freezer Repair",
    description:
      "Diagnosis and repair for all major brands of cooling appliances.",
    startingPrice: "BDT 600",
    rating: 4.7,
    reviews: 60,
    icon: Zap,
    categoryColor: "border-blue-500",
  },
  {
    id: 7,
    category: "ac",
    title: "Washing Machine Fix",
    description: "Solve drainage, spin, and electronic issues quickly.",
    startingPrice: "BDT 450",
    rating: 4.6,
    reviews: 90,
    icon: Zap,
    categoryColor: "border-blue-500",
  },

  // Plumbing
  {
    id: 2,
    category: "plumbing",
    title: "Emergency Plumbing Fix",
    description:
      "24/7 help for leaks, clogs, and pipe repairs. Fast, reliable service.",
    startingPrice: "BDT 350",
    rating: 4.5,
    reviews: 85,
    icon: Droplet,
    categoryColor: "border-sky-500",
  },
  {
    id: 5,
    category: "plumbing",
    title: "Bathroom & Kitchen Fitting",
    description: "Installation of taps, showers, sinks, and toilet fixtures.",
    startingPrice: "BDT 800",
    rating: 4.6,
    reviews: 45,
    icon: Droplet,
    categoryColor: "border-sky-500",
  },

  {
    id: 3,
    category: "cleaning",
    title: "Deep Home Cleaning (Apartment)",
    description:
      "Thorough deep cleaning for apartments and houses. Sanitization included.",
    startingPrice: "BDT 1500",
    rating: 4.9,
    reviews: 205,
    icon: SprayCan,
    categoryColor: "border-green-500",
  },
  {
    id: 6,
    category: "cleaning",
    title: "Sofa & Carpet Cleaning",
    description:
      "Deep steam cleaning to remove dirt and stains from upholstery and carpets.",
    startingPrice: "BDT 1000",
    rating: 4.9,
    reviews: 150,
    icon: SprayCan,
    categoryColor: "border-green-500",
  },
  {
    id: 8,
    category: "cleaning",
    title: "Pest Control & Fumigation",
    description: "Effective solutions for rodent, insect, and termite control.",
    startingPrice: "BDT 1200",
    rating: 4.5,
    reviews: 75,
    icon: SprayCan,
    categoryColor: "border-green-500",
  },

  {
    id: 9,
    category: "other",
    title: "Expert Electrician",
    description:
      "Wiring, circuit breaker repair, and all electrical maintenance.",
    startingPrice: "BDT 400",
    rating: 4.7,
    reviews: 110,
    icon: Wrench,
    categoryColor: "border-yellow-500",
  },
];

const serviceCategories = [
  { name: "All Services", icon: ClipboardList, filter: "all" },
  { name: "AC & Appliances", icon: Zap, filter: "ac" },
  { name: "Plumbing", icon: Droplet, filter: "plumbing" },
  { name: "Cleaning & Pest", icon: SprayCan, filter: "cleaning" },
  { name: "Other Repairs", icon: Wrench, filter: "other" },
];

const Services = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredServices = allServicesData.filter(
    (service) => activeFilter === "all" || service.category === activeFilter
  );

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

      <section className="py-8 bg-base-100 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {serviceCategories.map((category) => {
              const isActive = activeFilter === category.filter;
              const IconComponent = category.icon;
              return (
                <button
                  key={category.filter}
                  onClick={() => setActiveFilter(category.filter)}
                  className={`
                    btn btn-sm md:btn-md min-w-[120px] rounded-full transition duration-300
                    ${
                      isActive
                        ? "btn-primary shadow-lg"
                        : "btn-outline border-gray-300 hover:bg-primary/10 text-gray-700"
                    }
                  `}
                >
                  <IconComponent size={20} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10">
              <h3 className="text-2xl text-gray-700 font-semibold">
                No services found in this category.
              </h3>
              <p className="text-gray-500 mt-2">
                Please select a different category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
