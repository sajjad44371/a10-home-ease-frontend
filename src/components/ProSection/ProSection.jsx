import React from "react";
import { CheckCircle, Clock, Star, Wrench, ShieldCheck } from "lucide-react";

const providerMatchData = {
  providerName: "Rifat Ahmed",
  matchScore: 92,
  metrics: [
    {
      icon: Wrench,
      title: "Skill-to-Job Match",
      value: "Excellent",
      description: "Holds all necessary certifications for Inverter AC Repair.",
      scoreType: "bar",
      scoreValue: 95,
    },
    {
      icon: Clock,
      title: "On-Time Arrival Record",
      value: "98% Success",
      description:
        "Consistent history of starting jobs within the agreed upon time window.",
      scoreType: "statistic",
    },
    {
      icon: Star,
      title: "Customer Repeat Rate",
      value: "40% Return",
      description:
        "High rate of customers requesting this specific Pro for repeat bookings.",
      scoreType: "statistic",
    },
    {
      icon: ShieldCheck,
      title: "Background Verification",
      value: "Fully Cleared",
      description:
        "Passed all required identity and security checks by HomeHero standards.",
      scoreType: "check",
    },
  ],
};

const ProSection = () => {
  const { providerName, matchScore, metrics } = providerMatchData;

  const getProgressColor = (score) => {
    if (score >= 90) return "progress-success";
    if (score >= 70) return "progress-warning";
    return "progress-error";
  };

  return (
    <div className="py-20 bg-base-100 text-base-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-extrabold text-base-content mb-2">
            Find Your Perfect Pro
          </h2>
          <p className="text-xl text-gray-500">
            See why <span className="text-primary">{providerName}</span> is the
            best choice for your specific service need.
          </p>
        </div>

        <div className="card bg-white shadow-2xl p-6 lg:p-12 ">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-8 pb-8 border-b border-gray-200">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <span className="text-6xl font-extrabold text-primary font-heading leading-none">
                {matchScore}%
              </span>
              <p className="text-xl font-semibold text-gray-700 mt-2">
                Overall Job Match
              </p>
            </div>

            <div className="text-center lg:text-right">
              <h3 className="text-3xl font-heading font-bold text-base-content">
                Provider: {providerName}
              </h3>
              <button className="btn btn-primary mt-4 rounded-lg text-white">
                Book {providerName} Now
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="flex flex-col p-4 bg-base-50 rounded-lg border border-gray-100"
              >
                <div
                  className={`text-3xl mb-3 ${
                    metric.scoreType === "check"
                      ? "text-success"
                      : metric.color || "text-primary"
                  }`}
                >
                  <metric.icon />
                </div>

                <h4 className="text-lg font-semibold text-base-content mb-2">
                  {metric.title}
                </h4>

                {metric.scoreType === "bar" && (
                  <>
                    <p className="text-xl font-bold text-gray-800 mb-1">
                      {metric.scoreValue}%
                    </p>
                    <progress
                      className={`progress w-full h-2 ${getProgressColor(
                        metric.scoreValue
                      )}`}
                      value={metric.scoreValue}
                      max="100"
                    ></progress>
                    <p className="text-sm text-gray-500 mt-1">
                      {metric.description}
                    </p>
                  </>
                )}

                {metric.scoreType === "statistic" && (
                  <>
                    <p className="text-xl font-bold text-primary mb-1">
                      {metric.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {metric.description}
                    </p>
                  </>
                )}

                {metric.scoreType === "check" && (
                  <>
                    <div className="flex items-center text-success font-bold text-lg mb-1">
                      <CheckCircle className="w-5 h-5 mr-2" /> {metric.value}
                    </div>
                    <p className="text-sm text-gray-500">
                      {metric.description}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProSection;
