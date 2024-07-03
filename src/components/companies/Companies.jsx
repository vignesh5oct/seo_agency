/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { companies, companies_page_title_1 } from "../../utils/data";

const Companies = () => {
  return (
    <>
      <div className="flex justify-center pt-5">
        <div className="pt-5 ">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl lg:text-3xl">{companies_page_title_1}</p>
            <div className="flex overflow-hidden space-x-16 pt-5 pb-6 group w-1/2">
              <ul className="flex space-x-16 items-center justify-center [&_li]:mx-8 [&_img]:max-w-28 animate-infinite-scroll group-hover:paused">
                {companies.map((company) => (
                  <li>
                    <img
                      className="px-2"
                      src={company.url}
                      alt={company.name}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
