import React from "react";
import {
  footerLinks,
  helpLinks,
  resourcesLinks,
  socialMedia,
} from "../../utils/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-white">
      <section className="container py-10">
        <div className="grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              Digital Agency
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit consectetur adipisicing elit ipsum
              dolor sit amet consectetur. adipisicing{" "}
            </p>
            <br />

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              {socialMedia.map((app) => (
                <Link key={app.id} to={app.link}>
                  {app.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Company
              </h1>
              <ul className="flex  flex-col gap-3">
                {footerLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer  text-gray-400"
                  >
                    <span>{link.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Help
                </h1>
                <ul className="flex  flex-col gap-3">
                  {helpLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer  text-gray-400"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex  flex-col gap-3">
                  {resourcesLinks.map((link) => (
                    <li
                      key={link.title}
                      className="cursor-pointer  text-gray-400"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
