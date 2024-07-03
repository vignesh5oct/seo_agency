import React from "react";

const About = () => {
  return (
    <div className="">
      <div className="px-4 rounded-lg text-wrap w-[450px] ">
        <div className="flex flex-col justify-start px-5 py-28 ">
          <p className="text-green-900 font-bold text-2xl">Branding</p>
          <p className="text-3xl pt-1">Find your niche</p>
          <p className="text-sm">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus
            commodo id odio turpis pharetra elementum. Pulvinar porta porta
            feugiat scelerisque in elit. Morbi rhoncus, tellus, eros
          </p>
        </div>
      </div>
      <div className="px-10">
        <button className="text-xl px-4 py-2 flex items-center rounded-full  bg-primary-700 hover:bg-primary-800">
          Build my brand
        </button>
      </div>
    </div>
  );
};

export default About;
