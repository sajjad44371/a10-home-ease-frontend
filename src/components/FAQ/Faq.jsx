import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "How are the service professionals verified?",
    answer:
      "Every Pro on HomeEase undergoes a stringent 5-point verification process including background checks, identity confirmation, and skill certification tests. Your safety is our top priority.",
  },
  {
    id: 2,
    question: "Are there any hidden fees or charges?",
    answer:
      "Absolutely not. We operate on transparent pricing. The estimated quote you receive before booking is what you pay. Any necessary parts or unforeseen complexities will be discussed and approved by you upfront.",
  },
  {
    id: 3,
    question: "What if I am not satisfied with the service?",
    answer:
      "We offer a 7-day service guarantee on all major repairs. If you encounter any issues related to the service performed within this period, we will send a Pro back free of charge to fix it.",
  },
  {
    id: 4,
    question: "How quickly can I book an urgent repair?",
    answer:
      "For urgent repairs (like plumbing leaks or electrical faults), our instant booking feature allows you to see the nearest available Pros, often enabling same-day or within 2-hour service.",
  },
  {
    id: 5,
    question: "What payment methods does HomeEase accept?",
    answer:
      "We accept all major credit/debit cards, mobile banking services (Bkash, Nagad), and cash upon completion of the service. All transactions are securely processed through the app.",
  },
];

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-base-200 text-base-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-extrabold text-base-content mb-2">
            Common Questions & Quick Answers
          </h2>
          <p className="text-xl text-gray-500">
            Everything you need to know about booking, safety, and our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              tabIndex={0}
              className="collapse collapse-arrow bg-white shadow-lg rounded-xl border border-gray-100 transition-all duration-300 hover:border-primary"
            >
              <input
                type="checkbox"
                className="peer"
                checked={openId === faq.id}
                onChange={() => handleToggle(faq.id)}
              />

              <div className="collapse-title text-xl font-semibold text-base-content peer-checked:bg-primary peer-checked:text-white transition-colors duration-300">
                {faq.question}
              </div>

              <div className="collapse-content p-5 text-gray-700 bg-white">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
