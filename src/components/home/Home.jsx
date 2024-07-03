import React from "react";
import {
  home_page_brand_name,
  home_page_brand_name_2,
  home_page_content,
  home_page_image_1,
  learnMore,
} from "../../utils/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="container min-h-[620px] flex mt-10 sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
          <div className="order-1 sm:order-2">
            <img
              src={home_page_image_1}
              alt=""
              className="w-full sm:max-w-[280px] md:max-w-[430px]"
            />
          </div>
          <div className="space-y-5 xl:pr-40">
            <h1 className="text-4xl sm:text-5xl font-semibold">
              {home_page_brand_name + " "}
              <span className="text-primary">{home_page_brand_name_2}</span>
            </h1>
            <p>{home_page_content}</p>
            <div className="space-y-5">
              <Link to="/contact">
                <button className="primary-btn ">{learnMore}</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
