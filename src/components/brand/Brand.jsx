import React from "react";
import { brand_page_title_1, companies } from "../../utils/data";

const Brand = () => {
  return (
    <div>
      <div className="container  mb-12 mt-12 sm:mt-0">
        <h1 className="text-center font-semibold text-xl">{brand_page_title_1}</h1>
        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
          {companies.map((company) => (
            <img className="px-2" src={company.url} alt={company.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
