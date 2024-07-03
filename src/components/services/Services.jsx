import React from "react";
import {
  serviceContent,
  serviceTitle,
  servicesProvided,
} from "../../utils/data";

const Services = () => {
  return (
    <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12 text-center space-y-3">
          <h1 className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary">
            {serviceTitle}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {serviceContent}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {servicesProvided.map((skill) => (
            <div key={skill.name} className="space-y-3 sm:space-y-4 p-4">
              <div>{skill.icon}</div>
              <h1 className="text-lg font-semibold">{skill.name}</h1>
              <p className="text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-4 sm:mt-8">
          <button className="primary-btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
