import React from "react";
import { Broccoli } from "../icons/Broccoli";
export const Footer = () => {
  return (
    <div className="px-">
      <div className="text-gray-600 body-font border-t border-gray-200">
        <div className="container px-5 py-8 mx-3 flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-green-900">
            <Broccoli width="24" height="24" />
            <span className="ml-3 text-xl font-bold">Broccoli Market</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
            © 2023 Broccoli Market —
            <a href="https://github.com/marketccoli" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">
              @Marketccoli-Github
            </a>
          </p>
          <span className="inline-flex mt-0 justify-center sm:justify-start"></span>
        </div>
      </div>
    </div>
  );
};
