import React from "react";
import { ArrowRight } from "lucide-react"; // আইকন ব্যবহারের জন্য

// স্ট্যাটিক ডেমো সার্ভিস ডেটা
const staticServiceData = {
  id: 1,
  imageURL: "https://placehold.co/800x400/3b82f6/ffffff?text=AC+Service", // ডেমো ইমেজ URL
  title: "Expert AC Repair & Service",
  description:
    "Keep your cool with our certified technicians. From routine maintenance to complex repairs, we've got your AC covered.",
  startingPrice: "BDT 500",
  rating: 4.8,
  reviews: 120,
  categoryColor: "border-primary", // ক্যাটেগরি হাইলাইটের জন্য প্রাইমারি রঙ
};

const ServiceCard = () => {
  const service = staticServiceData;

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
      {/* উপরের অংশ: ইমেজ ডিসপ্লে */}
      <figure className="h-48 overflow-hidden">
        <img
          src={service.imageURL}
          alt={service.title}
          // যদি ডেমো ইমেজ লোড না হয়, তবে ফলব্যাক টেক্সট দেখাবে
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/800x400/94a3b8/ffffff?text=Image+Not+Found";
          }}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </figure>

      <div className="card-body p-6">
        {/* টাইটেল ও রেটিং */}
        <div className="flex items-start justify-between mb-2">
          <h2 className="card-title text-2xl font-bold text-gray-900 flex-grow">
            {service.title}
          </h2>
          {/* রেটিং ডিসপ্লে */}
          <div className="flex items-center text-gray-700 text-sm ml-4 pt-1 flex-shrink-0">
            <span className="text-warning mr-1">★</span> {service.rating}
          </div>
        </div>

        {/* বর্ণনা */}
        <p className="text-gray-600 mb-4 h-12 overflow-hidden text-base">
          {service.description}
        </p>

        {/* রিভিউ সংখ্যা */}
        <p className="text-sm text-gray-500 mb-4">{service.reviews} Reviews</p>

        {/* নিচের অংশ: মূল্য এবং অ্যাকশন বাটন */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
          <div>
            <span className="text-sm text-gray-500">Starting from</span>
            <p className="text-xl font-bold text-primary">
              {service.startingPrice}
            </p>
          </div>
          <button className="flex items-center text-primary hover:bg-primary hover:text-white px-3 py-2 rounded-lg transition duration-200">
            Book Now
            <ArrowRight
              size={20}
              className="ml-1 transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
