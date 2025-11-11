import React from "react";
import {
  Clock,
  MapPin,
  CheckCircle,
  Package,
  Receipt,
  Wrench,
} from "lucide-react";

const bookingProgress = {
  bookingId: "HHX20240315-12345",
  serviceType: "Inverter AC Repair",
  providerName: "Rifat Ahmed",
  currentStatus: "Service In Progress",
  estimatedCompletion: "2:30 PM",
  totalSteps: [
    {
      id: 1,
      title: "Pro En Route",
      description: "Your service professional is on the way to your location.",
      icon: MapPin,
      status: "completed",
    },
    {
      id: 2,
      title: "Diagnostic Check",
      description: "Problem assessed, and cost confirmed with you.",
      icon: Clock,
      status: "completed",
    },
    {
      id: 3,
      title: "Service In Progress",
      description: "The repair/service is currently being performed.",
      icon: Wrench,
      status: "current",
    },
    {
      id: 4,
      title: "Final QA & Cleanup",
      description:
        "Job completed, Pro is ensuring everything is clean and tested.",
      icon: Package,
      status: "pending",
    },
    {
      id: 5,
      title: "Payment & Review",
      description: "Payment processing and opportunity to leave feedback.",
      icon: Receipt,
      status: "pending",
    },
  ],
};

const ServiceTracker = () => {
  const {
    bookingId,
    providerName,
    currentStatus,
    estimatedCompletion,
    totalSteps,
  } = bookingProgress;

  const getStepClass = (stepStatus) => {
    if (stepStatus === "completed") return "step-success";
    if (stepStatus === "current") return "step-primary";
    return "";
  };

  return (
    <div className="py-20 bg-base-200 text-base-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-extrabold text-base-content mb-2">
            Live Job Status
          </h2>
          <p className="text-xl text-gray-500">
            Track your service progress with{" "}
            <span className="text-primary">{providerName}</span> for Booking ID:
            <span className="text-primary">{bookingId}</span>
          </p>
          <div className="mt-4 text-2xl font-semibold text-primary">
            Current Status: {currentStatus}
          </div>
          <p className="text-lg text-gray-600">
            Estimated Completion: {estimatedCompletion}
          </p>
        </div>

        <div className="card bg-white shadow-2xl p-6 lg:p-12 ">
          <ul className="steps steps-vertical lg:steps-horizontal w-full">
            {totalSteps.map((step) => (
              <li
                key={step.id}
                className={`step ${getStepClass(step.status)}`}
                data-content={
                  step.status === "completed"
                    ? "✓"
                    : step.status === "current"
                    ? "●"
                    : ""
                }
              >
                <div className="flex flex-col items-center p-2 text-center">
                  <div
                    className={`text-3xl mb-2 ${
                      getStepClass(step.status) === "step-primary"
                        ? "text-primary"
                        : getStepClass(step.status) === "step-success"
                        ? "text-success"
                        : "text-gray-400"
                    }`}
                  >
                    <step.icon size={30} />
                  </div>
                  <h3 className="text-lg font-semibold text-base-content">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-16">
          <button className="btn btn-primary shadow-lg rounded-lg text-white">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceTracker;
