import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ image, title, description }) => {
  return (
    <div> 
      <div className="space-y-2 p-4 ml-6">
        <div className="overflow-hidden">
          <img
            alt=""
            src={image}
            className="mx-auto h-[420px] w-full object-cover"
          />
          <div className="p-2 bg-white ">
            <h1 className="line-clamp-1 text-2xl font-semibold ">{title}</h1>
            <p className="line-clamp-4 text-gray-600 text-sm">{description}</p>
            <div className="flex justify-end pr-4 text-gray-600">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
