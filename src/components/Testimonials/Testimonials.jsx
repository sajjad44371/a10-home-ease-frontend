import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Ayesha Rahman",
    city: "Dhaka",
    service: "AC Repair",
    rating: 5,
    text: "Truly incredible service! My AC was fixed within just 2 hours. The technician was highly professional and courteous. I highly recommend HomeEase.",
    id: 1,
  },
  {
    name: "Imran Hossain",
    city: "Chattogram",
    service: "Plumbing Service",
    rating: 5,
    text: "The leak in my house pipe was resolved quickly and efficiently. There was no hassle at all. HomeEase is very reliable and trustworthy.",
    id: 2,
  },
  {
    name: "Farida Begum",
    city: "Khulna",
    service: "Deep Cleaning",
    rating: 4,
    text: "The deep cleaning service was very good. Only one small corner was missed, but the overall result was excellent and exceeded expectations.",
    id: 3,
  },
];

const StarRating = ({ count }) => (
  <div className="flex space-x-1 text-warning">
    {Array(count)
      .fill(0)
      .map((_, i) => (
        <BsStarFill key={i} className="w-5 h-5" />
      ))}
  </div>
);

const Testimonials = () => {
  return (
    <div className="py-20 bg-base-200 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <h2 className="text-4xl font-heading font-bold text-center text-base-content mb-4">
          Customer Says
        </h2>
        <p className="text-center text-lg text-gray-500 mb-12">
          Hear what our satisfied customers have to say about HomeEase.
        </p>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          className="mySwiper w-full p-4" // Custom class for styling swiper container
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="pb-12">
              <div className="flex flex-col lg:flex-row items-center justify-center w-full p-8 lg:p-16 bg-white shadow-2xl rounded-lg border-t-8 border-primary transition-all duration-500 ease-in-out">
                <div className="lg:w-1/3 w-full flex flex-col items-center lg:items-start mb-6 lg:mb-0">
                  <StarRating count={testimonial.rating} />

                  <p className="text-sm mt-4 text-gray-500">Service: </p>
                  <h4 className="text-2xl font-heading font-semibold text-primary">
                    {testimonial.service}
                  </h4>
                </div>

                <div className="lg:w-2/3 w-full lg:pl-10 border-t lg:border-t-0 lg:border-l border-gray-300 pt-6 lg:pt-0">
                  <blockquote className="text-xl italic text-base-content mb-6">
                    "{testimonial.text}"
                  </blockquote>

                  <div className="flex justify-between items-center">
                    <p className="text-base font-semibold text-base-content">
                      — {testimonial.name}
                      <span className="text-sm font-normal text-gray-500 block">
                        ({testimonial.city})
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
